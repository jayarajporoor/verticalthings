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
		// console.log(ast[i].body.stmts);
		stmts(ast[i].body.stmts,ctx);
		ctx.symtbl.exitNestedScope();
	}
}

function block(ast,ctx){
	if(typeof ast.stmts != 'undefined'){
		for(var i in ast.stmts){
			stmts(ast.stmts[i],ctx);
		}
	}
}

function stmts(ast, ctx){
	for(var i=0;i<ast.length;i++){
		if(typeof ast[i].kind != 'undefined'){
			switch(ast[i].kind){
				case "assign":
					var Separate=expr(ast[i].expr, ctx, true);
					// console.log(Separate);
					break;
				case "block":
					block(ast[i],ctx);
					break;
			}
		}
	}
}

function expr(ast, ctx, isRoot){
	if(typeof ast.op != 'undefined'){
		if((expr(ast.lexpr,ctx,false) || expr(ast.rexpr,ctx,false)))
			return true;
	}
	else if(typeof ast.id != 'undefined'){
		var dim=0;
		if(typeof ast.dim != 'undefined'){
			dim=ast.dim.dim.length;
			console.log((ctx.symtbl.lookup(ast.id).info.type.dim.dim.length > dim));
		}
		if((ctx.symtbl.lookup(ast.id).info.type.dim.dim.length > dim) && !isRoot)
			return true;
	}
	return false;
}

var temp_ind=0;
exports.transform=transform;