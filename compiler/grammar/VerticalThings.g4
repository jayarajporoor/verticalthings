
parser grammar VerticalThings;

options {tokenVocab = VTLexer;}

module
    :   MODULE Identifier SEMI
        useSpec* varDef*
        (funcDef* | pipelineDef | effectsDef)
    ;

effectsDef: EFFECTS LB (effectStmt SEMI)* RB;    

effectStmt: effectTarget (COMMA effectCtx)* EASSIGN effectSpec (COMMA effectSpec)*;

effectTarget: qualIdentifier LP (effectParam (COMMA effectParam)*)? RP;

effectParam: ADDRESSOF? Identifier;

effectCtx: Identifier COLON Identifier;

effectSpec: Identifier effectExpr;

effectExpr: Identifier | exprConstant | StringLiteral | effectTerm ;

effectTerm: Identifier LP (effectExpr (COMMA effectExpr)*)? RP;

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

varIdDef: Identifier (ASSIGN initValue)?;

varDef
    :  CONST? varType varIdDef (COMMA varIdDef)* SEMI
    ;

dimExpr : intVal op=(PLUS|MUL) intVal;

dimValue: (IntegerConstant|Identifier|dimExpr);

dimensionSpec
    : RING? (LS dimValue RS)+
    ;

intVal: Identifier|IntegerConstant;

numVal: Identifier|numConstant;

rangeType
    : LS numVal (COMMA|COLON) numVal RS
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


addressExpr: ADDRESSOF (arrayExpr | qualIdentifier);

castExpr : castableType LP basicExpr RP;

basicExpr
    :   
        basicExpr op=POW basicExpr |
        castExpr |
        qualIdentifier |        
        arrayExpr |
        addressExpr |
        functionCall |
        exprConstant |
        up=(BNOT|MINUS) basicExpr |
        basicExpr op=(BAND|BOR|BXOR) basicExpr |
        basicExpr op=(LSHIFT|RSHIFT) basicExpr |
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

numConstant: IntegerConstant | FloatingConstant;

exprConstant: 
        numConstant
    |   CharacterConstant
    |   booleanLiteral
    ;

literal: exprConstant | arrayLiteral | StringLiteral;
