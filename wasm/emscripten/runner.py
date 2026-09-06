#!/usr/local/bin/python
import os
import pathlib
import subprocess
import sys

p = pathlib.Path(sys.argv[1])

command = [os.environ["EMSDK_NODE"], p.name, *sys.argv[2:]]
print("Running:", " ".join(command))

sys.exit(subprocess.call(command, cwd=p.parent))
