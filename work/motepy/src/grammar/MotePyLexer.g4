lexer grammar MotePyLexer;


@lexer::members {

  let CommonToken = require('antlr4/Token').CommonToken;
  let MotePyParser = require('./MotePy').MotePy;

  let old_lexer = MotePyLexer;
  MotePyLexer = function() {
    old_lexer.apply(this, arguments);
    this.reset.call(this);
  }

  MotePyLexer.prototype = Object.create(old_lexer.prototype);
  MotePyLexer.prototype.constructor = MotePyLexer;


  MotePyLexer.prototype.reset = function() {
    // A queue where extra tokens are pushed on (see the NEWLINE lexer rule).
    this.token_queue = [];

    // The stack that keeps track of the indentation level.
    this.indents = [];

    // The amount of opened braces, brackets and parenthesis.
    this.opened = 0;

    antlr4.Lexer.prototype.reset.call(this);
  };

  MotePyLexer.prototype.emitToken = function(token) {
    this._token = token;
    this.token_queue.push(token);
  };

  /**
   * Return the next token from the character stream and records this last
   * token in case it resides on the default channel. This recorded token
   * is used to determine when the lexer could possibly match a regex
   * literal.
   *
   */
  MotePyLexer.prototype.nextToken = function() {
    // Check if the end-of-file is ahead and there are still some DEDENTS expected.
    if (this._input.LA(1) === MotePyParser.EOF && this.indents.length) {

      // Remove any trailing EOF tokens from our buffer.
      this.token_queue = this.token_queue.filter(function(val) {
        return val.type !== MotePyParser.EOF;
      });

      // First emit an extra line break that serves as the end of the statement.
      this.emitToken(this.commonToken(MotePyParser.NEWLINE, "\n"));

      // Now emit as much DEDENT tokens as needed.
      while (this.indents.length) {
        this.emitToken(this.createDedent());
        this.indents.pop();
      }

      // Put the EOF back on the token stream.
      this.emitToken(this.commonToken(MotePyParser.EOF, "<EOF>"));
    }

    let next = antlr4.Lexer.prototype.nextToken.call(this);
    return this.token_queue.length ? this.token_queue.shift() : next;
  };

  MotePyLexer.prototype.createDedent = function() {
    return this.commonToken(MotePyParser.DEDENT, "");
  }

  MotePyLexer.prototype.commonToken = function(type, text) {
    let stop = this.getCharIndex() - 1;
    let start = text.length ? stop - text.length + 1 : stop;
    return new CommonToken(this._tokenFactorySourcePair, type, antlr4.Lexer.DEFAULT_TOKEN_CHANNEL, start, stop);
  }

  // Calculates the indentation of the provided spaces, taking the
  // following rules into account:
  //
  // "Tabs are replaced (from left to right) by one to eight spaces
  //  such that the total number of characters up to and including
  //  the replacement is a multiple of eight [...]"
  //
  //  -- https://docs.python.org/3.1/reference/lexical_analysis.html#indentation
  MotePyLexer.prototype.getIndentationCount = function(whitespace) {
    let count = 0;
    for (let i = 0; i < whitespace.length; i++) {
      if (whitespace[i] === '\t') {
        count += 8 - count % 8;
      } else {
        count++;
      }
    }
    return count;
  }

  MotePyLexer.prototype.atStartOfInput = function() {
    return this.getCharIndex() === 0;
  }
}

ASYNC: 'async';

AWAIT: 'await';

MODULE
    :   'module'
    ;

ARROW : '->';

USE
    :   'use'
    ;

CONFIG
    :   'config'
    ;

DEF : 'def';


CONST
    :   'const'
    ;

IF
    :   'if'
    ;

ELSE
    :   'else'
    ;

FOR
    :   'for'
    ;

IN
    :   'in'
    ;

INCLUDE : 'include';

VOID: 'void';
WHILE: 'while';

TRUE: 'true';
FALSE: 'false';

RANGE: 'range';

RING: 'ring';

SEMI: ';';
LP: '(';
RP: ')';
LB: '{';
RB: '}';
LS: '[';
RS: ']';
COMMA: ',';
DCOLON: '::';
COLON: ':';
PERIOD: '.';

PLUS : '+';
MINUS: '-';
MUL : '*';
DIV: '/';
MOD: '%';
POW: '**';
HPROD: '(*)';
CAT: '(.)';

LT: '<';
GT: '>';
LTE: '<=';
GTE: '>=';
EQ: '==';
NEQ: '!=';
ASSIGN: '=';

LAND: '&&';
LOR: '||';
LNOT: '!';

LSHIFT: '<<';
RSHIFT: '>>';
BAND: '&';
BOR: '|';
BNOT: '~';
BXOR: '^';

EFFECTS: '@effects';

EASSIGN: ':=';

ELIF : 'elif';

INT: 'int';
FLOAT: 'float';
BOOLEAN: 'boolean';

I8: 'int8_t';
U8: 'uint8_t';
I16: 'int16_t';
U16: 'uint16_t';
I32: 'int32_t';
U32: 'uint32_t';

RETURN: 'return';

Identifier
    :   IdentifierNondigit
        (   IdentifierNondigit
        |   Digit
        )*
    ;

fragment
IdentifierNondigit
    :   Nondigit
    |   UniversalCharacterName
    //|   // other implementation-defined characters...
    ;

fragment
Nondigit
    :   [a-zA-Z_]
    ;

fragment
Digit
    :   [0-9]
    ;

fragment
UniversalCharacterName
    :   '\\u' HexQuad
    |   '\\U' HexQuad HexQuad
    ;

fragment
HexQuad
    :   HexadecimalDigit HexadecimalDigit HexadecimalDigit HexadecimalDigit
    ;

IntegerConstant
    :   DecimalConstant IntegerSuffix?
    |   OctalConstant IntegerSuffix?
    |   HexadecimalConstant IntegerSuffix?
    |	BinaryConstant
    ;

fragment
BinaryConstant
	:	'0' [bB] [0-1]+
	;

fragment
DecimalConstant
    :   NonzeroDigit Digit*
    ;

fragment
OctalConstant
    :   '0' OctalDigit*
    ;

fragment
HexadecimalConstant
    :   HexadecimalPrefix HexadecimalDigit+
    ;

fragment
HexadecimalPrefix
    :   '0' [xX]
    ;

fragment
NonzeroDigit
    :   [1-9]
    ;

fragment
OctalDigit
    :   [0-7]
    ;

fragment
HexadecimalDigit
    :   [0-9a-fA-F]
    ;

fragment
IntegerSuffix
    :   UnsignedSuffix LongSuffix?
    |   UnsignedSuffix LongLongSuffix
    |   LongSuffix UnsignedSuffix?
    |   LongLongSuffix UnsignedSuffix?
    ;

fragment
UnsignedSuffix
    :   [uU]
    ;

fragment
LongSuffix
    :   [lL]
    ;

fragment
LongLongSuffix
    :   'll' | 'LL'
    ;

FloatingConstant
    :   DecimalFloatingConstant
    |   HexadecimalFloatingConstant
    ;

fragment
DecimalFloatingConstant
    :   FractionalConstant ExponentPart? FloatingSuffix?
    |   DigitSequence ExponentPart FloatingSuffix?
    ;

fragment
HexadecimalFloatingConstant
    :   HexadecimalPrefix HexadecimalFractionalConstant BinaryExponentPart FloatingSuffix?
    |   HexadecimalPrefix HexadecimalDigitSequence BinaryExponentPart FloatingSuffix?
    ;

fragment
FractionalConstant
    :   DigitSequence? '.' DigitSequence
    |   DigitSequence '.'
    ;

fragment
ExponentPart
    :   'e' Sign? DigitSequence
    |   'E' Sign? DigitSequence
    ;

fragment
Sign
    :   '+' | '-'
    ;

DigitSequence
    :   Digit+
    ;

fragment
HexadecimalFractionalConstant
    :   HexadecimalDigitSequence? '.' HexadecimalDigitSequence
    |   HexadecimalDigitSequence '.'
    ;

fragment
BinaryExponentPart
    :   'p' Sign? DigitSequence
    |   'P' Sign? DigitSequence
    ;

fragment
HexadecimalDigitSequence
    :   HexadecimalDigit+
    ;

fragment
FloatingSuffix
    :   'f' | 'l' | 'F' | 'L'
    ;

CharacterConstant
    :   '\'' CCharSequence '\''
    |   'L\'' CCharSequence '\''
    |   'u\'' CCharSequence '\''
    |   'U\'' CCharSequence '\''
    ;

fragment
CCharSequence
    :   CChar+
    ;

fragment
CChar
    :   ~['\\\r\n]
    |   EscapeSequence
    ;

fragment
EscapeSequence
    :   SimpleEscapeSequence
    |   OctalEscapeSequence
    |   HexadecimalEscapeSequence
    |   UniversalCharacterName
    ;

fragment
SimpleEscapeSequence
    :   '\\' ['"?abfnrtv\\]
    ;

fragment
OctalEscapeSequence
    :   '\\' OctalDigit
    |   '\\' OctalDigit OctalDigit
    |   '\\' OctalDigit OctalDigit OctalDigit
    ;

fragment
HexadecimalEscapeSequence
    :   '\\x' HexadecimalDigit+
    ;

StringLiteral
    :   EncodingPrefix? '"' SCharSequence? '"'
    ;

fragment
EncodingPrefix
    :   'u8'
    |   'u'
    |   'U'
    |   'L'
    ;

fragment
SCharSequence
    :   SChar+
    ;

fragment
SChar
    :   ~["\\\r\n]
    |   EscapeSequence
    |   '\\\n'   // Added line
    |   '\\\r\n' // Added line
    ;

fragment SPACES
 : [ \t]+
 ;

fragment COMMENT
 : '#' ~[\r\n\f]*
 ;

fragment LINE_JOINING
 : '\\' SPACES? ( '\r'? '\n' | '\r' | '\f' )
 ;

SKIP_
 : ( SPACES | COMMENT | LINE_JOINING ) -> skip
 ;

 NEWLINE
  : ( {this.atStartOfInput()}?   SPACES
    | ( '\r'? '\n' | '\r' ) SPACES?
    ) {
      let newLine = this.text.replace(/[^\r\n]+/g, '');
      let spaces = this.text.replace(/[\r\n]+/g, '');

      // Strip newlines inside open clauses except if we are near EOF. We keep NEWLINEs near EOF to
      // satisfy the final newline needed by the single_put rule used by the REPL.
      let next = this._input.LA(1);
      let nextnext = this._input.LA(2);
      if (this.opened > 0 || (nextnext != -1 /* EOF */ && (next === 13 /* '\r' */ || next === 10 /* '\n' */ || next === 35 /* '#' */))) {
        // If we're inside a list or on a blank line, ignore all indents,
        // dedents and line breaks.
        this.skip();
      } else {
        this.emitToken(this.commonToken(MotePyParser.NEWLINE, newLine));

        let indent = this.getIndentationCount(spaces);
        let previous = this.indents.length ? this.indents[this.indents.length - 1] : 0;

        if (indent === previous) {
          // skip indents of the same size as the present indent-size
          this.skip();
        } else if (indent > previous) {
          this.indents.push(indent);
          this.emitToken(this.commonToken(MotePyParser.INDENT, spaces));
        } else {
          // Possibly emit more than 1 DEDENT token.
          while (this.indents.length && this.indents[this.indents.length - 1] > indent) {
            this.emitToken(this.createDedent());
            this.indents.pop();
          }
        }
      }
    }
  ;
