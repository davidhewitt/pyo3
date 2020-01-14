use pyo3::prelude::*;

#[pyclass]
#[derive(Clone, Debug, PartialEq)]
struct Cloneable {
    x: i32,
}

#[test]
fn test_cloneable_pyclass() {
    let c = Cloneable { x: 10 };

    let gil = Python::acquire_gil();
    let py = gil.python();

    let py_c = Py::new(py, c.clone()).unwrap().to_object(py);

    let c2: Cloneable = py_c.extract(py).unwrap();
    let rc: &Cloneable = py_c.extract(py).unwrap();
    let mrc: &mut Cloneable = py_c.extract(py).unwrap();

    assert_eq!(c, c2);
    assert_eq!(&c, rc);
    assert_eq!(&c, mrc);
}

#[test]
fn test_extract_buffer() {
    let gil = Python::acquire_gil();
    let py = gil.python();
    let bytes = py.eval("b'abcde'", None, None).unwrap();

    let chars: Vec<u8> = bytes.to_object(py).extract(py).unwrap();

    assert_eq!(&chars, &['a' as u8, 'b' as u8, 'c' as u8, 'd' as u8, 'e' as u8])
}
