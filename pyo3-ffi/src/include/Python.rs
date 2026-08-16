//! This module aims to be a Rust reimplementation of Python's `Include` directory,
//! which contains the header files which define the Python C API.
//!
//! This file is named `Python.rs` to match the `Python.h` header file,
//! which is the main entry point for the Python C API.

pub use self::abstract_::*;
#[cfg(not(RustPython))]
pub use self::bltinmodule::*;
pub use self::boolobject::*;
pub use self::bytearrayobject::*;
pub use self::bytesobject::*;
pub use self::ceval::*;
pub use self::codecs::*;
pub use self::compile::*;
pub use self::complexobject::*;
#[cfg(Py_3_13)]
pub use self::critical_section::*;
#[cfg(not(Py_LIMITED_API))]
pub use self::datetime::*;
pub use self::descrobject::*;
pub use self::dictobject::*;
#[cfg(not(RustPython))]
pub use self::enumobject::*;
pub use self::fileobject::*;
pub use self::fileutils::*;
pub use self::floatobject::*;
pub use self::genericaliasobject::*;
pub use self::import::*;
pub use self::intrcheck::*;
pub use self::iterobject::*;
pub use self::listobject::*;
pub use self::longobject::*;
pub use self::memoryobject::*;
pub use self::methodobject::*;
pub use self::modsupport::*;
pub use self::moduleobject::*;
pub use self::object::*;
pub use self::objimpl::*;
pub use self::osmodule::*;
#[cfg(not(any(PyPy, Py_LIMITED_API, Py_3_10)))]
pub use self::pyarena::*;
#[cfg(Py_3_11)]
pub use self::pybuffer::*;
pub use self::pycapsule::*;
pub use self::pyerrors::*;
pub use self::pyframe::*;
pub use self::pyhash::*;
pub use self::pylifecycle::*;
pub use self::pymem::*;
pub use self::pyport::*;
pub use self::pystate::*;
pub use self::pystrtod::*;
pub use self::pythonrun::*;
pub use self::pytypedefs::*;
pub use self::rangeobject::*;
pub use self::refcount::*;
pub use self::setobject::*;
pub use self::sliceobject::*;
#[cfg(Py_3_15)]
pub use self::slots::*;
pub use self::slots_generated::*;
pub use self::structseq::*;
pub use self::sysmodule::*;
pub use self::traceback::*;
pub use self::tupleobject::*;
pub use self::unicodeobject::*;
pub use self::warnings::*;
pub use self::weakrefobject::*;

pub(crate) mod abstract_;
// skipped asdl.h
// skipped ast.h
#[cfg(not(RustPython))]
pub(crate) mod bltinmodule;
pub(crate) mod boolobject;
pub(crate) mod bytearrayobject;
pub(crate) mod bytesobject;
// skipped cellobject.h
pub(crate) mod ceval;
// skipped classobject.h
pub(crate) mod codecs;
pub(crate) mod compile;
pub(crate) mod complexobject;
pub(crate) mod critical_section;
#[cfg(not(Py_LIMITED_API))]
pub(crate) mod datetime;
pub(crate) mod descrobject;
pub(crate) mod dictobject;
// skipped dynamic_annotations.h
#[cfg(not(RustPython))]
pub(crate) mod enumobject;
// skipped errcode.h
// skipped exports.h
pub(crate) mod fileobject;
pub(crate) mod fileutils;
pub(crate) mod floatobject;
// skipped empty frameobject.h
pub(crate) mod genericaliasobject;
pub(crate) mod import;
// skipped interpreteridobject.h
pub(crate) mod intrcheck;
pub(crate) mod iterobject;
pub(crate) mod listobject;
pub(crate) mod longobject;
pub(crate) mod memoryobject;
pub(crate) mod methodobject;
pub(crate) mod modsupport;
pub(crate) mod moduleobject;
// skipped namespaceobject.h
pub(crate) mod object;
pub(crate) mod objimpl;
// skipped odictobject.h
// skipped opcode.h
// skipped osdefs.h
pub(crate) mod osmodule;
// skipped parser_interface.h
// skipped patchlevel.h
// skipped picklebufobject.h
// skipped pyctype.h
// skipped py_curses.h
#[cfg(not(any(PyPy, Py_LIMITED_API, Py_3_10)))]
pub(crate) mod pyarena;
#[cfg(Py_3_11)]
pub(crate) mod pybuffer;
pub(crate) mod pycapsule;
// skipped pydtrace.h
pub(crate) mod pyerrors;
// skipped pyexpat.h
// skipped pyfpe.h
pub(crate) mod pyframe;
pub(crate) mod pyhash;
pub(crate) mod pylifecycle;
// skipped pymacconfig.h
// skipped pymacro.h
// skipped pymath.h
pub(crate) mod pymem;
pub(crate) mod pyport;
pub(crate) mod pystate;
// skipped pystats.h
pub(crate) mod pythonrun;
// skipped pystrhex.h
// skipped pystrcmp.h
pub(crate) mod pystrtod;
// skipped pythread.h
// skipped pytime.h
pub(crate) mod pytypedefs;
pub(crate) mod rangeobject;
pub(crate) mod refcount;
pub(crate) mod setobject;
pub(crate) mod sliceobject;
pub(crate) mod slots;
pub(crate) mod slots_generated;
pub(crate) mod structseq;
pub(crate) mod sysmodule;
pub(crate) mod traceback;
// skipped tracemalloc.h
pub(crate) mod tupleobject;
pub(crate) mod unicodeobject;
pub(crate) mod warnings;
pub(crate) mod weakrefobject;

// "Limited API" definitions matching Python's `include/cpython` directory.
#[cfg(not(any(Py_LIMITED_API, RustPython)))]
pub(crate) mod cpython;

#[cfg(not(any(Py_LIMITED_API, RustPython)))]
pub use self::cpython::*;
