window.BENCHMARK_DATA = {
  "lastUpdate": 1713525397685,
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
        "date": 1700476714842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 3956062.430196205,
            "unit": "iter/sec",
            "range": "stddev: 1.2645744417680066e-7",
            "extra": "mean: 252.77659734768235 nsec\nrounds: 167169"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 7794453.195427431,
            "unit": "iter/sec",
            "range": "stddev: 9.366498456797067e-9",
            "extra": "mean: 128.29636344299868 nsec\nrounds: 75104"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 13828097.767292602,
            "unit": "iter/sec",
            "range": "stddev: 4.712010664181664e-9",
            "extra": "mean: 72.31652659885624 nsec\nrounds: 139218"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 11751257.865852168,
            "unit": "iter/sec",
            "range": "stddev: 1.153227638498283e-8",
            "extra": "mean: 85.09727311030143 nsec\nrounds: 118681"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 4794530.282562914,
            "unit": "iter/sec",
            "range": "stddev: 1.7999636161507318e-8",
            "extra": "mean: 208.5710050965515 nsec\nrounds: 195351"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 3783780.9389251145,
            "unit": "iter/sec",
            "range": "stddev: 2.1370867190384344e-8",
            "extra": "mean: 264.28591299053295 nsec\nrounds: 167729"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 4031677.042781742,
            "unit": "iter/sec",
            "range": "stddev: 2.042623660276787e-8",
            "extra": "mean: 248.03574031069428 nsec\nrounds: 195695"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1756579.5250844343,
            "unit": "iter/sec",
            "range": "stddev: 1.9913795453436366e-7",
            "extra": "mean: 569.288202281609 nsec\nrounds: 151470"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2702072.550713321,
            "unit": "iter/sec",
            "range": "stddev: 3.212733291355763e-8",
            "extra": "mean: 370.0862879259144 nsec\nrounds: 195313"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1583139.7825966934,
            "unit": "iter/sec",
            "range": "stddev: 1.8603294926944458e-7",
            "extra": "mean: 631.6561626414205 nsec\nrounds: 123381"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 2500611.8673140905,
            "unit": "iter/sec",
            "range": "stddev: 6.680433197948298e-8",
            "extra": "mean: 399.9021251843058 nsec\nrounds: 187618"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1577352.097275217,
            "unit": "iter/sec",
            "range": "stddev: 1.4271525155357783e-7",
            "extra": "mean: 633.9738614653261 nsec\nrounds: 131683"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 3114808.9293568516,
            "unit": "iter/sec",
            "range": "stddev: 3.7386525197851974e-8",
            "extra": "mean: 321.0469799848945 nsec\nrounds: 193051"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 6307143.8823210485,
            "unit": "iter/sec",
            "range": "stddev: 1.3763776787203212e-8",
            "extra": "mean: 158.5503706048318 nsec\nrounds: 194175"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@davidhewitt.dev",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecb4ecbe22873cb29abde6d43c33aeea1937f9d7",
          "message": "Merge pull request #3789 from btel/patch-1\n\ndocs: add example for wrapping generic classes",
          "timestamp": "2024-02-05T12:03:20Z",
          "tree_id": "d5f31fa597e324b08e32b02c7e3d5b27c7c38232",
          "url": "https://github.com/davidhewitt/pyo3/commit/ecb4ecbe22873cb29abde6d43c33aeea1937f9d7"
        },
        "date": 1707140702157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2496333.166093321,
            "unit": "iter/sec",
            "range": "stddev: 9.875765452074633e-8",
            "extra": "mean: 400.587555212018 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 4655869.328218578,
            "unit": "iter/sec",
            "range": "stddev: 2.3903060201355512e-8",
            "extra": "mean: 214.782660230419 nsec\nrounds: 190115"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 10645849.147468027,
            "unit": "iter/sec",
            "range": "stddev: 5.7277379733411245e-9",
            "extra": "mean: 93.93332426073655 nsec\nrounds: 106180"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 6954787.293876634,
            "unit": "iter/sec",
            "range": "stddev: 1.4007792468869098e-8",
            "extra": "mean: 143.78584962338866 nsec\nrounds: 196117"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3312696.2705886653,
            "unit": "iter/sec",
            "range": "stddev: 3.0509868896609366e-8",
            "extra": "mean: 301.8689062677939 nsec\nrounds: 108144"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1506556.7897114975,
            "unit": "iter/sec",
            "range": "stddev: 1.2169624511474016e-7",
            "extra": "mean: 663.7652206867675 nsec\nrounds: 182482"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2834228.8567357482,
            "unit": "iter/sec",
            "range": "stddev: 3.097432497836077e-8",
            "extra": "mean: 352.8296586295168 nsec\nrounds: 195351"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1269818.5663209185,
            "unit": "iter/sec",
            "range": "stddev: 1.9063735950962046e-7",
            "extra": "mean: 787.5140799817793 nsec\nrounds: 149858"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1873024.0041319488,
            "unit": "iter/sec",
            "range": "stddev: 4.592156284355372e-8",
            "extra": "mean: 533.8959873413095 nsec\nrounds: 178859"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1070213.3391024286,
            "unit": "iter/sec",
            "range": "stddev: 2.209825539249963e-7",
            "extra": "mean: 934.3931377632467 nsec\nrounds: 130481"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1763658.813919531,
            "unit": "iter/sec",
            "range": "stddev: 4.537969638878319e-8",
            "extra": "mean: 567.0030915886808 nsec\nrounds: 164963"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1025134.3242037413,
            "unit": "iter/sec",
            "range": "stddev: 2.810593176600859e-7",
            "extra": "mean: 975.481921139199 nsec\nrounds: 137288"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2243015.2939295033,
            "unit": "iter/sec",
            "range": "stddev: 4.187247383315649e-8",
            "extra": "mean: 445.82843581423634 nsec\nrounds: 186916"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 3152949.651843718,
            "unit": "iter/sec",
            "range": "stddev: 2.4668905640583367e-8",
            "extra": "mean: 317.1633265425727 nsec\nrounds: 153093"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@davidhewitt.dev",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "mail@davidhewitt.dev",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "distinct": true,
          "id": "88a148a302da23f987581339825247bf7db1bed4",
          "message": "add `PyStringMethods::encode_utf8`",
          "timestamp": "2024-02-05T13:28:00Z",
          "tree_id": "2925f0e697639ca59076dc18d4413014f1ef326f",
          "url": "https://github.com/davidhewitt/pyo3/commit/88a148a302da23f987581339825247bf7db1bed4"
        },
        "date": 1707140704561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2522000.8402763577,
            "unit": "iter/sec",
            "range": "stddev: 1.0820801862560716e-7",
            "extra": "mean: 396.5105736802297 nsec\nrounds: 191608"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 4642444.553718165,
            "unit": "iter/sec",
            "range": "stddev: 2.0135387487592748e-8",
            "extra": "mean: 215.40375731554903 nsec\nrounds: 198413"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 10566623.46749874,
            "unit": "iter/sec",
            "range": "stddev: 6.140390522271472e-9",
            "extra": "mean: 94.63761087691272 nsec\nrounds: 104080"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 6687966.915853699,
            "unit": "iter/sec",
            "range": "stddev: 1.3385103088080093e-8",
            "extra": "mean: 149.5222707560827 nsec\nrounds: 194553"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 3336077.3491378776,
            "unit": "iter/sec",
            "range": "stddev: 2.6823945812098167e-8",
            "extra": "mean: 299.75324171018514 nsec\nrounds: 116878"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 2110787.0408130772,
            "unit": "iter/sec",
            "range": "stddev: 6.380404187327019e-8",
            "extra": "mean: 473.7569355242958 nsec\nrounds: 104080"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2792526.757435105,
            "unit": "iter/sec",
            "range": "stddev: 2.9638957153525156e-8",
            "extra": "mean: 358.0986278242453 nsec\nrounds: 187970"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1286309.3944991948,
            "unit": "iter/sec",
            "range": "stddev: 1.6351512387085156e-7",
            "extra": "mean: 777.4179402532739 nsec\nrounds: 154991"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1811850.1732860848,
            "unit": "iter/sec",
            "range": "stddev: 4.419955420194427e-8",
            "extra": "mean: 551.9220158178628 nsec\nrounds: 179857"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1061040.7577033807,
            "unit": "iter/sec",
            "range": "stddev: 1.619822415305558e-7",
            "extra": "mean: 942.4708643280554 nsec\nrounds: 148083"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1755895.4810170305,
            "unit": "iter/sec",
            "range": "stddev: 4.412296103587671e-8",
            "extra": "mean: 569.5099798427588 nsec\nrounds: 167758"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1055128.489650593,
            "unit": "iter/sec",
            "range": "stddev: 1.7501078145048505e-7",
            "extra": "mean: 947.7518707993103 nsec\nrounds: 190151"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2245100.806008845,
            "unit": "iter/sec",
            "range": "stddev: 6.117061623879666e-8",
            "extra": "mean: 445.41429824601835 nsec\nrounds: 196890"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 3156570.58812075,
            "unit": "iter/sec",
            "range": "stddev: 2.1817793155309037e-8",
            "extra": "mean: 316.7995050588574 nsec\nrounds: 155473"
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
      },
      {
        "commit": {
          "author": {
            "email": "mail@davidhewitt.dev",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecb4ecbe22873cb29abde6d43c33aeea1937f9d7",
          "message": "Merge pull request #3789 from btel/patch-1\n\ndocs: add example for wrapping generic classes",
          "timestamp": "2024-02-05T12:03:20Z",
          "tree_id": "d5f31fa597e324b08e32b02c7e3d5b27c7c38232",
          "url": "https://github.com/davidhewitt/pyo3/commit/ecb4ecbe22873cb29abde6d43c33aeea1937f9d7"
        },
        "date": 1707140625168,
        "tool": "cargo",
        "benches": [
          {
            "name": "identify_object_type",
            "value": 480,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "collect_generic_iterator",
            "value": 11525150,
            "range": "± 62988",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_extract_fail",
            "value": 254,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_small",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_negative",
            "value": 185,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_positive",
            "value": 143,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_negative",
            "value": 1284,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_positive",
            "value": 1053,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "call_0",
            "value": 32790,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 103805,
            "range": "± 3344",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_dunder_methods",
            "value": 39,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_richcmp",
            "value": 39,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_via_extract",
            "value": 360,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 1617084,
            "range": "± 24730",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4179572,
            "range": "± 101584",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2369655,
            "range": "± 29992",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 4769783,
            "range": "± 151719",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 7604830,
            "range": "± 105132",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_restore_and_fetch",
            "value": 161,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_without_gil",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_success",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_fail",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_success",
            "value": 10,
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
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_fail",
            "value": 254,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_success",
            "value": 4,
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
            "value": 242,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_success",
            "value": 3,
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
            "value": 907,
            "range": "± 13",
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
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_downcast",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract_enum",
            "value": 496,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "f64_from_pyobject",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 64,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 64,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_direct",
            "value": 105,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_intern",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 755961,
            "range": "± 40016",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 689226,
            "range": "± 5990",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 594523,
            "range": "± 7378",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 457405,
            "range": "± 4344",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3224,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4340,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 3009952,
            "range": "± 90169",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1407360,
            "range": "± 470763",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 5897002,
            "range": "± 19140",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 2088092,
            "range": "± 15630",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 806392,
            "range": "± 44688",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 974072,
            "range": "± 194059",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 620829,
            "range": "± 4947",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 435546,
            "range": "± 2352",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_borrowed_item",
            "value": 575032,
            "range": "± 21456",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_borrowed_item_unchecked",
            "value": 434950,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 276208,
            "range": "± 42125",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 179326,
            "range": "± 39633",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_into_py",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@davidhewitt.dev",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "mail@davidhewitt.dev",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "distinct": true,
          "id": "88a148a302da23f987581339825247bf7db1bed4",
          "message": "add `PyStringMethods::encode_utf8`",
          "timestamp": "2024-02-05T13:28:00Z",
          "tree_id": "2925f0e697639ca59076dc18d4413014f1ef326f",
          "url": "https://github.com/davidhewitt/pyo3/commit/88a148a302da23f987581339825247bf7db1bed4"
        },
        "date": 1707140639295,
        "tool": "cargo",
        "benches": [
          {
            "name": "identify_object_type",
            "value": 481,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "collect_generic_iterator",
            "value": 11627886,
            "range": "± 114477",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_extract_fail",
            "value": 252,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_small",
            "value": 58,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_negative",
            "value": 186,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_positive",
            "value": 145,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_negative",
            "value": 1290,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_positive",
            "value": 1049,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "call_0",
            "value": 32740,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 104198,
            "range": "± 3998",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_dunder_methods",
            "value": 39,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_richcmp",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_via_extract",
            "value": 367,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 1595672,
            "range": "± 48551",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4220603,
            "range": "± 80246",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2398718,
            "range": "± 133865",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 5437878,
            "range": "± 934528",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 7986034,
            "range": "± 283690",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_restore_and_fetch",
            "value": 161,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_without_gil",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_success",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_fail",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_success",
            "value": 10,
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
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_fail",
            "value": 254,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_success",
            "value": 4,
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
            "value": 242,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_success",
            "value": 4,
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
            "value": 893,
            "range": "± 4",
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
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_downcast",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract_enum",
            "value": 494,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "f64_from_pyobject",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_direct",
            "value": 103,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_intern",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 724249,
            "range": "± 3983",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 930928,
            "range": "± 204272",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 590280,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 496967,
            "range": "± 20343",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3182,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3405,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 2772714,
            "range": "± 36886",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1406963,
            "range": "± 44766",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 5921736,
            "range": "± 26692",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 2141422,
            "range": "± 11350",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 715357,
            "range": "± 14097",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 961291,
            "range": "± 190432",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 636077,
            "range": "± 22066",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 451772,
            "range": "± 22433",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_borrowed_item",
            "value": 604136,
            "range": "± 23753",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_borrowed_item_unchecked",
            "value": 434698,
            "range": "± 976",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 274460,
            "range": "± 43848",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 169926,
            "range": "± 41619",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_into_py",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "10486322+Icxolu@users.noreply.github.com",
            "name": "Icxolu",
            "username": "Icxolu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d42c00d21dbff0fdf688ba49ed3ab3a41aad2bd7",
          "message": "feature gate deprecated APIs for `PySet` (#4096)",
          "timestamp": "2024-04-19T07:24:26Z",
          "tree_id": "8a0b52fc5af29f56636003b69a276df926c750d5",
          "url": "https://github.com/davidhewitt/pyo3/commit/d42c00d21dbff0fdf688ba49ed3ab3a41aad2bd7"
        },
        "date": 1713525396060,
        "tool": "cargo",
        "benches": [
          {
            "name": "identify_object_type",
            "value": 499,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "collect_generic_iterator",
            "value": 9991768,
            "range": "± 570584",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_extract_fail",
            "value": 250,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_small",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_negative",
            "value": 178,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_positive",
            "value": 146,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_negative",
            "value": 1294,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_positive",
            "value": 1074,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "call_0",
            "value": 30968,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 97922,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_dunder_methods",
            "value": 45,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_richcmp",
            "value": 49,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_via_extract",
            "value": 368,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 1147503,
            "range": "± 35343",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 3173915,
            "range": "± 29104",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2226537,
            "range": "± 20670",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 5114090,
            "range": "± 182889",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 7762394,
            "range": "± 48818",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_restore_and_fetch",
            "value": 152,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_without_gil",
            "value": 13,
            "range": "± 0",
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
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_success",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_fail",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_success",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_fail",
            "value": 256,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_success",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_fail",
            "value": 1,
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
            "value": 244,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_success",
            "value": 1,
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
            "value": 1002,
            "range": "± 7",
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
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_downcast",
            "value": 1,
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
            "value": 550,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 65,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_direct",
            "value": 99,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_intern",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 730207,
            "range": "± 82877",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 992991,
            "range": "± 204150",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 560660,
            "range": "± 1287",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 451475,
            "range": "± 22956",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3176,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 2170,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 2968370,
            "range": "± 36750",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1289962,
            "range": "± 7086",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 5600955,
            "range": "± 29726",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 1997302,
            "range": "± 18858",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 590741,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 985961,
            "range": "± 189155",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 591871,
            "range": "± 4345",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 405055,
            "range": "± 15713",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_borrowed_item",
            "value": 559518,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_borrowed_item_unchecked",
            "value": 388962,
            "range": "± 10036",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 269759,
            "range": "± 46177",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 187009,
            "range": "± 42527",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_into_py",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}