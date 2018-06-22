
parser grammar VerticalThings;

options {tokenVocab = VTLexer;}

module
    :   MODULE Identifier SEMI
        useSpec* varDef*
        (funcDef* | pipelineDef)
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

useSpec
    :   USE Identifier SEMI
    ;


booleanLiteral: TRUE | FALSE;

arrayLiteral
    : LB (literal (COMMA literal)*)? RB
    ;

initValue: expr | StringLiteral | arrayLiteral;

varDef
    :  CONST? varType Identifier (COMMA Identifier)* (ASSIGN initValue)? SEMI
    ;

dimExpr : intVal op=(PLUS|MUL) intVal;

dimValue: (IntegerConstant|Identifier|dimExpr);

dimensionSpec
    : RING? (LS dimValue RS)+
    ;

intVal: Identifier|IntegerConstant;

numVal: Identifier|numConstant;

rangeType
    : LS numVal (COMMA|DPERIOD) numVal RS
    ;

primitiveType
    : INT | FLOAT | BOOLEAN | VOID
    ;

varType
    :   (qualIdentifier | cppQualIdentifier | rangeType | primitiveType) dimensionSpec?
    ;    

flowType
    :   DEFAULT? FLOW
    ;

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
    : qualIdentifier dimensionSpec? ASSIGN expr
    ;

stmt 
    :   stmtBlock | ifStmt | forStmt | whileStmt | assignStmt SEMI | functionCall SEMI
    ;    
    
funcDef
    :  (varType | flowType)? Identifier LP formalParams? RP 
        varDef* stmtBlock
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


arrayExpr: Identifier dimensionSpec;

basicExpr
    :   qualIdentifier |
        arrayExpr |
        functionCall |
        exprConstant |
        basicExpr op=PLUS basicExpr |
        basicExpr op=MINUS basicExpr |
        basicExpr op=MUL basicExpr |
        basicExpr op=DIV basicExpr |
        basicExpr op=MOD basicExpr |
        basicExpr op=POW basicExpr |
        basicExpr op=LSHIFT basicExpr |
        basicExpr op=RSHIFT basicExpr |
        basicExpr op=BAND basicExpr |
        basicExpr op=BOR basicExpr |
        basicExpr op=BXOR basicExpr |
        basicExpr op=HPROD basicExpr |
        basicExpr op=CAT  basicExpr |
        up=BNOT basicExpr |
        up=MINUS basicExpr |
        LP basicExpr RP
    ;

relExpr
    :   basicExpr op=GT basicExpr |
        basicExpr op=GTE basicExpr |
        basicExpr op=LT basicExpr |
        basicExpr op=LTE basicExpr |
        basicExpr op=EQ  basicExpr |
        basicExpr op=NEQ basicExpr |
        LP relExpr RP
    ;   

expr
    :   basicExpr |
        relExpr |
        expr op=LOR expr |
        expr op=LAND expr |
        LP expr RP |
        LNOT expr
    ;     

numConstant: IntegerConstant | FloatingConstant;

exprConstant: 
        numConstant
    |   CharacterConstant
    |   booleanLiteral
    ;

literal: exprConstant | arrayLiteral | StringLiteral;
