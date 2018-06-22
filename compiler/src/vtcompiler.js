const util = require('util')
var fs = require('fs');
const path = require('path');
var antlr4 = require('antlr4/index');
var VTLexer = require(__dirname + '/../grammar/out/parser/VTLexer');
var VTParser = require(__dirname + '/../grammar/out/parser/VerticalThings');
var astBuilder = require("./astbuilder.js");

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

function loadPipeline(ast, basepath) {
	var pipeline = ast.pipeline;
	if(!pipeline) {
		console.log("Pipeline definition not found.");
		process.exit(1);
	}

	for(var i=0;i<pipeline.block.length;i++){
		var entry = pipeline.block[i];
		var name = entry.qname[0];
		if(!ast.modules[name]) {
			var filepath = basepath + "/" + name + ".vtl";
			var src = fs.readFileSync(filepath, 'utf8');
			var tree = parse(filepath, src);
			ast.modules[name] = astBuilder.buildAst(tree);
		}
	}

}

if(process.argv.length <= 2) {
	console.log("Please provide the pipeline definition file name to be compiled.");
	process.exit(1);
}

var srcpath = process.argv[2];
var input = fs.readFileSync(srcpath, 'utf8');
var tree = parse(srcpath, input);
var ast = astBuilder.buildAst(tree);

ast.modules = {};

loadPipeline(ast, path.dirname(srcpath));

console.log(JSON.stringify(ast, null, 4));

