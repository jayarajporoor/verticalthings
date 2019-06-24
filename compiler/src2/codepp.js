function codepp(ast,ctx){
	var code = ctx.code;
	if(!code) return;

	var indent = "    ";
	var current_indent ="";
	var current_indent_depth = 0;
	for(var i=0;i<code.length;i++){
		var line = code[i];

		if(line === "{" || line.endsWith("{")){
			code[i] = current_indent + line;			
			current_indent_depth++;
			current_indent += indent;
		}else
		if(line === "}" || line.endsWith("}")){
			current_indent = current_indent.slice(0, -indent.length);
			current_indent_depth--;
			code[i] = current_indent + line;			
		}else{
			code[i] = current_indent + line;			
		}
	}
}

exports.transform=codepp;