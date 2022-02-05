window.BENCHMARK_DATA = {
  "lastUpdate": 1644073555024,
  "repoUrl": "https://github.com/davidhewitt/pyo3",
  "entries": {
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4305a9a45ab9426c1ce90288773795a484982e2a",
          "message": "Merge pull request #2145 from davidhewitt/merge-pytests\n\npytests: merge benchmark and test crates",
          "timestamp": "2022-02-05T12:27:56Z",
          "tree_id": "c0ef6c3dcc21e3bda0602d51187c9f2c3bee9600",
          "url": "https://github.com/davidhewitt/pyo3/commit/4305a9a45ab9426c1ce90288773795a484982e2a"
        },
        "date": 1644073553621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3281159.1011255863,
            "unit": "iter/sec",
            "range": "stddev: 5.810231700206736e-8",
            "extra": "mean: 304.7703476667604 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 8019818.3670754125,
            "unit": "iter/sec",
            "range": "stddev: 1.743267307224178e-8",
            "extra": "mean: 124.69110324301705 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 8923070.861182917,
            "unit": "iter/sec",
            "range": "stddev: 9.493506930373527e-9",
            "extra": "mean: 112.06904165146318 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 10085641.691252984,
            "unit": "iter/sec",
            "range": "stddev: 3.1610712218321527e-9",
            "extra": "mean: 99.15085530622922 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3235380.93222676,
            "unit": "iter/sec",
            "range": "stddev: 2.06338881048621e-8",
            "extra": "mean: 309.082615292381 nsec\nrounds: 121952"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2187451.870323579,
            "unit": "iter/sec",
            "range": "stddev: 2.341991852137923e-8",
            "extra": "mean: 457.1529154842966 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2984348.0549175846,
            "unit": "iter/sec",
            "range": "stddev: 1.6495255999462388e-8",
            "extra": "mean: 335.08155938869294 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1909284.0186394535,
            "unit": "iter/sec",
            "range": "stddev: 2.4248985796003612e-8",
            "extra": "mean: 523.7565444628353 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2031989.7300544656,
            "unit": "iter/sec",
            "range": "stddev: 2.887253989926941e-8",
            "extra": "mean: 492.1284715219656 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1811899.7765583391,
            "unit": "iter/sec",
            "range": "stddev: 2.517821263947558e-8",
            "extra": "mean: 551.9069061859333 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 2030570.945518246,
            "unit": "iter/sec",
            "range": "stddev: 1.5193891573392398e-8",
            "extra": "mean: 492.47232765097516 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1766293.112399329,
            "unit": "iter/sec",
            "range": "stddev: 3.111908943619579e-8",
            "extra": "mean: 566.1574474704249 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2451015.3853611085,
            "unit": "iter/sec",
            "range": "stddev: 2.1665795920620712e-8",
            "extra": "mean: 407.99417497403766 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5301550.432515967,
            "unit": "iter/sec",
            "range": "stddev: 1.120756794818875e-7",
            "extra": "mean: 188.62406624788474 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}