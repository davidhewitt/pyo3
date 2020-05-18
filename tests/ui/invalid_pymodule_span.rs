use pyo3::prelude::*;
use pyo3::types::{PyTuple};

#[pymodule]
fn invalid_module(_py: Python, m: &PyModule) -> PyResult<()> {
    #[pyclass(freelist = 1000)]
    struct UUID {
    }

    #[pymethods]
    impl UUID {

        fn broken_function(
            fields: Option<Py<PyTuple>>,
        ) -> Result<Self> {
            unimplemented!()
        }

        // Using &PyTuple fixes the code span problem
        // fn good_function(
        //     fields: Option<&PyTuple>,
        // ) -> Result<Self> {
        //     unimplemented!()
        // }
    }
}


fn main() { }
