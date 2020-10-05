// Generated from MotePy.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MotePy.

function MotePyVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MotePyVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MotePyVisitor.prototype.constructor = MotePyVisitor;

// Visit a parse tree produced by MotePy#module.
MotePyVisitor.prototype.visitModule = function(ctx) {
};


// Visit a parse tree produced by MotePy#effectsDef.
MotePyVisitor.prototype.visitEffectsDef = function(ctx) {
};


// Visit a parse tree produced by MotePy#effectStmt.
MotePyVisitor.prototype.visitEffectStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#effectTarget.
MotePyVisitor.prototype.visitEffectTarget = function(ctx) {
};


// Visit a parse tree produced by MotePy#effectParam.
MotePyVisitor.prototype.visitEffectParam = function(ctx) {
};


// Visit a parse tree produced by MotePy#effectCtx.
MotePyVisitor.prototype.visitEffectCtx = function(ctx) {
};


// Visit a parse tree produced by MotePy#effectSpec.
MotePyVisitor.prototype.visitEffectSpec = function(ctx) {
};


// Visit a parse tree produced by MotePy#opsList.
MotePyVisitor.prototype.visitOpsList = function(ctx) {
};


// Visit a parse tree produced by MotePy#effectExpr.
MotePyVisitor.prototype.visitEffectExpr = function(ctx) {
};


// Visit a parse tree produced by MotePy#effectTerm.
MotePyVisitor.prototype.visitEffectTerm = function(ctx) {
};


// Visit a parse tree produced by MotePy#pipelineDef.
MotePyVisitor.prototype.visitPipelineDef = function(ctx) {
};


// Visit a parse tree produced by MotePy#pipelineBlock.
MotePyVisitor.prototype.visitPipelineBlock = function(ctx) {
};


// Visit a parse tree produced by MotePy#pipelineEntry.
MotePyVisitor.prototype.visitPipelineEntry = function(ctx) {
};


// Visit a parse tree produced by MotePy#pipelineList.
MotePyVisitor.prototype.visitPipelineList = function(ctx) {
};


// Visit a parse tree produced by MotePy#useSpec.
MotePyVisitor.prototype.visitUseSpec = function(ctx) {
};


// Visit a parse tree produced by MotePy#includeSpec.
MotePyVisitor.prototype.visitIncludeSpec = function(ctx) {
};


// Visit a parse tree produced by MotePy#booleanLiteral.
MotePyVisitor.prototype.visitBooleanLiteral = function(ctx) {
};


// Visit a parse tree produced by MotePy#arrayLiteral.
MotePyVisitor.prototype.visitArrayLiteral = function(ctx) {
};


// Visit a parse tree produced by MotePy#initValue.
MotePyVisitor.prototype.visitInitValue = function(ctx) {
};


// Visit a parse tree produced by MotePy#varIdDef.
MotePyVisitor.prototype.visitVarIdDef = function(ctx) {
};


// Visit a parse tree produced by MotePy#varDef.
MotePyVisitor.prototype.visitVarDef = function(ctx) {
};


// Visit a parse tree produced by MotePy#dimValue.
MotePyVisitor.prototype.visitDimValue = function(ctx) {
};


// Visit a parse tree produced by MotePy#dimensionSpec.
MotePyVisitor.prototype.visitDimensionSpec = function(ctx) {
};


// Visit a parse tree produced by MotePy#intVal.
MotePyVisitor.prototype.visitIntVal = function(ctx) {
};


// Visit a parse tree produced by MotePy#numVal.
MotePyVisitor.prototype.visitNumVal = function(ctx) {
};


// Visit a parse tree produced by MotePy#rangeType.
MotePyVisitor.prototype.visitRangeType = function(ctx) {
};


// Visit a parse tree produced by MotePy#castableType.
MotePyVisitor.prototype.visitCastableType = function(ctx) {
};


// Visit a parse tree produced by MotePy#primitiveType.
MotePyVisitor.prototype.visitPrimitiveType = function(ctx) {
};


// Visit a parse tree produced by MotePy#varType.
MotePyVisitor.prototype.visitVarType = function(ctx) {
};


// Visit a parse tree produced by MotePy#formalParam.
MotePyVisitor.prototype.visitFormalParam = function(ctx) {
};


// Visit a parse tree produced by MotePy#formalParams.
MotePyVisitor.prototype.visitFormalParams = function(ctx) {
};


// Visit a parse tree produced by MotePy#stmtBlock.
MotePyVisitor.prototype.visitStmtBlock = function(ctx) {
};


// Visit a parse tree produced by MotePy#elseStmt.
MotePyVisitor.prototype.visitElseStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#ifStmt.
MotePyVisitor.prototype.visitIfStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#elifStmt.
MotePyVisitor.prototype.visitElifStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#identifierList.
MotePyVisitor.prototype.visitIdentifierList = function(ctx) {
};


// Visit a parse tree produced by MotePy#forStmt.
MotePyVisitor.prototype.visitForStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#whileStmt.
MotePyVisitor.prototype.visitWhileStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#assignStmt.
MotePyVisitor.prototype.visitAssignStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#returnStmt.
MotePyVisitor.prototype.visitReturnStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#stmt.
MotePyVisitor.prototype.visitStmt = function(ctx) {
};


// Visit a parse tree produced by MotePy#funcDef.
MotePyVisitor.prototype.visitFuncDef = function(ctx) {
};


// Visit a parse tree produced by MotePy#qualIdentifier.
MotePyVisitor.prototype.visitQualIdentifier = function(ctx) {
};


// Visit a parse tree produced by MotePy#cppQualIdentifier.
MotePyVisitor.prototype.visitCppQualIdentifier = function(ctx) {
};


// Visit a parse tree produced by MotePy#functionCall.
MotePyVisitor.prototype.visitFunctionCall = function(ctx) {
};


// Visit a parse tree produced by MotePy#actualParam.
MotePyVisitor.prototype.visitActualParam = function(ctx) {
};


// Visit a parse tree produced by MotePy#actualParams.
MotePyVisitor.prototype.visitActualParams = function(ctx) {
};


// Visit a parse tree produced by MotePy#dimensionExpr.
MotePyVisitor.prototype.visitDimensionExpr = function(ctx) {
};


// Visit a parse tree produced by MotePy#arrayExpr.
MotePyVisitor.prototype.visitArrayExpr = function(ctx) {
};


// Visit a parse tree produced by MotePy#addressExpr.
MotePyVisitor.prototype.visitAddressExpr = function(ctx) {
};


// Visit a parse tree produced by MotePy#castExpr.
MotePyVisitor.prototype.visitCastExpr = function(ctx) {
};


// Visit a parse tree produced by MotePy#basicExpr.
MotePyVisitor.prototype.visitBasicExpr = function(ctx) {
};


// Visit a parse tree produced by MotePy#relExpr.
MotePyVisitor.prototype.visitRelExpr = function(ctx) {
};


// Visit a parse tree produced by MotePy#expr.
MotePyVisitor.prototype.visitExpr = function(ctx) {
};


// Visit a parse tree produced by MotePy#numConstant.
MotePyVisitor.prototype.visitNumConstant = function(ctx) {
};


// Visit a parse tree produced by MotePy#exprConstant.
MotePyVisitor.prototype.visitExprConstant = function(ctx) {
};


// Visit a parse tree produced by MotePy#literal.
MotePyVisitor.prototype.visitLiteral = function(ctx) {
};



exports.MotePyVisitor = MotePyVisitor;