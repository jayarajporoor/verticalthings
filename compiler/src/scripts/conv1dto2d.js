var fs = require('fs');


var srcpath = process.argv[2];
var outpath = process.argv[3];
var cols = parseInt(process.argv[3]);

var text = fs.readFileSync(srcpath, 'utf8');

var lines = text.split('\n');

var tlines = [];

for(var i=0;i<lines.length;i++){
	var line = lines[i].trim();
	if(line !== ""){
		tlines.push(line);
	}
}

var ttext = tlines.join("");

var fields = ttext.split(',');

var r = 0;
var c = 0;
var out = "{\n";
for(i =0;i<fields.length;i++){
	if(c ===0){
		if(i > 0) out += ", ";
		out += "{ " + fields[i];
	}else{
		out += ", " + fields[i];
	}
	c++;
	if(c >= cols){
		c = 0;
		r++;
		out += "}\n";
	}
}

if(c !== 0){
	console.log("Matrix ill-formed. The last row has only ", c, "columns.");
}else{
	console.log("Conversion successful. ", r, " rows.");
}
fs.writeFileSync(outpath, out);
