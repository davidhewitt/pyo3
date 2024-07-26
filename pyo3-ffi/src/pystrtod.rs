use crate::object::PyObject;
use std::os::raw::{c_char, c_double, c_int};

extern "C" {
    #[cfg_attr(PyPy, link_name = "PyPyOS_string_to_double")]
    pub fn PyOS_string_to_double(
        str: *const c_char,
        endptr: *mut *mut c_char,
        overflow_exception: *mut PyObject,
    ) -> c_double;
    #[cfg_attr(PyPy, link_name = "PyPyOS_double_to_string")]
    pub fn PyOS_double_to_string(
        val: c_double,
        format_code: c_char,
        precision: c_int,
        flags: c_int,
        _type: *mut c_int,
    ) -> *mut c_char;
}

/* PyOS_double_to_string's "flags" parameter can be set to 0 or more of: */
pub const Py_DTSF_SIGN: c_int = 0x01; /* always add the sign */
pub const Py_DTSF_ADD_DOT_0: c_int = 0x02; /* if the result is an integer add ".0" */
pub const Py_DTSF_ALT: c_int = 0x04; /* "alternate" formatting. it's format_code specific */
pub const Py_DTSF_NO_NEG: c_int = 0x08; /* negative zero result is coerced to 0 */

/* PyOS_double_to_string's "type", if non-NULL, will be set to one of: */
pub const Py_DTST_FINITE: c_int = 0;
pub const Py_DTST_INFINITE: c_int = 1;
pub const Py_DTST_NAN: c_int = 2;
