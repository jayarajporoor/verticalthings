"use strict";
class Node {
    constructor(){
        this.power = "";
        this.overhead = 0;
        this.isbranch = false;
        this.inedge = [];
        this.outedge = [];
        this.nodeno = -1;
        this.instructions = [];
        this.linestart = -1;
        this.lineend = -1;
        this.time = 0;
    }
    get_classname(){
        return "Node";
    }
    add_instruction(i){
        this.instructions.push(i)
    }
    addedge(edge){
        this.outedge.push(edge)
    }
    display(){
        console.log("block number " + this.nodeno + " (starts at " + this.linestart + " ends at " + this.lineend + " time taken is " + this.time + " )");
        console.log("Instructions are ");
        this.instructions.forEach(function(i){
            i.display();
        });
    }
    split(to){
        // console.log(to);
        // console.log(this.instructions[0].lineno);
        if (this.instructions[0].lineno == to){
            return false;
        }
        var flag = true;
        var node = new Node();
        var count = 0;
        var temp = [];
        var refer = this;
        temp = refer.instructions.slice();  
        temp.forEach(function(i){
            if (flag){
                if (i.lineno == to){
                    flag = false;
                    refer.instructions = temp.slice(0,count);
                    node.add_instruction(i);
                    node.linestart = i.lineno;
                    node.lineend = i.lineno;
                    linetonode[i.lineno] = node;
                    return;
                }
                refer.lineend = i.lineno;
                count = count + 1;
            }
            else{
                node.lineend = i.lineno;
                node.add_instruction(i);
                linetonode[i.lineno] = node;
            }
        });
        // console.log(node.linestart + " " + node.lineend);
        // console.log(refer.linestart + " " + refer.lineend);
        path.splice(path.indexOf(this)+1,0,node);
        return true;
    }
}
class Instruction{
    constructor(){
        this.time = 0;
        this.command = "";
        this.to = -1;
        this.lineno = 0;
    }
    get_classname(){
        return "Instruction";
    }
    display(){
        console.log("| --> " + this.command + " " + this.time + " " + this.lineno);
    }
}
var visited;
var linetonode = {};
var path = [];
var node = new Node();
var startnode = new Node();
var readlines = [];
var adjlist;
var unknowncommands = {};
var count;
var jumplines = [];
var jumpstatements = ["BLT","BEQ","BNE","BCS","BPL","BCC","BHI","BMI","BGT","BGE","BLE","BL","BLX","BX"];
function count(words,c){
    var count = 0;
    words.forEach(function(el){
        if (el == c){
            count = count + 1;
        }
    });
    return count;
}
function isjump(word){
    word = word.toUpperCase();
    if (word == "B"){
        return true;
    }
    var iter = 0;
    while (iter < jumpstatements.length){
        if (word.includes(jumpstatements[iter])){
            return true;
        }
        iter = iter + 1;
    }
    return false;
}   
function variabletime(word,words){
    var time = 0;
    if (word.toUpperCase() == "PUSH"){
        time = 1 + count(words,',');
    }    
    if (word.toUpperCase() == "POP"){
        if (word.toUpperCase().search("PC") != -1){
            time = 3 + count(words,',');
        }
        else{
            time = 1 + count(words,',');
        }
    }
    if (word.toUpperCase() == "ADD"){
        if (word.toUpperCase().search("PC") != -1){
            time = 2;
        }
        else{
            time = 1;
        }
    }
    return time;
}
//main code starts from here
var filename = "code.c";
makeblocks();
function makeblocks(){
    var power;
    var fs = require('fs');
    var asm = JSON.parse(fs.readFileSync("data.json",'utf8'));
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('code.asm')
    });
    lineReader.on('line', function (line) {
        if (!line || line.trim() == "..."){
            return;
        }
        if (line.indexOf(filename) != -1){
            var iter = line.length - 1;
            var filelineno = "";
            while (line[iter] != ":"){
                filelineno = line[iter] + filelineno;
                iter--;
            }
            console.log(filelineno);
            filelineno = filelineno.trim();
            if (filelineno in asm['lines']){
                power = asm['lines'][filelineno];
            }
            return;
        }
       // console.log(line);
        var separators = [' ','\t'];
        var words = line.split(new RegExp(separators.join('|'), 'g'));
        //console.log(words);
        //console.log(words);
        var lineno;
        var iter = 0;
        while (iter < words.length){
            if (words[iter] != "" && words[iter] != " "){
                if (words[iter][words[iter].length-1] == ":"){
                    lineno = words[iter].slice(0,-1);
                }
                else{
                    lineno = words[iter];
                }
                break;                
            }
            iter = iter + 1;
        }
        //console.log(lineno);
        var time = 0;
        var command = "";
        var flag = false;
        words.forEach(function(word){
            if (word.includes('.') && word != "" && word != " "){
                //console.log("Before splitting " + word);
                var templist = word.split('.');
                words[words.indexOf(word)] = templist[0];
                word = templist[0]
                //console.log("After splitting " + word);
            }
            if (word.toUpperCase() in asm['fixed']){
                flag = true;
                //console.log(word);
                command = word;
                time = asm['fixed'][word.toUpperCase()];
            }
            if (asm['variable'].indexOf(word.toUpperCase()) != -1){
                flag = true;
                //console.log("variable found at " + word);
                command = word;
                time = variabletime(word,words);
            }
        });
        if (flag){
            // words.forEach(function(word){
            //     if (/^[a-zA-Z]+$/.test(word)){
            //         unknowncommands[word] = 1;
            //     }
            // });
            //console.log(line);
            //console.log("command not found at " + lineno);
            var i = new Instruction();
            i.lineno = lineno;
            i.time = time;
            i.command = command;
            //i.display();
            //console.log(command);
            if (isjump(command)){
                //console.log(words);
                //console.log("going to " + words.indexOf(i.command) + 1);
                i.to = words[words.indexOf(i.command) + 1];
                if (node.instructions.length != 0){
                    path.push(node);
                }
                node = new Node();
                node.add_instruction(i);
                node.isbranch = true;
                node.power = power;
                node.overhead = power;
                node.linestart = i.lineno;
                node.lineend = i.lineno;
                linetonode[i.lineno] = node;
                if (typeof power === "undefined"){
                    console.log("Sandesh Ghanta");
                    console.log(node);
                    console.log(i);
                }
                path.push(node);
                node = new Node();
            }
            else{
                //console.log("good");
                if (node.linestart == -1){
                    node.linestart = lineno;
                }
                node.lineend = lineno;
                linetonode[lineno] = node;
            //  console.log(lineno);
                node.add_instruction(i);
            }
        }
    });
    lineReader.on('close',function(){
        if (node.instructions.length != 0){
            path.push(node);
        }
       // console.log(Object.keys(linetonode));
       // console.log("size is " + path.length);
        console.log(Object.keys(unknowncommands));
        lineReader.close();
        console.log("makeblocks done");
        splitblocks();
    });
}
function splitblocks(){
   // console.log("splitblocks");
    var i = 0;
    var flag;
    while (i < path.length){
        var obj = path[i];
        if (obj.isbranch){
            if (obj.instructions[0].to in linetonode){
                flag = linetonode[obj.instructions[0].to].split(obj.instructions[0].to);
                if (readlines.indexOf(obj.instructions[0].to) != -1 && flag){
                    i = i + 1;
                }
            }
            else{
                console.log("not found " + obj.instructions[0].to);
                console.log(obj);
            }
        }
        else{
            obj.instructions.forEach(function(inst){
                readlines.push(inst.lineno);
            });
        }
        i = i + 1;
    }
    labelblocks();
}
function labelblocks(){
   // console.log("labelblocks");
    count = 1;
    path.forEach(function(obj){
        //if (obj.get_classname() == "Node"){
            obj.nodeno = count;
            count = count + 1;
            var time = 0;
            obj.instructions.forEach(function(i){
                time = time + i.time;
            });
            obj.time = time;
        //}
    });
    adjlist = new Array(count+1);
   // console.log("size is " + path.length);
    linkblocks();
}
function linkblocks(){
    var oldnode = startnode;
    path.forEach(function(obj){
        if (typeof obj === "undefined"){
            console.log("sandesh");
        }
        oldnode.addedge(obj);
        if (obj.isbranch){
            if (typeof linetonode[obj.instructions[0].to] === "undefined"){
                console.log("ghanta");
                console.log(obj);
            }
            obj.addedge(linetonode[obj.instructions[0].to]);
        }
        oldnode = obj;
    });
    calculatelooptime();
}

function calculatelooptime(){
    displaygraph();
    path.forEach(function(obj){
        if (obj.isbranch && obj.power != ""){
            //console.log("hello");
            visited = new Array(count+1);
            var iter = 0;
            while (iter != count + 1){
                visited[iter] = false;
                iter++;
            }
            obj.time = obj.time * obj.power;
            visited[obj.nodeno] = true;
            if (typeof obj.power === "undefined"){
                console.log(obj);
            }
            console.log("power is " + obj.power + " type is " + typeof power);
            addpower(linetonode[obj.instructions[0].to],obj.power);
        }
    });
    displaygraph();
}
function addpower(obj,power){
    console.log(obj.time);
    console.log(typeof power);
    if (obj.isbranch){
        obj.overhead = obj.overhead * power;
    }
    visited[obj.nodeno] = true;
    obj.time = obj.time * power;
    obj.outedge.forEach(function(nextnode){
        if (!visited[nextnode.nodeno] && !(typeof nextnode === "undefined")){
            addpower(nextnode,power);
        }
    });
}
function displaygraph(){
    console.log("Basic Blocks are ");
    console.log("-------------------");
    var cyclecount = 0;
    path.forEach(function(obj){
        //console.log(obj);
        //if (obj.get_classname() == "Node"){
           // obj.display();
            //console.log();
        //}
        cyclecount += obj.time + obj.overhead;
    });
    path.forEach(function(obj){
        if (obj.get_classname() == "Node"){
            adjlist[obj.nodeno] = [];
            obj.outedge.forEach(function(i){
                try{
                    //console.log(i.get_classname());
                    adjlist[obj.nodeno].push(i.nodeno);
                }
                catch(e){
                    console.log(obj);
                    console.log(e);
                    console.log(i);
                }
               // console.log(i);
            });
        }
    });
    console.log(cyclecount);
    console.log(adjlist);
}