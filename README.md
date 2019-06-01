# verticalthings
VerticalThings  Platform

The initial codebase was developed during the MSR Summer Research Workshop 2018.

This code is released under MIT license.

Author: Jayaraj Poroor


# Installation/usage

## Prerequisites

A recent version of node.js.

For building the generated C, a GCC cross-compiler for the target platform or the arduino software. The build has been tested using the arm-gcc - both separately and the one that comes bundled with arduino.


## Usage

The following command line (from the base folder under which verticalthings has been checked out) invokes the VT compiler and compiles the VT port of the MSR's ICane application. 

```
nodejs verticalthings/compiler/src/vtcompiler.js verticalthings/apps/icane-port/icane.vt -config verticalthings/apps/icane-port/config.json -code icane.ino
```

The output is a single C/C++ file containing the generated code. The code is arduino-compatible C/C++ containing setup() and loop() functions (hence the .ino extension is used). These functions can be invoked from the main function in a non-arduino environment thus:

```
main(){
    setup()
    while(1){
        loop()
    }
}
```

The config.json contains list of header files that must be added as #include(s) in the generated code.

The output code can be compiled using any C/C++ cross-compiler such as arm gcc. Since the generated code is arduino-compatible the Arduino IDE or its commandline tool can be used to build and load the code onto a device.

## Notes

The file compiler/src/vtparams contains the list of modules that are included in the compilation passes.

# ICane port

The ICane port to the DSL is at: apps/icane-port.

The pipeline specification file is icane.vt which lists the pipeline modules and their execution order. Corresponding to each module the corresponding .vt file contains the module code in the DSL, e.g., protonn.vt contains the ProtoNN port to the DSL.