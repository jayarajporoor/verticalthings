"use strict";
class source{
    constructor(){
        this.code = "";
        this.lines = {};
    }
}
function checkstat(declarations){
    var flag = true;
    declarations.forEach(function(variable){
        if (!variable.startsWith("__")){
            flag = false;
        }
    });
    return flag;
}
function get_loop(loopcount,data){
    var temp;
    if (loopcount == 0){
        return data['range']['to']['iconst'] - data['range']['from']['iconst'];    
    }
    data['body']['stmts'].every(function(stat){
        if (stat['kind'] == "for"){
            temp = get_loop(loopcount-1,stat);
            return false;
        }
        return true;
    });
    return temp;
}
function WCETfor(stat,power){
    var analyse = require('./WCET.js');
    var gen = require('/home/arduino/Desktop/verticalthings/compiler/src/CodeGen/Codegen.js');
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
    var command = "/home/arduino/.arduino15/packages/arduino/tools/arm-none-eabi-gcc/4.8.3-2014q1/bin/arm-none-eabi-g++ -mcpu=cortex-m0plus -mthumb -c -g -Os -w -std=gnu++11 -ffunction-sections -fdata-sections -fno-threadsafe-statics -nostdlib --param max-inline-insns-single=500 -fno-rtti -fno-exceptions -MMD -DF_CPU=48000000L -DARDUINO=10805 -DARDUINO_SAMD_MKR1000 -DARDUINO_ARCH_SAMD  -D__SAMD21G18A__ -DUSB_VID=0x2341 -DUSB_PID=0x804e -DUSBCON" + '-DUSB_MANUFACTURER="Arduino LLC"' + '-DUSB_PRODUCT="Arduino MKR1000"' + "-I/home/arduino/.arduino15/packages/arduino/tools/CMSIS/4.5.0/CMSIS/Include/ -I/home/arduino/.arduino15/packages/arduino/tools/CMSIS-Atmel/1.1.0/CMSIS/Device/ATMEL/ -I/home/arduino/.arduino15/packages/arduino/hardware/samd/1.6.18/cores/arduino -I/home/arduino/.arduino15/packages/arduino/hardware/samd/1.6.18/variants/mkr1000 " + tmpobj.name + " -o " + tmpobj.name + ".o";
    execSync(command);
    command = "arm-linux-gnueabi-objdump -d -l " + tmpobj.name +".o > " + tmpobj.name +".asm";
    execSync(command);
    var lines = {};
    var linecount = 1;
    var loopcount = 0;
    code.forEach(function(line){
        if (line.includes("for")){
                lines[linecount] = get_loop(loopcount,stat);
            loopcount = loopcount + 1;
        }
        linecount = linecount + 1;
    });
    var s = new source();
    s.lines = lines;
    s.code = new String(fs.readFileSync(tmpobj.name+".asm").toString());
    var cycles = analyse.analyseWCET(tmpobj.name,s,"cortexm0+",false);
    return cycles;
}
function WCETstat(stat,power){
    var result = 0;
    if (stat['kind'] == "for" && checkstat(stat['ids'])){
        result += WCETfor(stat,power);
    }
    else if (stat['kind'] == "for"){
        power = power * (stat['range']['to']['iconst'] - stat['range']['from']['iconst']);
        stat['body']['stmts'].forEach(function(statement){
            result += WCETstat(statement,power);
            console.log(result);
        });
    }
    else if (stat['kind'] == "if"){
        result += WCETif(stat,power);
    }
    return result;
}
function WCETif(data,power){
    var ifcycle = 0;
    var elsecycle = 0;
    data['if_body']['stmts'].forEach(function(stat){
        ifcycle += WCETstat(stat,power);                
    });
    if (Object.keys(data).indexOf("else_body") != -1){
        data['else_body']['stmts'].forEach(function(stat){
            elsecycle += WCETstat(stat,power);                
        });
    }
    console.log("if " + power*ifcycle + " else " + power*elsecycle);
    return Math.max(power*ifcycle,power*elsecycle);
}
var mod;
var modvars;
var funcvars;
var funcparams;
var fs = require('fs');
var ctx = {};
analys("test.json",ctx);
function analys(filename,ctx){
    var data = JSON.parse(fs.readFileSync(filename,'utf8'));
    var modules = Object.keys(data['modules']);
    modules.forEach(function(modname){
        var cyclecount = 0;
        mod = data['modules'][modname];
        modvars = mod['vars'];
        //console.log(mod['fdefs']);
        mod['fdefs'].forEach(function(func){
            //console.log(func);
            funcparams = func['params'];
            funcvars = func['vars'];
            func['body']['stmts'].forEach(function(stat){
                cyclecount += WCETstat(stat,1);
            });
        });
        ctx[modname] = cyclecount;
    });
    console.log(ctx);
}
