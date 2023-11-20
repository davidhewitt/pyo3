window.BENCHMARK_DATA = {
  "lastUpdate": 1700476643791,
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
    ],
    "pyo3-bench": [
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
        "date": 1644074019905,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79593,
            "range": "± 2084",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 222365,
            "range": "± 3400",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2787873,
            "range": "± 20698",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4947680,
            "range": "± 128512",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2927460,
            "range": "± 13110",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7752151,
            "range": "± 188373",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12802194,
            "range": "± 83473",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6679224,
            "range": "± 139954",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1845660,
            "range": "± 67583",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1566589,
            "range": "± 43868",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1110112,
            "range": "± 32261",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 972575,
            "range": "± 19262",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4614,
            "range": "± 23038",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3416,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2290501,
            "range": "± 13895",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8555203,
            "range": "± 73293",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3888041,
            "range": "± 22866",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5970400,
            "range": "± 72164",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1288883,
            "range": "± 2402",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1518669,
            "range": "± 62585",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 842245,
            "range": "± 922",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 718565,
            "range": "± 1010",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@davidhewitt.io",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abe518d1643ffaf162d77745acaf1eba5ba7f588",
          "message": "Merge pull request #3586 from davidhewitt/semver-checks-v2\n\nenable cargo-semver-checks, try 2",
          "timestamp": "2023-11-20T07:07:44Z",
          "tree_id": "af68d7d822b5c514b1b13e930aed480a690a1150",
          "url": "https://github.com/davidhewitt/pyo3/commit/abe518d1643ffaf162d77745acaf1eba5ba7f588"
        },
        "date": 1700476642061,
        "tool": "cargo",
        "benches": [
          {
            "name": "identify_object_type",
            "value": 437,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "collect_generic_iterator",
            "value": 11235650,
            "range": "± 63395",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_extract_fail",
            "value": 235,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_small",
            "value": 58,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_negative",
            "value": 177,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_positive",
            "value": 141,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_negative",
            "value": 1326,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_positive",
            "value": 1078,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "call_0",
            "value": 32777,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 99768,
            "range": "± 3292",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_dunder_methods",
            "value": 43,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_richcmp",
            "value": 45,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_via_extract",
            "value": 379,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2005517,
            "range": "± 51111",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4097005,
            "range": "± 87186",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2436092,
            "range": "± 21833",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6422623,
            "range": "± 150150",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 9648326,
            "range": "± 67212",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_restore_and_fetch",
            "value": 157,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_without_gil",
            "value": 15,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_success",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_fail",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_success",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_fail",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_success",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_fail",
            "value": 234,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_success",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_fail",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_extract_success",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_extract_fail",
            "value": 218,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_success",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_fail",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "enum_from_pyobject",
            "value": 973,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "list_via_downcast",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "list_via_extract",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_downcast",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract_enum",
            "value": 572,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "f64_from_pyobject",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 64,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 64,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_direct",
            "value": 111,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_intern",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1723201,
            "range": "± 51123",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1114690,
            "range": "± 114468",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 960808,
            "range": "± 18160",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 867466,
            "range": "± 18056",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3248,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 1860,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 1742687,
            "range": "± 61821",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1955798,
            "range": "± 14114",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7134759,
            "range": "± 19949",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3207520,
            "range": "± 13004",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1307859,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1098503,
            "range": "± 90654",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 860333,
            "range": "± 4344",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 779346,
            "range": "± 1696",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 165691,
            "range": "± 2668",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 79412,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_into_py",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}