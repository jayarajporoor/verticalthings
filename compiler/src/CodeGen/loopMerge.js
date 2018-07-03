// TODO
// * Keep track of orig.

function loopFusion(ast,ctx){
	for(var i in ast.modules){
		// ctx.symtbl.enterNestedScope(i);
		fdefs(ast.modules[i].fdefs,ctx);
		// ctx.symtbl.exitNestedScope();
	}
}

function fdefs(ast){
	for(var i = 0; i < ast.length ; i++){		
		// ctx.symtbl.enterNestedScope(ast[i].id);
		var change=true;
		while(change){
			change=false;
			change=(change || merge_loops(ast[i].body.stmts));
			change=(change || check_inner(ast[i].body.stmts));
		}
		// ctx.symtbl.exitNestedScope();
	}
}

function check_inner(stmts){
	var changed=true;
	var anychange=false;
	while(changed){
		changed=false;
		for(var i=0;i<stmts.length;i++){
			if(i+2<stmts.length && isMergable(stmts[i],stmts[i+2])){
				if(stmts[i+1].kind=="assign" && stmts[i+1].id.indexOf("__")==0 && typeof stmts[i+1].expr.iconst!='undefined'){
					var temp=stmts[i];
					stmts[i]=stmts[i+1];
					stmts[i+1]=temp;
					change=true;
					anychange=true;
					break;
				}
			}
			else if(stmts[i].kind == "if"){
				changed = (changed || check_inner(stmts[i].if_body.stmts));
				if(typeof stmts[i].else_body != 'undefined'){
					if(stmts[i].else_body.kind != "block")
						changed = (changed || merge_loops([stmts[i].else_body]));
					else
						changed = (changed || merge_loops(stmts[i].else_body.stmts));
				}
				if(changed){
					anychange=true;
					break;
				}
			}
			else if(stmts[i].kind == "for"){
				changed = (changed || check_inner(stmts[i].body.stmts));
				if(changed){
					anychange=true;
					break;
				}
			}
			else if(stmts[i].kind == "while"){
				changed = (changed || check_inner(stmts[i].body.stmts));
				if(changed){
					anychange=true;
					break;
				}
			}
		}
	}
	return anychange;
}

function merge_loops(stmts){
	// console.log(stmts);
	var changed=true;
	var anychange=false;
	while(changed){
		changed=false;
		anychange=false;
		for(var i=0;i<stmts.length;i++){
			if(i+1<stmts.length && isMergable(stmts[i],stmts[i+1])){
				stmts[i].body.stmts=merge(stmts[i],stmts[i+1]);
				stmts.splice(i+1,1);
				changed=true;
				anychange=true;
				break;
			}
			else if(stmts[i].kind == "block"){
				for(var j=0;j<stmts[i].stmts.length;j++){
					stmts.splice(i+j+1,0,stmts[i].stmts[j]);
				}
				stmts.splice(i,1);
				changed=true;
				anychange=true;
				break;
			}
			else if(stmts[i].kind == "if"){
				changed = (changed || merge_loops(stmts[i].if_body.stmts));
				if(typeof stmts[i].else_body != 'undefined'){
					// console.log(stmts[i]);
					if(stmts[i].else_body.kind != "block")
						changed = (changed || merge_loops([stmts[i].else_body]));
					else
						changed = (changed || merge_loops(stmts[i].else_body.stmts));
				}
					// console.log("***************************");
				if(changed){
					anychange=true;
					break;
				}
			}
			else if(stmts[i].kind == "for"){
				changed = (changed || merge_loops(stmts[i].body.stmts));
				if(changed){
					anychange=true;
					break;
				}
			}
			else if(stmts[i].kind == "while"){
				changed = (changed || merge_loops(stmts[i].body.stmts));
				if(changed){
					anychange=true;
					break;
				}
			}
		}
	}
	return anychange;
}

function merge(stmt1,stmt2){
	return stmt1.body.stmts.concat(stmt2.body.stmts);
}
var i=0;
function isMergable(stmt1, stmt2){
	if(stmt1.kind == "for" && stmt2.kind == "for"){
		if(stmt1.ids[0] == stmt2.ids[0] && stmt1.ids[0].indexOf("__")==0){
			if((stmt1.range.from.iconst == stmt2.range.from.iconst) && (stmt1.range.to.iconst == stmt2.range.to.iconst)){
				return true;
			}
		}
	}
	return false;
}
exports.transform = loopFusion;