use pyo3::prelude::*;
use pyo3::wrap_pyfunction;

#[pyclass]
struct Foo {
    value: i32
}

#[pyfunction]
fn edit_foo(a: &mut Foo, b: &Foo) {
    let start = b.value;
    a.value += 1;
    assert_eq!(b.value, start);
}

#[test]
fn test_edit_foo() {
    use pyo3::types::IntoPyDict;

    let gil = Python::acquire_gil();
    let py = gil.python();
    let foo = Py::new(py, Foo { value: 0 }).unwrap().to_object(py);

    let locals = [
        ("foo", foo),
        ("edit_foo", wrap_pyfunction!(edit_foo)(py)),
    ].into_py_dict(py);

    py.run("edit_foo(foo, foo)", None, Some(&locals)).unwrap();
}
