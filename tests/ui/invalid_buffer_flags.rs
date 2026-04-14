use pyo3::buffer::{PyBufferFlags, PyUntypedBufferView};
use pyo3::prelude::*;
use pyo3::types::PyBytes;

fn main() {
    Python::attach(|py| {
        let bytes = PyBytes::new(py, &[1, 2, 3]);
        PyUntypedBufferView::with_flags(&bytes, PyBufferFlags::strided(), |view| {
            view.format();
        })
        .unwrap();
    });
}
