const util = require('util')
var fs = require('fs');
const path = require('path');
var antlr4 = require('antlr4/index');
var VTLexer = require(__dirname + '/../grammar/out/parser/VTLexer');
var VTParser = require(__dirname + '/../grammar/out/parser/VerticalThings');
var astBuilder = require("./astbuilder.js");
var SymbolTable = require("./symtbl.js");

var parseErrorListener = {};
var errors=0;
parseErrorListener.syntaxError = function(offendingToken, line, column, msg, err){
//	console.log('stx', line);
	errors++;
}
parseErrorListener.reportAttemptingFullContext = function(offendingToken, line, column, msg, err){
	//console.log('ctx', line);
	//errors++;
}
parseErrorListener.reportAmbiguity = function(offendingToken, line, column, msg, err){
	//console.log('amb', line);
	//errors++;
}

parseErrorListener.reportContextSensitivity = function(offendingToken, line, column, msg, err){
	//console.log(line, column);
}

function parse(srcpath, input) {
	console.log("Parsing " + srcpath);
    var chars = new antlr4.InputStream(input);
    var lexer = new VTLexer.VTLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new VTParser.VerticalThings(tokens);
    parser.buildParseTrees = true;
    parser.addErrorListener(parseErrorListener);
    errors=0;
    var tree = parser.module();
    if(errors > 0) {
    	console.log("Please fix the syntax errors in the module " + srcpath);
    	process.exit(1);
    }
    return tree;
}

function loadPipelineBlock(block, basepath, symtbl){
	for(var i=0;i<block.length;i++){
		var entry = block[i];
		if(entry.qname){
			var name = entry.qname[0];
			if(!ast.modules[name]) {				
				var filepath = basepath + "/" + name + ".vtl";
				var src = fs.readFileSync(filepath, 'utf8');
				var tree = parse(filepath, src);
				symtbl.createNestedScope(name);
				ast.modules[name] = astBuilder.buildAst(tree, symtbl);
				symtbl.exitNestedScope();
			}
		}else{
			loadPipelineBlock(entry, basepath, symtbl);//this is a nested block
		}
	}
}

function loadPipeline(ast, basepath, symtbl) {
	var pipeline = ast.pipeline;
	if(!pipeline) {
		console.log("Pipeline definition not found.");
		process.exit(1);
	}
	loadPipelineBlock(ast.pipeline.block, basepath, symtbl);
}

if(process.argv.length <= 2) {
	console.log("Please provide the pipeline definition file name to be compiled.");
	process.exit(1);
}

var srcpath = process.argv[2];

var printAst = false;
var printSymtbl = false;
var printColor = false;
var printJson = false;

var ast_transforms = [];
var code_path;

for(var i=3;i<process.argv.length;i++){
	switch(process.argv[i]){
		case "-ast" :
			printAst = true;
		break;
		case "-symtbl":
			printSymtbl = true;
		break;
		case "-color":
			printColor = true;
		break;
		case "-json":
			printJson = true;
		break;
		case "-xast":
			if(process.argv[i+1]){
				ast_transforms.push(process.argv[i+1]);
				i++;
			}else{
				console.log("Please provide the AST transform module file path.");
			}
		case "-code":
			if(process.argv[i+1]){
				code_path = process.argv[i+1];
				i++;
			}else{
				code_path = "";
			}
		break;
	}
}

var input = fs.readFileSync(srcpath, 'utf8');
var tree = parse(srcpath, input);
var symtbl = new SymbolTable("<root>");
var ast = astBuilder.buildAst(tree, symtbl);

ast.modules = {};

loadPipeline(ast, path.dirname(srcpath), symtbl);

var transform_ctx = {symtbl: symtbl};

for(var i=0;i<ast_transforms.length;i++){
	var xfn = require(ast_transforms[i]);
	xfn(ast, transform_ctx);
}

if(printAst){
	if(printJson){
		console.log(JSON.stringify(ast, null, 4));
	}
	else{
		console.log(util.inspect(ast, false, 500, printColor));
	}
}	

if(printSymtbl){
	console.log(util.inspect(symtbl, false, 500, printColor));
}

if(code_path){
	if(!transform_ctx.code || transform_ctx.code.length === 0){
		console.log("Code not generated!");
	}else{
		var code_str = transform_ctx.code.join("\n");
		if(code_path === ""){
			console.log(code_str);
		}else{
			fs.writeFileSync(code_path, code_str);
		}
	}
}
