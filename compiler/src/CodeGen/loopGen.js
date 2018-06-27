function loopGen(ast, ctx){
	for(var i in ast.modules){
		ctx.symtbl.enterNestedScope(i);
		fdefs(ast.modules[i].fdefs,ctx);
		ctx.symtbl.exitNestedScope();
	}
}

function fdefs(ast,ctx){
	for(var i = 0; i < ast.length ; i++){
		
		ctx.symtbl.enterNestedScope(ast[i].id);
		stmts(ast[i].body.stmts,ctx);
		ctx.symtbl.exitNestedScope();
	}
}

function block(ast,ctx){
	if(typeof ast.stmts != 'undefined'){
			stmts(ast.stmts,ctx);
	}
}

function stmts(ast, ctx){
	for(var i=0;i<ast.length;i++){
		if(typeof ast[i].kind != 'undefined'){
			switch(ast[i].kind){
				case "assign":
					assign(ast[i],ctx);
					break;
				case "block":
					block(ast[i],ctx);
					break;
			}
		}
	}
}

function assign(ast, ctx){
	addLoop(ast,ctx);
}

function checkIfLoopNeeded(ast,ctx){
	// console.log(ast);
	console.log(ctx.symtbl.lookup(ast.id));
}

function addLoop(ast,ctx){
	checkIfLoopNeeded(ast,ctx);
}
exports.transform = loopGen;