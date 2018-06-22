
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

varId: Identifier (ASSIGN initValue)?;

varDef
    :  CONST? varType varId (COMMA varId)* SEMI
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

castableType
    : INT | FLOAT | BOOLEAN
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

returnStmt: RETURN expr;

stmt 
    :   stmtBlock | ifStmt | forStmt | whileStmt | assignStmt SEMI | functionCall SEMI | returnStmt SEMI
    ;    
    
funcDef
    :  (varType | flowType)? Identifier LP formalParams? RP 
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


arrayExpr: Identifier dimensionSpec;


castExpr : castableType LP basicExpr RP;

basicExpr
    :   
        basicExpr op=POW basicExpr |
        castExpr |
        qualIdentifier |        
        arrayExpr |
        functionCall |
        exprConstant |
        up=(BNOT|MINUS) basicExpr |
        basicExpr op=(BAND|BOR|BXOR) basicExpr |
        basicExpr op=(LSHIFT|RSHIFT) basicExpr |        
        basicExpr op=(MUL|DIV|MOD) basicExpr |
        basicExpr op=(PLUS|MINUS) basicExpr |
        basicExpr op=(HPROD|CAT) basicExpr |
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

numConstant: IntegerConstant | FloatingConstant;

exprConstant: 
        numConstant
    |   CharacterConstant
    |   booleanLiteral
    ;

literal: exprConstant | arrayLiteral | StringLiteral;
