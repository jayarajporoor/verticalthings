
parser grammar VerticalThings;

options {tokenVocab = VTLexer;}

module
    :   usingSpec* includeSpec* varDef*
        funcDef*
    ;

pipelineDef
    :  PIPELINE Identifier pipelineBlock SEMI?
    ;

pipelineBlock
    :  LB pipelineList RB
    ;

pipelineEntry
    :  (qualIdentifier | functionCall | pipelineBlock);

pipelineList
    :   pipelineEntry (COMMA pipelineEntry)*  COMMA?
    ;

usingSpec
    :   USING Identifier SEMI
    ;

includeSpec
    :   INCLUDE Identifier SEMI
    ;


booleanLiteral: value=(TRUE | FALSE);

arrayLiteral
    : LB (expr (COMMA expr)*)? RB
    ;

initValue: expr | StringLiteral | arrayLiteral;

varIdDef: Identifier (ASSIGN initValue)?;

varDef
    :  CONST? STATIC? varType varIdDef (COMMA varIdDef)* SEMI
    ;

dimValue: (IntegerConstant|Identifier);

dimensionSpec
    : RING? (LS dimValue RS)+
    ;

intVal: Identifier|IntegerConstant;

numVal: Identifier|numConstant;

rangeType
    : LS numVal (COMMA|COLON) numVal RS
    ;

castableType
    : type=(INT | FLOAT | BOOLEAN | I8 | U8 | I16 | U16 | I32 | U32)
    ;

primitiveType
    : type=(INT | FLOAT | BOOLEAN | VOID | I8 | U8 | I16 | U16 | I32 | U32)
    ;

futureType: FUTURE LT varType GT;

chanType : (RCHAN | CHAN) LT Identifier GT;

varType
    :   (qualIdentifier | cppQualIdentifier | rangeType | primitiveType | futureType | chanType | tupleType) dimensionSpec? BAND?
    ;    

varTypeList
    :  varType (COMMA varType)*
    ;

tupleType : LP varTypeList RP;

returnType : varType;

formalParam
    :   CONST? varType Identifier
    ;

formalParams
    :  formalParam (COMMA formalParam)*
    ;

stmtBlock
    :
        LB stmt* RB
    ;

elseStmt
    : ELSE (stmtBlock | ifStmt)
    ;

ifStmt
    :   IF LP expr RP stmtBlock elseStmt?
    ;

identifierList 
    :   Identifier (COMMA Identifier)*
    ;

forStmt
    :   FOR identifierList IN rangeType stmtBlock
    ;

whileStmt
    :   WHILE LP expr RP stmtBlock
    ;

assignStmt  
    : ((qualIdentifier dimensionExpr?) | tupleIds) ASSIGN toplevelExpr
    ;

awaitStmt: AWAIT  qualIdentifier;

signalStmt: SIGNAL  qualIdentifier;

returnStmt: RETURN toplevelExpr;

stmt 
    :   stmtBlock | ifStmt | forStmt | whileStmt | assignStmt SEMI | functionCall SEMI | returnStmt SEMI | awaitStmt SEMI | signalStmt SEMI
    ;    

tupleIds : LP identifierList RP;


funcDef
    :  ASYNC? returnType Identifier LP formalParams? RP 
        LB varDef* stmt* RB
    ;    

qualIdentifier
    : Identifier (PERIOD Identifier)*
    ;

cppQualIdentifier
    : Identifier (DCOLON Identifier)+
    ;

functionCall
	:  (qualIdentifier|cppQualIdentifier) LP actualParams? RP
	;

actualParam
    : (Identifier ASSIGN)? (expr | StringLiteral)
    ;

actualParams
	:  actualParam (COMMA actualParam)* COMMA?
	;


dimensionExpr
    : (LS expr RS)+
    ;

arrayExpr: Identifier dimensionExpr;

addressExpr: BAND (arrayExpr | qualIdentifier);


castExpr : castableType LP basicExpr RP;

basicExpr
    :   
        basicExpr op=POW basicExpr |
        castExpr |
        qualIdentifier |        
        arrayExpr |
        addressExpr |
        functionCall |
        literal |
        up=(BNOT|MINUS) basicExpr |
        basicExpr op=(LSHIFT|RSHIFT) basicExpr |        
        basicExpr op=(BAND|BOR|BXOR) basicExpr |
        basicExpr op=CAT basicExpr |        
        basicExpr op=(HPROD | MUL|DIV|MOD) basicExpr |
        basicExpr op=(PLUS|MINUS) basicExpr |
        LP basicExpr RP
    ;

relExpr
    :   basicExpr op=(GT|GTE|LT|LTE|EQ|NEQ) basicExpr |
        LP relExpr RP
    ;   

expr
    :   
        LNOT expr |
        basicExpr |
        relExpr |
        expr op=(LOR|LAND) expr |
        LP expr RP 
    ;     


syncExpr: (AWAIT | SIGNAL) (functionCall | Identifier);

toplevelExpr: syncExpr | tupleExpr | expr;

tupleExpr : LP actualParams RP;

numConstant: IntegerConstant | FloatingConstant;

exprConstant: 
        numConstant
    |   CharacterConstant
    |   booleanLiteral
    ;

literal: exprConstant | arrayLiteral | StringLiteral;
