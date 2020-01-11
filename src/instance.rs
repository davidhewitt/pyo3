// Copyright (c) 2017-present PyO3 Project and Contributors
use crate::err::{PyErr, PyResult};
use crate::gil;
use crate::object::PyObject;
use crate::objectprotocol::ObjectProtocol;
use crate::pyclass::{PyClass, PyClassShell};
use crate::pyclass_init::PyClassInitializer;
use crate::type_object::{PyObjectLayout, PyTypeInfo};
use crate::types::PyAny;
use crate::{ffi, IntoPy};
use crate::{AsPyPointer, FromPyObject, IntoPyPointer, Python, ToPyObject, IntoPyValue};
use std::marker::PhantomData;
use std::mem;
use std::ptr::NonNull;

/// Types that are built into the python interpreter.
///
/// pyo3 is designed in a way that that all references to those types are bound to the GIL,
/// which is why you can get a token from all references of those types.
pub unsafe trait PyNativeType: Sized {
    fn py(&self) -> Python {
        unsafe { Python::assume_gil_acquired() }
    }
}

/// Safe wrapper around unsafe `*mut ffi::PyObject` pointer with specified type information.
///
/// `Py<T>` is thread-safe, because any python related operations require a Python<'p> token.
#[derive(Debug)]
#[repr(transparent)]
pub struct Py<T>(NonNull<ffi::PyObject>, PhantomData<T>);

unsafe impl<T> Send for Py<T> {}

unsafe impl<T> Sync for Py<T> {}

impl<T> Py<T> {
    /// Create new instance of T and move it under python management
    pub fn new(py: Python, value: impl Into<PyClassInitializer<T>>) -> PyResult<Py<T>>
    where
        T: PyClass,
        <T::BaseType as PyTypeInfo>::ConcreteLayout:
            crate::type_object::PyObjectSizedLayout<T::BaseType>,
    {
        let initializer = value.into();
        let obj = unsafe { initializer.create_shell(py)? };
        let ob = unsafe { Py::from_owned_ptr(obj as _) };
        Ok(ob)
    }

    /// Creates a `Py<T>` instance for the given FFI pointer.
    /// This moves ownership over the pointer into the `Py<T>`.
    /// Undefined behavior if the pointer is NULL or invalid.
    #[inline]
    pub unsafe fn from_owned_ptr(ptr: *mut ffi::PyObject) -> Py<T> {
        debug_assert!(
            !ptr.is_null() && ffi::Py_REFCNT(ptr) > 0,
            format!("REFCNT: {:?} - {:?}", ptr, ffi::Py_REFCNT(ptr))
        );
        Py(NonNull::new_unchecked(ptr), PhantomData)
    }

    /// Creates a `Py<T>` instance for the given FFI pointer.
    /// Panics if the pointer is `null`.
    /// Undefined behavior if the pointer is invalid.
    #[inline]
    pub unsafe fn from_owned_ptr_or_panic(ptr: *mut ffi::PyObject) -> Py<T> {
        match NonNull::new(ptr) {
            Some(nonnull_ptr) => Py(nonnull_ptr, PhantomData),
            None => {
                crate::err::panic_after_error();
            }
        }
    }

    /// Construct `Py<T>` from the result of a Python FFI call that
    /// returns a new reference (owned pointer).
    /// Returns `Err(PyErr)` if the pointer is `null`.
    /// Unsafe because the pointer might be invalid.
    pub unsafe fn from_owned_ptr_or_err(py: Python, ptr: *mut ffi::PyObject) -> PyResult<Py<T>> {
        match NonNull::new(ptr) {
            Some(nonnull_ptr) => Ok(Py(nonnull_ptr, PhantomData)),
            None => Err(PyErr::fetch(py)),
        }
    }

    /// Creates a `Py<T>` instance for the given Python FFI pointer.
    /// Calls Py_INCREF() on the ptr.
    /// Undefined behavior if the pointer is NULL or invalid.
    #[inline]
    pub unsafe fn from_borrowed_ptr(ptr: *mut ffi::PyObject) -> Py<T> {
        debug_assert!(
            !ptr.is_null() && ffi::Py_REFCNT(ptr) > 0,
            format!("REFCNT: {:?} - {:?}", ptr, ffi::Py_REFCNT(ptr))
        );
        ffi::Py_INCREF(ptr);
        Py(NonNull::new_unchecked(ptr), PhantomData)
    }

    /// Gets the reference count of the ffi::PyObject pointer.
    #[inline]
    pub fn get_refcnt(&self) -> isize {
        unsafe { ffi::Py_REFCNT(self.0.as_ptr()) }
    }

    /// Clone self, Calls Py_INCREF() on the ptr.
    #[inline]
    pub fn clone_ref(&self, _py: Python) -> Py<T> {
        unsafe { Py::from_borrowed_ptr(self.0.as_ptr()) }
    }

    /// Returns the inner pointer without decreasing the refcount
    ///
    /// This will eventually move into its own trait
    pub(crate) fn into_non_null(self) -> NonNull<ffi::PyObject> {
        let pointer = self.0;
        mem::forget(self);
        pointer
    }
}

pub trait AsPyRef<T: PyTypeInfo>: Sized {
    /// Return reference to object.
    fn as_ref(&self, py: Python) -> &T;
}

impl<T: PyTypeInfo> AsPyRef<T> for Py<T> {
    fn as_ref(&self, _py: Python) -> &T {
        let any = self as *const Py<T> as *const PyAny;
        unsafe { T::ConcreteLayout::internal_ref_cast(&*any) }
    }
}

impl<T> ToPyObject for Py<T> {
    /// Converts `Py` instance -> PyObject.
    fn to_object(&self, py: Python) -> PyObject {
        unsafe { PyObject::from_borrowed_ptr(py, self.as_ptr()) }
    }
}

impl<T> IntoPy<PyObject> for Py<T> {
    /// Converts `Py` instance -> PyObject.
    /// Consumes `self` without calling `Py_DECREF()`
    #[inline]
    fn into_py(self, _py: Python) -> PyObject {
        unsafe { PyObject::from_not_null(self.into_non_null()) }
    }
}

impl<T> AsPyPointer for Py<T> {
    /// Gets the underlying FFI pointer, returns a borrowed pointer.
    #[inline]
    fn as_ptr(&self) -> *mut ffi::PyObject {
        self.0.as_ptr()
    }
}

unsafe impl<T> IntoPyPointer for Py<T> {
    /// Gets the underlying FFI pointer, returns a owned pointer.
    #[inline]
    fn into_ptr(self) -> *mut ffi::PyObject {
        self.into_non_null().as_ptr()
    }
}

impl<'a, T> std::convert::From<&PyClassShell<T>> for Py<T>
where
    T: PyClass,
{
    fn from(shell: &PyClassShell<T>) -> Self {
        unsafe { Py::from_borrowed_ptr(shell.as_ptr()) }
    }
}

impl<'a, T> std::convert::From<&mut PyClassShell<T>> for Py<T>
where
    T: PyClass,
{
    fn from(shell: &mut PyClassShell<T>) -> Self {
        unsafe { Py::from_borrowed_ptr(shell.as_ptr()) }
    }
}

impl<T> PartialEq for Py<T> {
    #[inline]
    fn eq(&self, o: &Py<T>) -> bool {
        self.0 == o.0
    }
}

/// Dropping a `Py` instance decrements the reference count on the object by 1.
impl<T> Drop for Py<T> {
    fn drop(&mut self) {
        unsafe {
            gil::register_pointer(self.0);
        }
    }
}

impl<T> std::convert::From<Py<T>> for PyObject {
    #[inline]
    fn from(ob: Py<T>) -> Self {
        unsafe { PyObject::from_not_null(ob.into_non_null()) }
    }
}

impl<'a, T> std::convert::From<&'a T> for PyObject
where
    T: AsPyPointer,
{
    fn from(ob: &'a T) -> Self {
        unsafe { Py::<T>::from_borrowed_ptr(ob.as_ptr()) }.into()
    }
}

impl<'a, T> std::convert::From<&'a mut T> for PyObject
where
    T: AsPyPointer,
{
    fn from(ob: &'a mut T) -> Self {
        unsafe { Py::<T>::from_borrowed_ptr(ob.as_ptr()) }.into()
    }
}

impl<'a, T> FromPyObject<'a> for Py<T>
where
    T: AsPyPointer,
    &'a T: 'a + FromPyObject<'a>,
{
    /// Extracts `Self` from the source `PyObject`.
    fn extract(ob: &'a PyAny) -> PyResult<Self> {
        unsafe {
            ob.extract::<&T>()
                .map(|val| Py::from_borrowed_ptr(val.as_ptr()))
        }
    }
}

impl<T> IntoPyValue<'_> for Py<T> {
    type Target = Self;

    fn into_py_value(self, _py: Python) -> Self::Target {
        self
    }

    fn with_borrowed_ptr<F, R>(self, _py: Python, f: F) -> R
    where
        F: FnOnce(*mut ffi::PyObject) -> R,
        Self: Sized
    {
        f(self.as_ptr())
    }
}
