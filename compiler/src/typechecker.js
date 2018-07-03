var pl = require( "../../thirdparty/tau-prolog/core.js" );

var session = pl.create( 1000 );

// Load the program
var program = 
	// Products
	"dim(buf1, 10)." +
	"dim(buf2, 10)." +
	"type(add(A, B)) :- dim(A, M), dim(B, M).";
  session.consult( program );

// Get Node.js argument: nodejs ./script.js item
var item = process.argv[2];

// Query the goal
session.query( "type(add(buf1,buf2))." );

// Show answers
session.answers( x => console.log( pl.format_answer(x) ) );

function typecheck(ast, ctx){
}

exports.transform = typecheck;
