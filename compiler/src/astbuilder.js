function getId(node) {
	return node.Identifier().getText();
}

function getIConst(node) {
	return parseInt(node.IntegerConstant().getText());
}

function getFConst(node) {
	return parseFloat(node.FloatingConstant().getText());
}

function getCConst(node) {
	return node.CharacterConstant().getText();
}

function getBConst(node) {
	var v = node.TRUE().getText();
	return (v === 'true');
}

function getNumConstAst(node){
	var ast = {};
	var iconst = node.IntegerConstant();
	var fconst = node.FloatingConstant();
	if(iconst)
	{
		ast.iconst = getIConst(node);
	}else
	if(fconst){
		ast.fconst = getFConst(node);
	}
	return ast;
}

function getExprConstAst(node) {
	var num = node.numConstant();
	var char = node.CharacterConstant();
	var bconst = node.booleanLiteral();
	if(num){
		return getNumConstAst(num);
	}else
	if(char){
		return {cconst: getCharConst(char)};
	}else
	if(bconst){
		return {bconst: getBConst(bconst)};
	}
	return {};
}

function getIdList(node) {
	var ids = node.Identifier();
	var res = [];
	for(var j=0;j<ids.length;j++) {
		res.push(ids[j].getText());
	}	
	return res;	
}


function astIntVal(val){
	//Identifier|IntegerConstant;
	var identifier = val.Identifier();
	var iconst = val.IntegerConstant();
	var ast = {};
	if(identifier){
		ast.id = getId(val);
	}else{
		ast.iconst = getIConst(iconst);
	}
	return ast;
}

function getDimExpr(dexpr){
	//dimExpr : intVal op=(PLUS|MUL) intVal;
	var ast = {};
	ast.op = dexpr.op.text;
	var intVal = dexpr.intVal();
	ast.vals = [astIntVal(intVal[0]), astIntVal(intVal[1])];
	return ast;
}

function getDimensionSpec(dimSpec){
	var dim = [];
	var dimValue = dimSpec.dimValue();
	for(var i=0;i<dimValue.length;i++){
		var dimval = {};
		if(dimValue[i].IntegerConstant()){
			dimval.iconst = getIConst(dimValue[i]);
		}else
		if(dimValue[i].Identifier()){
			dimval.id = getId(dimValue[i]);
		}else
		if(dimValue[i].dimExpr()){
			dimval.expr = getDimExpr(dimValue[i].dimExpr());
		}
		dim.push(dimval);
	}
	return dim;
}

function getStringLiteral(s){
	return s.getText();
}

function getActualParams(params) {
	var param = params.actualParam();
	var res =[];
	for(var i=0;i < param.length;i++) {
		v={};
		var expr = param[i].expr();
		var strLiteral = param[i].StringLiteral();
		if(expr){
			v.expr = getExprAst(expr);
		}else
		if(strLiteral)
		{
			v.sconst = getStringLiteral(strLiteral);
		}
		res.push(v);
	}
	return res;
}

function getFunctionCallAst(fcall){
	var ast = {};
	var qualIdentifier = fcall.qualIdentifier();
	var cppQualIdentifier = fcall.cppQualIdentifier();
	var actualParams = fcall.actualParams();
	if(qualIdentifier){
		ast.qid = getIdList(qualIdentifier);
	}else
	if(cppQualIdentifier){
		ast.qidCpp = getIdList(cppQualIdentifier);
	}
	if(actualParams){
		ast.params = getActualParams(actualParams);
	}else{
		ast.params = [];
	}
	return ast;
}

function astArrayExpr(expr){
	var ast = {
		id: getId(expr),
		dim: getDimensionSpec(dimensionSpec)
	};
	return ast;
}

function getBasicExprAst(expr){
    var ast = {};
	var qualIdentifier = expr.qualIdentifier();
	var arrayExpr = expr.arrayExpr();
	var functionCall = expr.functionCall();
	var constant = expr.exprConstant();
	var basicSubExpr = expr.basicExpr();

	var op = expr.op ? expr.op.text : null;
	var up = expr.up ? expr.up.text : null;//unary op
	if(qualIdentifier){
		ast = {qid: getIdList(qualIdentifier)};
	}else
	if(arrayExpr){
		ast = astArrayExpr(arrayExpr);
	}else
	if(functionCall){
		ast = getFunctionCallAst(functionCall);
	}else
	if(constant){
		ast = getExprConstAst(constant);
	}else
	if(op){
		ast.op = op;
		ast.lexpr = getBasicExprAst(basicSubExpr[0]);
		ast.rexpr = getBasicExprAst(basicSubExpr[1]);
	}else
	if(up){
		ast.up = up;
		ast.expr = getBasicExpr(basicSubExpr[0]);
	}else{
		ast = getBasicExprAst(basicSubExpr[0]);		
	}

	return ast;
}

function getRelExprAst(expr){
	   //basicExpr op=GT basicExpr |
	var basicExpr = expr.basicExpr();
	var relSubExpr = expr.relExpr();

	if(relSubExpr){
		return getRelExprAst(relSubExpr);
	}else {
		return {
			op : expr.op.text,
			lexpr: getBasicExprAst(basicExpr[0]),
			rexpr: getBasicExprAst(basicExpr[1])
		};
	}
}

function getExprAst(expr){
	var ast = {};
	var basicExpr = expr.basicExpr();
	var relExpr = expr.relExpr();
	var subExpr = expr.expr();
	if(subExpr.length == 1){
		return getExprAst(subExpr[0]);
	}else
	if(basicExpr){
		ast = getBasicExprAst(basicExpr);
	}else if(relExpr){
        ast = getRelExprAst(relExpr);
	}else
	if(subExpr) {
		if(expr.LNOT()){
			ast.lexpr = getExprAst(subExpr);
			ast.up = '!';
		}else{
			ast.lexpr = getExprAst(subExpr[0]);
			ast.rexpr = getExprAst(subExpr[1]);
			ast.op =  expr.op.text;
		}
	}
	return ast;
}


function astPipelineBlock(pipelineBlock, ast){
	var list = pipelineBlock.pipelineList().pipelineEntry();
	for(var i=0;i<list.length;i++) {
		var entry = list[i];
		var entryQualId = entry.qualIdentifier();
		var entryFcall = entry.functionCall();
		var entryBlock = entry.pipelineBlock();
		if(entryQualId) {
			ast.push({qname: getIdList(entryQualId)});
		}else
		if(entryFcall) {
			ast.push({qname: getIdList(entryFcall.qualIdentifier()), params: getActualParams(entryFcall.actualParams())});
		}else 
		if(entryBlock) {
			var newBlock = [];
			ast.push(newBlock);
			astPipelineBlock(entryBlock, newBlock);
		}
	}
}

function astPipeline(pipelineDef, ast){
	ast.name = getId(pipelineDef);
	ast.block = [];
	astPipelineBlock(pipelineDef.pipelineBlock(), ast.block);
}

function astUseSpec(useSpec){
	var uses = [];
	for(var i=0;i<useSpec.length;i++){
		uses.push({name: getId(useSpec[i])});
	}
	return uses;
}

function astNumVal(numVal){
	var identifier = numVal.Identifier();
	var numConstant = numVal.NumConstant();
	if(identifier){
		return {id: getId(numVal)};
	}else
	if(numConstant){
		return getNumConstAst(numConstant);
	}else
	{
		return {};
	}
}

function astRangeType(rangeType){
	var numVal = rangeType.numVal();
	return {from: astNumVal(numVal[0]), to: astNumVal(numVal[1]), is_inclusive: rangeType.DPERIOD()? true : false};
}

function astPrimitiveType(ptype){
	return {primitive: ptype.INT() ? 'int' : (ptype.FLOAT() ? 'float' : (ptype.BOOLEAN() ? 'boolean' : 'void'))};
}

function astVarType(varType){
	//(qualIdentifier | cppQualIdentifier | rangeType | builtinType)	
	var qualIdentifier = varType.qualIdentifier();
	var cppQualIdentifier = varType.cppQualIdentifier();
	var rangeType = varType.rangeType();
	var primitiveType = varType.primitiveType();

	var ast = {};

	if(qualIdentifier){
		ast.qid = getIdList(qualIdentifier);
	}else
	if(cppQualIdentifier){
		ast.qidCpp = getIdList(cppQualIdentifier);
	}else
	if(rangeType){
		ast.range = astRangeType(rangeType);
	}else
	if(primitiveType){
		ast = astPrimitiveType(primitiveType);
	}
	return ast;
}


function astArrayLiteral(alit){
    var entries = alit.literal();
    var ast = [];
    for(var i=0;i<entries.length;i++){
    	ast.push(astLiteral(entries[i]));
    }
    return ast;
}

function astLiteral(literal){

    var exprConstant = literal.exprConstant();
    var stringLiteral = literal.StringLiteral();
    var arrayLiteral = literal.arrayLiteral();

    var ast = {};
    if(exprConstant){
    	ast = getExprConstAst(exprConstant);
    }else
    if(sringLiteral){
    	ast.sconst = getStringLiteral(stringLiteral);
    }else
    if(arrayLiteral){
    	ast.aconst  = astArrayLiteral(arrayLiteral);
    }

    return ast;
}


function astInitValue(initValue){
	//expr | StringLiteral | arrayLiteral;
	var expr = initValue.expr();
	var sliteral = initValue.StringLiteral();
	var arrayLiteral = initValue.arrayLiteral();
	if(expr){
		return getExprAst(expr);
	}else{
		return astLiteral(initValue);
	}
}

function astVarDef(def){
  //CONST varType Identifier dimensionSpec? ASSIGN literal SEMI
  var varType = def.varType();
  var identifier = def.Identifier();
  var dimensionSpec = def.dimensionSpec();
  var initValue = def.initValue();
  var ast = {
  	type : astVarType(varType),
  	id   : getId(def),
  	is_const: def.CONST() ? true : false
  };
  if(dimensionSpec){
  	ast.dim = getDimensionSpec(dimensionSpec);
  }
  if(initValue){
  	ast.init = astInitValue(initValue);
  }
  return ast;
}

function astFormalParam(param){
	//varType Identifier
	return {
		is_const: param.CONST() ? true : false,
		type: astVarType(param.varType()),
		id: getIdentifier(param)
	};
}

function astAssignStmt(stmt){
	//qualIdentifier dimensionSpec? ASSIGN expr
	var ast = {
		kind: 'assign',
		qid : getIdList(stmt.qualIdentifier()),
		expr: getExprAst(stmt.expr())
	};
	var dimSpec = stmt.dimensionSpec();
	if(dimSpec){
		ast.dim = getDimensionSpec(dimSpec);
	}	
	return ast;
}

function astForStmt(stmt){
	 //FOR identifierList IN rangeType stmtBlock
    var ast = {
    	kind: 'for',
    	ids: getIdList(stmt.identifierList()),
    	range: astRangeType(stmt.rangeType()),
    	body: astStmtBlock(stmt.stmtBlock())
    };
    return ast;
}

function astWhileStmt(stmt){
	//:   WHILE LP expr RP stmtBlock
	var ast = {
		kind: 'while',
		expr: getExprAst(stmt.expr()),
		body: astStmtBlock(stmt.stmtBlock())
	};
	return ast;
}

function astIfStmt(stmt){
    //:   IF LP expr RP stmtBlock elseStmt?
    var ast = {
    	kind: 'if',
    	expr: getExprAst(stmt.expr()),
    	if_body: astStmtBlock(stmt.stmtBlock())
    };
    var elseStmt = stmt.elseStmt();
    if(elseStmt){
    	//ELSE (stmtBlock | ifStmt)
    	if(elseStmt.ifStmt()){
    		ast.else_body = astIfStmt(elseStmt.ifStmt());
    	}else{
    		ast.else_body = astStmtBlock(elseStmt.stmtBlock());
    	}    	
    }
    return ast;
}

function astStmt(stmt){
	//stmtBlock | ifStmt | forStmt | whileStmt | assignStmt SEMI | functionCall SEMI
	var stmtBlock = stmt.stmtBlock();
	var ifStmt = stmt.ifStmt();
	var whileStmt = stmt.whileStmt();
	var assignStmt = stmt.assignStmt();
	var functionCall = stmt.functionCall();
	if(stmtBlock){
		return astStmtBlock(stmtBlock);
	}else
	if(ifStmt){
		return astIfStmt(ifStmt);
	}else
	if(whileStmt){
		return astWhileStmt(whileStmt);		
	}else
	if(assignStmt){
		return astAssignStmt(assignStmt);
	}else
	if(functionCall){
		return {fcall: getFunctionCallAst(functionCall)};
	}
}

function astStmtBlock(block){
	var blockStmts = block.stmt();
	var stmts = [];
	for(var i=0;i<blockStmts.length;i++){
		stmts.push(astStmt(blockStmts[i]));
	}
	return {stmts: stmts, kind: 'block'};
}

function astFuncDef(fdef){
	var ast = {};
//(returnType | flowType)? Identifier LP paramList? RP         stmtBlock
	var varType = fdef.varType();
	var flowType = fdef.flowType();
	if(varType){
		ast.type = astVarType(varType);
	}
	if(flowType){
		if(flowType.DEFAULT()){
			ast.flow = 'default';
		}else{
			ast.flow = 'normal';
		}
	}
	ast.id = getId(fdef);
	ast.params = [];
	var fparams = fdef.formalParams()
	if(fparams){
		for(var i=0;i<fparams.length;i++){
			ast.params.push(astFormalParam(fparams[i]));
		}
	}
	ast.body = astStmtBlock(fdef.stmtBlock());
	return ast;
}

function astModule(moduleDef, ast) {
	ast.name = getId(moduleDef);
	var useSpec = moduleDef.useSpec();
	if(useSpec){
		ast.uses = astUseSpec(useSpec);
	}else{
		ast.uses = [];
	}
	var varDef = moduleDef.varDef();
	if(varDef){
		ast.vars = [];
		for(var i=0;i<varDef.length;i++){
			ast.vars.push(astVarDef(varDef[i]));
		}
	}
	var pipeline = moduleDef.pipelineDef();
	if(pipeline) {
		ast.pipeline = {};
		astPipeline(pipeline, ast.pipeline);
	}
	var funcDef = moduleDef.funcDef();
	if(funcDef){
		ast.fdefs = [];
		for(var i=0;i<funcDef.length;i++){
			ast.fdefs.push(astFuncDef(funcDef[i]));
		}
	}
	return ast;
}

function buildAst(tree) {
	var ast ={};
	astModule(tree, ast);
	return ast;
}

exports.buildAst = buildAst;


