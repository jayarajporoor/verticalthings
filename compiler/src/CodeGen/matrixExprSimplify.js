function transform(ast,ctx){
	for(var i in ast.modules){
		ctx.symtbl.enterNestedScope(i);
		fdefs(ast.modules[i].fdefs,ctx);
		ctx.symtbl.exitNestedScope();
	}
};

function fdefs(ast,ctx){
	for(var i = 0; i < ast.length ; i++){
		ctx.symtbl.enterNestedScope(ast[i].id);
		stmts(ast[i].body.stmts,ctx);
		ctx.symtbl.exitNestedScope();
	}
}

function block(obj,ctx){
	if(typeof obj.stmts != 'undefined'){
		for(var i in obj.stmts){
			stmts(obj.stmts[i]);
		}
	}
}

function stmts(obj, ctx){
	if(typeof obj.kind != 'undefined'){
		switch(obj.kind){
			case "assign":
				expr(obj.expr, ctx, true);
				break;
			case "block":
				block(obj,str);
				break;
		}
	}
}

function expr(obj, ctx, isRoot){
	if(typeof obj.op != 'undefined'){
		if(typeof obj.lexpr.op != 'undeifned' || typeof obj.rexpr.op !='undefined'){

		}
	}
}

var temp_ind=0;
exports.transform=transform;