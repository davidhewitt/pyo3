include ../common.mk

ifneq ($(PYMAJORMINOR),3.15)
$(error PYMAJORMINOR must be 3.15, got '$(PYMAJORMINOR)')
endif

PLATFORM=wasm32_emscripten
SYSCONFIGDATA_NAME=_sysconfigdata__$(PLATFORM)

export EMSDKDIR = $(PYTHONBUILD)/emsdk-cache

PYTHONLIBDIR=$(BUILDROOT)/install/Python-$(PYVERSION)/lib
CROSS_PYTHON=$(PYTHONBUILD)/cross-build/wasm32-emscripten/build/python/python.sh

all: $(PYTHONLIBDIR)/libpython$(PYMAJORMINOR).a

$(CROSS_PYTHON): $(PYTHONBUILD)/.exists
	cd $(PYTHONBUILD) && \
	$(PYTHON) Platforms/emscripten install-emscripten --emsdk-cache=$(EMSDKDIR) && \
	EMSDK_ENV=$$(find $(EMSDKDIR) -name 'emsdk_env.sh' | head -n 1) && \
	. "$$EMSDK_ENV" && \
	$(PYTHON) Platforms/emscripten build --emsdk-cache=$(EMSDKDIR) --host-runner="$$EMSDK_NODE"

$(PYTHONLIBDIR)/libpython$(PYMAJORMINOR).a: $(CROSS_PYTHON)
	# Generate sysconfigdata
	_PYTHON_SYSCONFIGDATA_NAME=$(SYSCONFIGDATA_NAME) _PYTHON_PROJECT_BASE=$(PYTHONBUILD)/cross-build/wasm32-emscripten/build/python $(CROSS_PYTHON) -m sysconfig --generate-posix-vars
	cp `cat pybuilddir.txt`/$(SYSCONFIGDATA_NAME).py $(PYTHONBUILD)/Lib

	mkdir -p $(PYTHONLIBDIR)
	# Make a static library for _hacl, for some reason these are missing from the build?
	# source emsdk_env.sh to get emar in PATH, works best when done from the emsdk directory
	EMSDK_ENV=$$(find $(PYTHONBUILD)/emsdk-cache -name 'emsdk_env.sh' | head -n 1) && \
	    cd $$(dirname $$EMSDK_ENV) && \
		. $$EMSDK_ENV && \
	    cd $(PYTHONBUILD)/cross-build/wasm32-emscripten/build/python && \
		emar rcs Modules/_hacl/libhacl.a Modules/_hacl/*.o
	# Copy all .a libraries
	find $(PYTHONBUILD)/cross-build/wasm32-emscripten/ -name '*.a' -exec cp {} $(PYTHONLIBDIR) \;
	# Install Python stdlib
	cp -r $(PYTHONBUILD)/Lib $(PYTHONLIBDIR)/python$(PYMAJORMINOR)
