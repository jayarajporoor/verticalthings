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
	// console.log(ast);
	for(var i=0;i<ast.length;i++){
		if(typeof ast[i].kind != 'undefined'){
			switch(ast[i].kind){
				case "assign":
					ast[i] = assign(ast[i],ctx);
					break;
				case "block":
					block(ast[i],ctx);
					break;
				case "for":
					block(ast[i].body.stmts,ctx);
					break;
				case "if":
					block(ast[i].if_body,ctx);
					if(typeof ast[i].else_body !='undefined'){
						block(ast[i].else_body,ctx);
					}
					break;
				case "while":
					block(ast[i].body,ctx);
					break;
			}
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
	}
}

function assign(ast, ctx){
	return addLoop(ast,ctx);
}

function is_varconst(ast){
	if(typeof ast.id != 'undefined' || typeof ast.qid != 'undefined' || typeof ast.is_const != 'undefined')
		return true;
	return false;
}

function checkIfLoopNeeded(ast,ctx){
	if(is_varconst(ast.expr.lexpr) && is_varconst(ast.expr.rexpr)){
		var Left = astlib.resolve_matrix_expr(ast.expr.lexpr,ctx.symtbl);
		var Right = astlib.resolve_matrix_expr(ast.expr.rexpr,ctx.symtbl);
		if(ast.expr.op == '+' || ast.expr.op == '-' || ast.expr.op == '(*)'){
			if(Left && Right){
				if(Left.dim.length==1 && Right.dim.length==1){
					var temp=JSON.parse(JSON.stringify(ast));
					var range= {from: {iconst: 0}, to: {iconst: Left.dim[0].iconst}, is_inclusive: false};
					if(typeof temp.expr.lexpr.dim!='undefined'){
						temp.expr.lexpr.dim.dim.push({id: '__i'});
					}
					else
						temp.expr.lexpr.dim={dim: [{id: '__i'}]};
					if(typeof temp.expr.rexpr.dim!='undefined'){
						temp.expr.rexpr.dim.dim.push({id: '__i'});
					}
					else
						temp.expr.rexpr.dim={dim: [{id: '__i'}]};
					ast = {kind: "for", ids: ['__i'], range: range, body: {stmts: [temp], kind: "block"}};
				}
				else if(Left.dim.length==2 && Right.dim.length==2){
					var temp=JSON.parse(JSON.stringify(ast));
					var range1= {from: {iconst: 0}, to: {iconst: Left.dim[0].iconst}, is_inclusive: false};
					var range2= {from: {iconst: 0}, to: {iconst: Left.dim[1].iconst}, is_inclusive: false};
					if(typeof temp.expr.lexpr.dim!='undefined' && ((typeof temp.expr.lexpr.id != 'undefined' && temp.expr.lexpr.id.indexOf("__") != 0) || (typeof temp.expr.lexpr.qid != 'undefined' && temp.expr.lexpr.qid[0].indexOf("__") != 0))){
						temp.expr.lexpr.dim.dim.push({id: '__i'});
						temp.expr.rexpr.dim.dim.push({id: '__j'});
					}
					else if((typeof temp.expr.lexpr.id != 'undefined' && temp.expr.lexpr.id.indexOf("__") != 0) || (typeof temp.expr.lexpr.qid != 'undefined' && temp.expr.lexpr.qid[0].indexOf("__") != 0))
						temp.expr.lexpr.dim={dim: [{id: '__i'}, {id: '__j'}]};
					if(typeof temp.expr.rexpr.dim!='undefined' && ((typeof temp.expr.rexpr.id != 'undefined' && temp.expr.rexpr.id.indexOf("__") != 0) || (typeof temp.expr.rexpr.qid != 'undefined' && temp.expr.rexpr.qid[0].indexOf("__") != 0))){
						temp.expr.rexpr.dim.dim.push({id: '__i'});
						temp.expr.rexpr.dim.dim.push({id: '__j'});
					}
					else if((typeof temp.expr.rexpr.id != 'undefined' && temp.expr.rexpr.id.indexOf("__") != 0) || (typeof temp.expr.rexpr.qid != 'undefined' && temp.expr.rexpr.qid[0].indexOf("__") != 0))
						temp.expr.rexpr.dim={dim: [{id: '__i'}, {id: '__j'}]};
					ast = {kind: "for", ids: ['__i'], range: range1, body: {stmts: {kind: "for", ids: ['__j'], range: range2, body: {stmts: [temp], kind: "block"}}, kind: "block"}};
				}
			}
		}
		else if(ast.op == '*'){

		}
	}
	return ast;
}

function addLoop(ast,ctx){
	return checkIfLoopNeeded(ast,ctx);
					// console.log(JSON.stringify(ast));
}

var astlib=require("./../ast_util.js");
exports.transform = loopGen;