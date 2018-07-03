function codepp(ast,ctx){
	var code = ctx.code;
	if(!code) return;

	var indent = "    ";
	var current_indent ="";
	var current_indent_depth = 0;
	for(var i=0;i<code.length;i++){
		var line = code[i];
		code[i] = current_indent + line;
		if(line === "{"){
			current_indent_depth++;
			current_indent += indent;
		}else
		if(line === "}"){
			current_indent.slice(0, -indent.length);
		}
	}
}

exports.transform=codepp;