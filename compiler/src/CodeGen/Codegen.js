function fcall(obj){
	var s="";
	if(obj.qid.join("_") != "next"){
		s=s+obj.qid.join("_")+"(";
		for(var i in obj.params)
			s=s+expr(obj.params[i].expr)+", ";
		if(obj.params.length>0)
			return (s.substring(0,s.length-2)+")");
		else return s+")";
	}
	else
	{
		var ind=states.indexOf(cur_mod);
		ind++;
		if(ind<states.length){
			// cur_state=states[ind];
			return "__state = __"+states[ind];
		}
		else{
			// cur_state=states[0];
			return "__state = __"+states[0];
		}
	}
}

function expr(obj){
	// console.log(obj);
	var str="";
	if(typeof obj.op != 'undefined'){
		// console.log(obj);
		str = "("+expr(obj.lexpr) + obj.op + expr(obj.rexpr)+")";
	}
	else if(typeof obj.qid != 'undefined'){
		str = str + obj.qid.join(".");
        if(typeof obj.dim != 'undefined'){
            for(var i in obj.dim.dim){
                str=str + "[" + expr(obj.dim.dim[i]) + "]";
            }
        }
	}
	else if(typeof obj.iconst != 'undefined'){
		str = obj.iconst;
	}
	else if(typeof obj.id != 'undefined'){
		str = obj.id;
        if(typeof obj.dim != 'undefined'){
            for(var i in obj.dim.dim){
                str=str + "[" + expr(obj.dim.dim[i]) + "]";
            }
        }
	}
	else if(typeof obj.fcall != 'undefined'){
		str = fcall(obj.fcall);
	}
	return str;
}

function block(obj,str){
	str.push("{");
	if(typeof obj.stmts != 'undefined'){
		for(var i in obj.stmts){
			stmts(obj.stmts[i],str);
		}
	}
	str.push("}");
}

function stmts(obj,str){
	if(typeof obj.kind != 'undefined'){
		switch(obj.kind){
			case "assign":
				str.push(expr(obj) + "=" + expr(obj.expr) + ";");
				break;
			case "if":
				// console.log(obj);
				str.push("if(" + expr(obj.expr) + ")");
				stmts(obj.if_body,str);
				if(typeof obj.else_body !='undefined'){
					str.push("else");
					stmts(obj.else_body,str)
				}
				break;
			case "for":
				str.push("for(int " + obj.ids[0] + "=" + expr(obj.range.from) + "; " + obj.ids[0] + "<" + expr(obj.range.to) + "; " + obj.ids[0] + "++)");
				stmts(obj.body,str);
				break;
			case "while":
				str.push("while(" + expr(obj.expr) + ")");
				stmts(obj.body,str);
				break;
			case "return":
				str.push("return " + expr(obj.expr));
				break;
			case "block":
				block(obj,str);
				break;
		}
	}
	else if(typeof obj.fcall != 'undefined'){
		str.push(fcall(obj.fcall)+";");
	}
}

function type_resolve(obj){
	var primitive=obj.primitive;
	var dim="";
	if(typeof obj.dim != 'undefined')
		for(var i in obj.dim.dim){
			dim=dim+"["+expr(obj.dim.dim[i])+"]";
		}
	return {primitive: primitive, dim: dim};
}

function vars(obj){
	var s="";
	// console.log(obj.type.is_const);
	if(typeof obj.type.is_const != 'undefined'){
		if(obj.type.is_const === true)
			s=s+"const ";
	}
	var type = type_resolve(obj.type);
	s=s+type.primitive+" ";
	// console.log(s);
	var temp=[];
	for(var i in obj.defs){
		if(typeof obj.defs[i].init != 'undefined')
			temp.push(obj.defs[i].id+type.dim+"="+expr(obj.defs[i].init));
		else
			temp.push(obj.defs[i].id+type.dim);
	}
	s=s+temp.join(", ");
	return s;
}

function params(obj){
	var s="";
	if(typeof obj.type.is_const != 'undefined'){
		if(obj.type.is_const === true)
			s=s+"const ";
	}
	var type=type_resolve(obj.type);
	if(typeof obj.init != 'undefined')
		s=s+type.primitive+" "+obj.id+"="+expr(obj.init);	
	else
		s=s+type.primitive+" "+obj.id;	
	return s;
}

function fdefs(obj,str){
	// console.log(code);
	var s="";
	if(typeof obj.type != 'undefined'){
		s=s+obj.type.primitive+" ";
	}
	else
		s=s+"void ";
	s=s+"__"+cur_mod+obj.id+"(";
	var temp=[];
	for(var i in obj.params){
		temp.push(params(obj.params[i]));
	}
	s=s+temp.join(", ");
	s=s+")";
	str.push(s);

	str.push("{");
	// str.push("__state = __" + states[0] + ";");
	// cur_ind=0;

	for(var i in obj.vars){
		str.push(vars(obj.vars[i])+";");
	}
	stmts(obj.body,str);
    str.push("}");
}

function getDefaultFlow(obj){
	var s="";
	for(var i in obj){
		if(obj[i].flow === "default"){
			return obj[i].id;
		}
	}
}


function codeGen(obj,ctx){
	// console.log("asdasd");
	if(!ctx.code){
		ctx.code = [];
	}
	var code = ctx.code;
   
    for(var i=0; i<obj.pipeline.block.length;i++){
        // console.log(i,obj.pipeline.block[i]);
        states.push(obj.pipeline.block[i].qname.join('_'));
    }
    code.push("enum __" + obj.pipeline.name + "{__" + states.join(", __") + "} __state = __" + states[0] + ";");
    for(var j in states){
        cur_mod=states[j];
        for(var i in obj.modules[cur_mod].fdefs){
            fdefs(obj.modules[cur_mod].fdefs[i],code);
        }
    }
    cur_state=states[0];
    code.push("void loop()");
    code.push("{");
    code.push("switch(__state)");
    code.push("{");
    for(var i in states){
        code.push("case __" + states[i] + ":");
        code.push("__state = __"+states[0]+";");
        if(obj.pipeline.block[i].qname.length > 1)
            code.push("__" + states[i] + "();");
        else{
            code.push("__" + states[i] + getDefaultFlow(obj.modules[states[i]].fdefs) + "();");
        }
        code.push("break;");
    }
    code.push("default :");
    code.push("__state = __" + states[0] + ";");
    code.push("}");
    code.push("}");

    code.push("void setup()");
    code.push("{");
    // Calling all inits
    for(var i in states){
        // console.log(obj.modules[states[i]].fdefs.indexOf("init"));
        for(var j in obj.modules[states[i]].fdefs){
            if(obj.modules[states[i]].fdefs[j].id === "init")
                code.push("__"+states[i]+"init();");
        }
    }    
    code.push("}");
    // console.log("CODE :");
    // console.log(code);
    // return code;
};

var cur_mod="";
var states=[];
// codeGen(obj,code);
exports.transform=codeGen;
exports.stmt=stmts;
exports.fdef=fdefs;
exports.fparam=params;
exports.var=vars;