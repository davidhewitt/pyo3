use pyo3::prelude::*;
use pyo3::types::PyDict;

mod common;

#[pyclass(unsendable)]
struct UnsendableBase {
    rc: std::rc::Rc<usize>,
}

#[pymethods]
impl UnsendableBase {
    #[new]
    fn new() -> UnsendableBase {
        UnsendableBase {
            rc: std::rc::Rc::new(0),
        }
    }

    fn value(&self) -> usize {
        *self.rc.as_ref()
    }
}

#[pyclass(extends=UnsendableBase)]
struct UnsendableChild {}

fn run_test(py: Python, base: &PyAny) {
    // Setting empty panic hook means that stdout of `cargo test` doesn't get cluttered with the panic.
    std::panic::set_hook(Box::new(|_| {}));

    let source = pyo3::indoc::indoc!(
        r#"
def value_or_exception(unsendable):
    try:
        return unsendable.value()
    except BaseException as e:
        return e

import concurrent.futures
executor = concurrent.futures.ThreadPoolExecutor(max_workers=1)
future = executor.submit(value_or_exception, unsendable)
raise future.result()
"#
    );
    let locals = PyDict::new(py);
    locals.set_item("unsendable", base).unwrap();

    py.run(source, None, Some(locals)).unwrap();
}

/// If a class is marked as `unsendable`, it panics when accessed by another thread.
#[test]
#[should_panic(
    expected = "test_pyclass_unsendable::UnsendableBase is unsendable, but sent to another thread!"
)]
fn panic_unsendable_base() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    run_test(py, PyCell::new(py, UnsendableBase::new()).unwrap().as_ref())
}

#[test]
#[should_panic(
    expected = "test_pyclass_unsendable::UnsendableBase is unsendable, but sent to another thread!"
)]
fn panic_unsendable_child() {
    let gil = Python::acquire_gil();
    let py = gil.python();

    run_test(
        py,
        PyCell::new(py, (UnsendableChild {}, UnsendableBase::new()))
            .unwrap()
            .as_ref(),
    )
}
