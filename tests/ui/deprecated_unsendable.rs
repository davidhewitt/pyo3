#![deny(deprecated)]

use pyo3::prelude::*;

#[expect(dead_code)]
#[pyclass(unsendable)]
//~^ ERROR: use of deprecated struct `pyo3::impl_::pyclass::Unsendable`: `#[pyclass(unsendable)]` is deprecated, all Python types should be `Send` and `Sync`
struct Foo;

fn main() {}
