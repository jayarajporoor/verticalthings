"use strict";
class source{
    constructor(){
        this.code = "";
        this.lines = {};
    }
}
var fs = require('fs');
var gen = require('/home/arduino/Desktop/verticalthings/compiler/src/CodeGen/Codegen.js');
var analyse = require('./WCET.js');
var data = JSON.parse(fs.readFileSync("test.json",'utf8'));
var modules = Object.keys(data['modules']);
function checkstat(declarations){
    var flag = true;
    declarations.forEach(function(variable){
        if (!variable.startsWith("__")){
            flag = false;
        }
    });
    return flag;
}
modules.forEach(function(modname){
    var mod = data['modules'][modname];
    var modvars = mod['vars'];
    //console.log(mod['fdefs']);
    mod['fdefs'].forEach(function(func){
        //console.log(func);
        var funcparams = func['params'];
        var funcvars = func['vars'];
        func['body']['stmts'].forEach(function(stat){
            if ((stat['kind'] == "for" || stat['kind'] == "while") && checkstat(stat['ids'])){  
                console.log("enter the dragon");
                var code = [];
                modvars.forEach(function(variable){
                    code.push(gen.var(variable) + ';');
                });
                funcvars.forEach(function(variable){
                    code.push(gen.var(variable) + ';');
                });
                funcparams.forEach(function(variable){
                    code.push(gen.params(variable) + ';');
                });
                code.push("int main(){");
                gen.stmt(stat,code);
                code.push("return 0;");
                code.push("}");
                var str = code.join('\n');
                var tmp = require('tmp');
                var tmpobj = tmp.fileSync({ mode: parseInt('0644', 8), prefix: 'code', postfix: '.c' });
                fs.writeFileSync(tmpobj.name,str);
                var execSync = require('child_process').execSync;
                //tmpobj.name = "/tmp/code22896bBDgK0z6VPAF.c";
                var command = "/home/arduino/.arduino15/packages/arduino/tools/arm-none-eabi-gcc/4.8.3-2014q1/bin/arm-none-eabi-g++ -mcpu=cortex-m0plus -mthumb -c -g -Os -w -std=gnu++11 -ffunction-sections -fdata-sections -fno-threadsafe-statics -nostdlib --param max-inline-insns-single=500 -fno-rtti -fno-exceptions -MMD -DF_CPU=48000000L -DARDUINO=10805 -DARDUINO_SAMD_MKR1000 -DARDUINO_ARCH_SAMD  -D__SAMD21G18A__ -DUSB_VID=0x2341 -DUSB_PID=0x804e -DUSBCON" + '-DUSB_MANUFACTURER="Arduino LLC"' + '-DUSB_PRODUCT="Arduino MKR1000"' + "-I/home/arduino/.arduino15/packages/arduino/tools/CMSIS/4.5.0/CMSIS/Include/ -I/home/arduino/.arduino15/packages/arduino/tools/CMSIS-Atmel/1.1.0/CMSIS/Device/ATMEL/ -I/home/arduino/.arduino15/packages/arduino/hardware/samd/1.6.18/cores/arduino -I/home/arduino/.arduino15/packages/arduino/hardware/samd/1.6.18/variants/mkr1000 " + tmpobj.name + " -o " + tmpobj.name + ".o";
                console.log(command);
                execSync(command);
                command = "arm-linux-gnueabi-objdump -d -l " + tmpobj.name +".o > " + tmpobj.name +".asm";
                //console.log(tmpobj.name);
                execSync(command);
                var lines = {};
                var count = 1;
                console.log(code);
                code.forEach(function(line){
                    if (line.includes("for") || line.includes("while")){
                        lines[count] = 40;
                    }
                    count = count + 1;
                });
                var s = new source();
                //s.lines = {4:40,6:40};
                s.lines = lines;
                console.log(tmpobj.name);
                console.log(s.lines);
                s.code = new String(fs.readFileSync(tmpobj.name+".asm").toString());
                console.log(fs.readFileSync(tmpobj.name+".asm").toString());
                //console.log(s.code);
                var cycles = analyse.analyseWCET(tmpobj.name,s,"cortexm0+",false);
                console.log(cycles);
            }
        });
    });
});