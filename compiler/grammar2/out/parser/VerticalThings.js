// Generated from VerticalThings.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VerticalThingsListener = require('./VerticalThingsListener').VerticalThingsListener;
var VerticalThingsVisitor = require('./VerticalThingsVisitor').VerticalThingsVisitor;

var grammarFileName = "VerticalThings.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003P\u025d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0003\u0002\u0007\u0002x\n\u0002\f\u0002\u000e\u0002",
    "{\u000b\u0002\u0003\u0002\u0007\u0002~\n\u0002\f\u0002\u000e\u0002\u0081",
    "\u000b\u0002\u0003\u0002\u0007\u0002\u0084\n\u0002\f\u0002\u000e\u0002",
    "\u0087\u000b\u0002\u0003\u0002\u0007\u0002\u008a\n\u0002\f\u0002\u000e",
    "\u0002\u008d\u000b\u0002\u0003\u0002\u0005\u0002\u0090\n\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0097",
    "\n\u0003\f\u0003\u000e\u0003\u009a\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u00a1\n\u0004\f\u0004",
    "\u000e\u0004\u00a4\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004\u00aa\n\u0004\f\u0004\u000e\u0004\u00ad\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "\u00b4\n\u0005\f\u0005\u000e\u0005\u00b7\u000b\u0005\u0005\u0005\u00b9",
    "\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0005\u0006\u00be\n\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0005\b\u00c8\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0007\t\u00d0\n\t\f\t\u000e\t\u00d3\u000b\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00db\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00e2\n\u000b",
    "\f\u000b\u000e\u000b\u00e5\u000b\u000b\u0005\u000b\u00e7\n\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00ef\n\f",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00f8\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0007",
    "\u000f\u00fd\n\u000f\f\u000f\u000e\u000f\u0100\u000b\u000f\u0003\u000f",
    "\u0005\u000f\u0103\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u0113",
    "\n\u0013\f\u0013\u000e\u0013\u0116\u000b\u0013\u0005\u0013\u0118\n\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u011f\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0124",
    "\n\u0015\u0003\u0016\u0005\u0016\u0127\n\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0007\u0016\u012d\n\u0016\f\u0016\u000e\u0016",
    "\u0130\u000b\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0005\u0018\u0137\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0006\u0018\u013d\n\u0018\r\u0018\u000e\u0018\u013e\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u0145\n\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0005\u001e\u0155\n\u001e\u0003\u001e\u0005",
    "\u001e\u0158\n\u001e\u0003\u001f\u0005\u001f\u015b\n\u001f\u0003\u001f",
    "\u0003\u001f\u0003 \u0005 \u0160\n \u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0007!\u0168\n!\f!\u000e!\u016b\u000b!\u0003\"\u0003\"\u0007",
    "\"\u016f\n\"\f\"\u000e\"\u0172\u000b\"\u0003\"\u0003\"\u0003#\u0003",
    "#\u0003#\u0005#\u0179\n#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0005",
    "$\u0181\n$\u0003%\u0003%\u0003%\u0007%\u0186\n%\f%\u000e%\u0189\u000b",
    "%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0005(\u0199\n(\u0003(\u0003",
    "(\u0003(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0005*\u01ae\n*\u0003",
    "+\u0005+\u01b1\n+\u0003+\u0003+\u0003+\u0005+\u01b6\n+\u0003+\u0003",
    "+\u0003+\u0007+\u01bb\n+\f+\u000e+\u01be\u000b+\u0003+\u0007+\u01c1",
    "\n+\f+\u000e+\u01c4\u000b+\u0003+\u0003+\u0003,\u0003,\u0003,\u0007",
    ",\u01cb\n,\f,\u000e,\u01ce\u000b,\u0003-\u0003-\u0003-\u0006-\u01d3",
    "\n-\r-\u000e-\u01d4\u0003.\u0003.\u0005.\u01d9\n.\u0003.\u0003.\u0005",
    ".\u01dd\n.\u0003.\u0003.\u0003/\u0003/\u0005/\u01e3\n/\u0003/\u0003",
    "/\u0005/\u01e7\n/\u00030\u00030\u00030\u00070\u01ec\n0\f0\u000e0\u01ef",
    "\u000b0\u00030\u00050\u01f2\n0\u00031\u00031\u00031\u00031\u00061\u01f8",
    "\n1\r1\u000e1\u01f9\u00032\u00032\u00032\u00033\u00033\u00033\u0005",
    "3\u0202\n3\u00034\u00034\u00034\u00034\u00034\u00035\u00035\u00035\u0003",
    "5\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u0005",
    "5\u0216\n5\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u0003",
    "5\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u0007",
    "5\u022a\n5\f5\u000e5\u022d\u000b5\u00036\u00036\u00036\u00036\u0003",
    "6\u00036\u00036\u00036\u00056\u0237\n6\u00037\u00037\u00037\u00037\u0003",
    "7\u00037\u00037\u00037\u00037\u00057\u0242\n7\u00037\u00037\u00037\u0007",
    "7\u0247\n7\f7\u000e7\u024a\u000b7\u00038\u00058\u024d\n8\u00038\u0003",
    "8\u00039\u00039\u0003:\u0003:\u0003:\u0005:\u0256\n:\u0003;\u0003;\u0003",
    ";\u0005;\u025b\n;\u0003;\u0002\u0004hl<\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJLNPRTVXZ\\^`bdfhjlnprt\u0002\u000f\u0003\u0002\u0015\u0016\u0003",
    "\u0002GH\u0004\u0002\u001f\u001f!!\u0003\u0002=E\u0004\u0002\u0013\u0013",
    "=E\u0004\u0002$$99\u0003\u000256\u0004\u000278::\u0004\u0002%\'))\u0003",
    "\u0002#$\u0003\u0002+0\u0003\u000223\u0003\u0002HI\u027a\u0002y\u0003",
    "\u0002\u0002\u0002\u0004\u0091\u0003\u0002\u0002\u0002\u0006\u009d\u0003",
    "\u0002\u0002\u0002\b\u00ae\u0003\u0002\u0002\u0002\n\u00bd\u0003\u0002",
    "\u0002\u0002\f\u00c1\u0003\u0002\u0002\u0002\u000e\u00c5\u0003\u0002",
    "\u0002\u0002\u0010\u00cb\u0003\u0002\u0002\u0002\u0012\u00da\u0003\u0002",
    "\u0002\u0002\u0014\u00dc\u0003\u0002\u0002\u0002\u0016\u00ea\u0003\u0002",
    "\u0002\u0002\u0018\u00f0\u0003\u0002\u0002\u0002\u001a\u00f7\u0003\u0002",
    "\u0002\u0002\u001c\u00f9\u0003\u0002\u0002\u0002\u001e\u0104\u0003\u0002",
    "\u0002\u0002 \u0108\u0003\u0002\u0002\u0002\"\u010c\u0003\u0002\u0002",
    "\u0002$\u010e\u0003\u0002\u0002\u0002&\u011e\u0003\u0002\u0002\u0002",
    "(\u0120\u0003\u0002\u0002\u0002*\u0126\u0003\u0002\u0002\u0002,\u0133",
    "\u0003\u0002\u0002\u0002.\u0136\u0003\u0002\u0002\u00020\u0140\u0003",
    "\u0002\u0002\u00022\u0144\u0003\u0002\u0002\u00024\u0146\u0003\u0002",
    "\u0002\u00026\u014c\u0003\u0002\u0002\u00028\u014e\u0003\u0002\u0002",
    "\u0002:\u0154\u0003\u0002\u0002\u0002<\u015a\u0003\u0002\u0002\u0002",
    ">\u015f\u0003\u0002\u0002\u0002@\u0164\u0003\u0002\u0002\u0002B\u016c",
    "\u0003\u0002\u0002\u0002D\u0175\u0003\u0002\u0002\u0002F\u017a\u0003",
    "\u0002\u0002\u0002H\u0182\u0003\u0002\u0002\u0002J\u018a\u0003\u0002",
    "\u0002\u0002L\u0190\u0003\u0002\u0002\u0002N\u0196\u0003\u0002\u0002",
    "\u0002P\u019d\u0003\u0002\u0002\u0002R\u01ad\u0003\u0002\u0002\u0002",
    "T\u01b0\u0003\u0002\u0002\u0002V\u01c7\u0003\u0002\u0002\u0002X\u01cf",
    "\u0003\u0002\u0002\u0002Z\u01d8\u0003\u0002\u0002\u0002\\\u01e2\u0003",
    "\u0002\u0002\u0002^\u01e8\u0003\u0002\u0002\u0002`\u01f7\u0003\u0002",
    "\u0002\u0002b\u01fb\u0003\u0002\u0002\u0002d\u01fe\u0003\u0002\u0002",
    "\u0002f\u0203\u0003\u0002\u0002\u0002h\u0215\u0003\u0002\u0002\u0002",
    "j\u0236\u0003\u0002\u0002\u0002l\u0241\u0003\u0002\u0002\u0002n\u024c",
    "\u0003\u0002\u0002\u0002p\u0250\u0003\u0002\u0002\u0002r\u0255\u0003",
    "\u0002\u0002\u0002t\u025a\u0003\u0002\u0002\u0002vx\u0005\u001e\u0010",
    "\u0002wv\u0003\u0002\u0002\u0002x{\u0003\u0002\u0002\u0002yw\u0003\u0002",
    "\u0002\u0002yz\u0003\u0002\u0002\u0002z\u007f\u0003\u0002\u0002\u0002",
    "{y\u0003\u0002\u0002\u0002|~\u0005 \u0011\u0002}|\u0003\u0002\u0002",
    "\u0002~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002",
    "\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0085\u0003\u0002\u0002\u0002",
    "\u0081\u007f\u0003\u0002\u0002\u0002\u0082\u0084\u0005*\u0016\u0002",
    "\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002\u0002",
    "\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002",
    "\u0086\u008f\u0003\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002",
    "\u0088\u008a\u0005T+\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a",
    "\u008d\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0003\u0002\u0002\u0002\u008c\u0090\u0003\u0002\u0002\u0002\u008d",
    "\u008b\u0003\u0002\u0002\u0002\u008e\u0090\u0005\u0004\u0003\u0002\u008f",
    "\u008b\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090",
    "\u0003\u0003\u0002\u0002\u0002\u0091\u0092\u0007;\u0002\u0002\u0092",
    "\u0098\u0007\u001b\u0002\u0002\u0093\u0094\u0005\u0006\u0004\u0002\u0094",
    "\u0095\u0007\u0018\u0002\u0002\u0095\u0097\u0003\u0002\u0002\u0002\u0096",
    "\u0093\u0003\u0002\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u009b\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b",
    "\u009c\u0007\u001c\u0002\u0002\u009c\u0005\u0003\u0002\u0002\u0002\u009d",
    "\u00a2\u0005\b\u0005\u0002\u009e\u009f\u0007\u001f\u0002\u0002\u009f",
    "\u00a1\u0005\f\u0007\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1",
    "\u00a4\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a5\u0003\u0002\u0002\u0002\u00a4",
    "\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007<\u0002\u0002\u00a6",
    "\u00ab\u0005\u000e\b\u0002\u00a7\u00a8\u0007\u001f\u0002\u0002\u00a8",
    "\u00aa\u0005\u000e\b\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa",
    "\u00ad\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0003\u0002\u0002\u0002\u00ac\u0007\u0003\u0002\u0002\u0002\u00ad",
    "\u00ab\u0003\u0002\u0002\u0002\u00ae\u00af\u0005V,\u0002\u00af\u00b8",
    "\u0007\u0019\u0002\u0002\u00b0\u00b5\u0005\n\u0006\u0002\u00b1\u00b2",
    "\u0007\u001f\u0002\u0002\u00b2\u00b4\u0005\n\u0006\u0002\u00b3\u00b1",
    "\u0003\u0002\u0002\u0002\u00b4\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b9",
    "\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b0",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u001a\u0002\u0002\u00bb\t",
    "\u0003\u0002\u0002\u0002\u00bc\u00be\u00077\u0002\u0002\u00bd\u00bc",
    "\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00bf",
    "\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007G\u0002\u0002\u00c0\u000b",
    "\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007G\u0002\u0002\u00c2\u00c3",
    "\u0007!\u0002\u0002\u00c3\u00c4\u0007G\u0002\u0002\u00c4\r\u0003\u0002",
    "\u0002\u0002\u00c5\u00c7\u0007G\u0002\u0002\u00c6\u00c8\u0005\u0010",
    "\t\u0002\u00c7\u00c6\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0005\u0012",
    "\n\u0002\u00ca\u000f\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\u001d",
    "\u0002\u0002\u00cc\u00d1\u0007G\u0002\u0002\u00cd\u00ce\u0007\u001f",
    "\u0002\u0002\u00ce\u00d0\u0007G\u0002\u0002\u00cf\u00cd\u0003\u0002",
    "\u0002\u0002\u00d0\u00d3\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d4\u0003\u0002",
    "\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007\u001e",
    "\u0002\u0002\u00d5\u0011\u0003\u0002\u0002\u0002\u00d6\u00db\u0007G",
    "\u0002\u0002\u00d7\u00db\u0005r:\u0002\u00d8\u00db\u0007L\u0002\u0002",
    "\u00d9\u00db\u0005\u0014\u000b\u0002\u00da\u00d6\u0003\u0002\u0002\u0002",
    "\u00da\u00d7\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002",
    "\u00da\u00d9\u0003\u0002\u0002\u0002\u00db\u0013\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\u0007G\u0002\u0002\u00dd\u00e6\u0007\u0019\u0002\u0002",
    "\u00de\u00e3\u0005\u0012\n\u0002\u00df\u00e0\u0007\u001f\u0002\u0002",
    "\u00e0\u00e2\u0005\u0012\n\u0002\u00e1\u00df\u0003\u0002\u0002\u0002",
    "\u00e2\u00e5\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002",
    "\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6\u00de\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002",
    "\u00e8\u00e9\u0007\u001a\u0002\u0002\u00e9\u0015\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0007\b\u0002\u0002\u00eb\u00ec\u0007G\u0002\u0002\u00ec",
    "\u00ee\u0005\u0018\r\u0002\u00ed\u00ef\u0007\u0018\u0002\u0002\u00ee",
    "\u00ed\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef",
    "\u0017\u0003\u0002\u0002\u0002\u00f0\u00f1\u0007\u001b\u0002\u0002\u00f1",
    "\u00f2\u0005\u001c\u000f\u0002\u00f2\u00f3\u0007\u001c\u0002\u0002\u00f3",
    "\u0019\u0003\u0002\u0002\u0002\u00f4\u00f8\u0005V,\u0002\u00f5\u00f8",
    "\u0005Z.\u0002\u00f6\u00f8\u0005\u0018\r\u0002\u00f7\u00f4\u0003\u0002",
    "\u0002\u0002\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f6\u0003\u0002",
    "\u0002\u0002\u00f8\u001b\u0003\u0002\u0002\u0002\u00f9\u00fe\u0005\u001a",
    "\u000e\u0002\u00fa\u00fb\u0007\u001f\u0002\u0002\u00fb\u00fd\u0005\u001a",
    "\u000e\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fd\u0100\u0003\u0002",
    "\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002",
    "\u0002\u0002\u00ff\u0102\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002",
    "\u0002\u0002\u0101\u0103\u0007\u001f\u0002\u0002\u0102\u0101\u0003\u0002",
    "\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u001d\u0003\u0002",
    "\u0002\u0002\u0104\u0105\u0007\n\u0002\u0002\u0105\u0106\u0007G\u0002",
    "\u0002\u0106\u0107\u0007\u0018\u0002\u0002\u0107\u001f\u0003\u0002\u0002",
    "\u0002\u0108\u0109\u0007\u0012\u0002\u0002\u0109\u010a\u0007G\u0002",
    "\u0002\u010a\u010b\u0007\u0018\u0002\u0002\u010b!\u0003\u0002\u0002",
    "\u0002\u010c\u010d\t\u0002\u0002\u0002\u010d#\u0003\u0002\u0002\u0002",
    "\u010e\u0117\u0007\u001b\u0002\u0002\u010f\u0114\u0005l7\u0002\u0110",
    "\u0111\u0007\u001f\u0002\u0002\u0111\u0113\u0005l7\u0002\u0112\u0110",
    "\u0003\u0002\u0002\u0002\u0113\u0116\u0003\u0002\u0002\u0002\u0114\u0112",
    "\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0118",
    "\u0003\u0002\u0002\u0002\u0116\u0114\u0003\u0002\u0002\u0002\u0117\u010f",
    "\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0119",
    "\u0003\u0002\u0002\u0002\u0119\u011a\u0007\u001c\u0002\u0002\u011a%",
    "\u0003\u0002\u0002\u0002\u011b\u011f\u0005l7\u0002\u011c\u011f\u0007",
    "L\u0002\u0002\u011d\u011f\u0005$\u0013\u0002\u011e\u011b\u0003\u0002",
    "\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011e\u011d\u0003\u0002",
    "\u0002\u0002\u011f\'\u0003\u0002\u0002\u0002\u0120\u0123\u0007G\u0002",
    "\u0002\u0121\u0122\u00071\u0002\u0002\u0122\u0124\u0005&\u0014\u0002",
    "\u0123\u0121\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002",
    "\u0124)\u0003\u0002\u0002\u0002\u0125\u0127\u0007\r\u0002\u0002\u0126",
    "\u0125\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127",
    "\u0128\u0003\u0002\u0002\u0002\u0128\u0129\u0005:\u001e\u0002\u0129",
    "\u012e\u0005(\u0015\u0002\u012a\u012b\u0007\u001f\u0002\u0002\u012b",
    "\u012d\u0005(\u0015\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012d",
    "\u0130\u0003\u0002\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002\u012e",
    "\u012f\u0003\u0002\u0002\u0002\u012f\u0131\u0003\u0002\u0002\u0002\u0130",
    "\u012e\u0003\u0002\u0002\u0002\u0131\u0132\u0007\u0018\u0002\u0002\u0132",
    "+\u0003\u0002\u0002\u0002\u0133\u0134\t\u0003\u0002\u0002\u0134-\u0003",
    "\u0002\u0002\u0002\u0135\u0137\u0007\u0017\u0002\u0002\u0136\u0135\u0003",
    "\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u013c\u0003",
    "\u0002\u0002\u0002\u0138\u0139\u0007\u001d\u0002\u0002\u0139\u013a\u0005",
    ",\u0017\u0002\u013a\u013b\u0007\u001e\u0002\u0002\u013b\u013d\u0003",
    "\u0002\u0002\u0002\u013c\u0138\u0003\u0002\u0002\u0002\u013d\u013e\u0003",
    "\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013e\u013f\u0003",
    "\u0002\u0002\u0002\u013f/\u0003\u0002\u0002\u0002\u0140\u0141\t\u0003",
    "\u0002\u0002\u01411\u0003\u0002\u0002\u0002\u0142\u0145\u0007G\u0002",
    "\u0002\u0143\u0145\u0005p9\u0002\u0144\u0142\u0003\u0002\u0002\u0002",
    "\u0144\u0143\u0003\u0002\u0002\u0002\u01453\u0003\u0002\u0002\u0002",
    "\u0146\u0147\u0007\u001d\u0002\u0002\u0147\u0148\u00052\u001a\u0002",
    "\u0148\u0149\t\u0004\u0002\u0002\u0149\u014a\u00052\u001a\u0002\u014a",
    "\u014b\u0007\u001e\u0002\u0002\u014b5\u0003\u0002\u0002\u0002\u014c",
    "\u014d\t\u0005\u0002\u0002\u014d7\u0003\u0002\u0002\u0002\u014e\u014f",
    "\t\u0006\u0002\u0002\u014f9\u0003\u0002\u0002\u0002\u0150\u0155\u0005",
    "V,\u0002\u0151\u0155\u0005X-\u0002\u0152\u0155\u00054\u001b\u0002\u0153",
    "\u0155\u00058\u001d\u0002\u0154\u0150\u0003\u0002\u0002\u0002\u0154",
    "\u0151\u0003\u0002\u0002\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0154",
    "\u0153\u0003\u0002\u0002\u0002\u0155\u0157\u0003\u0002\u0002\u0002\u0156",
    "\u0158\u0005.\u0018\u0002\u0157\u0156\u0003\u0002\u0002\u0002\u0157",
    "\u0158\u0003\u0002\u0002\u0002\u0158;\u0003\u0002\u0002\u0002\u0159",
    "\u015b\u0007\f\u0002\u0002\u015a\u0159\u0003\u0002\u0002\u0002\u015a",
    "\u015b\u0003\u0002\u0002\u0002\u015b\u015c\u0003\u0002\u0002\u0002\u015c",
    "\u015d\u0007\t\u0002\u0002\u015d=\u0003\u0002\u0002\u0002\u015e\u0160",
    "\u0007\r\u0002\u0002\u015f\u015e\u0003\u0002\u0002\u0002\u015f\u0160",
    "\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0162",
    "\u0005:\u001e\u0002\u0162\u0163\u0007G\u0002\u0002\u0163?\u0003\u0002",
    "\u0002\u0002\u0164\u0169\u0005> \u0002\u0165\u0166\u0007\u001f\u0002",
    "\u0002\u0166\u0168\u0005> \u0002\u0167\u0165\u0003\u0002\u0002\u0002",
    "\u0168\u016b\u0003\u0002\u0002\u0002\u0169\u0167\u0003\u0002\u0002\u0002",
    "\u0169\u016a\u0003\u0002\u0002\u0002\u016aA\u0003\u0002\u0002\u0002",
    "\u016b\u0169\u0003\u0002\u0002\u0002\u016c\u0170\u0007\u001b\u0002\u0002",
    "\u016d\u016f\u0005R*\u0002\u016e\u016d\u0003\u0002\u0002\u0002\u016f",
    "\u0172\u0003\u0002\u0002\u0002\u0170\u016e\u0003\u0002\u0002\u0002\u0170",
    "\u0171\u0003\u0002\u0002\u0002\u0171\u0173\u0003\u0002\u0002\u0002\u0172",
    "\u0170\u0003\u0002\u0002\u0002\u0173\u0174\u0007\u001c\u0002\u0002\u0174",
    "C\u0003\u0002\u0002\u0002\u0175\u0178\u0007\u000f\u0002\u0002\u0176",
    "\u0179\u0005B\"\u0002\u0177\u0179\u0005F$\u0002\u0178\u0176\u0003\u0002",
    "\u0002\u0002\u0178\u0177\u0003\u0002\u0002\u0002\u0179E\u0003\u0002",
    "\u0002\u0002\u017a\u017b\u0007\u000e\u0002\u0002\u017b\u017c\u0007\u0019",
    "\u0002\u0002\u017c\u017d\u0005l7\u0002\u017d\u017e\u0007\u001a\u0002",
    "\u0002\u017e\u0180\u0005B\"\u0002\u017f\u0181\u0005D#\u0002\u0180\u017f",
    "\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002\u0002\u0002\u0181G",
    "\u0003\u0002\u0002\u0002\u0182\u0187\u0007G\u0002\u0002\u0183\u0184",
    "\u0007\u001f\u0002\u0002\u0184\u0186\u0007G\u0002\u0002\u0185\u0183",
    "\u0003\u0002\u0002\u0002\u0186\u0189\u0003\u0002\u0002\u0002\u0187\u0185",
    "\u0003\u0002\u0002\u0002\u0187\u0188\u0003\u0002\u0002\u0002\u0188I",
    "\u0003\u0002\u0002\u0002\u0189\u0187\u0003\u0002\u0002\u0002\u018a\u018b",
    "\u0007\u0010\u0002\u0002\u018b\u018c\u0005H%\u0002\u018c\u018d\u0007",
    "\u0011\u0002\u0002\u018d\u018e\u00054\u001b\u0002\u018e\u018f\u0005",
    "B\"\u0002\u018fK\u0003\u0002\u0002\u0002\u0190\u0191\u0007\u0014\u0002",
    "\u0002\u0191\u0192\u0007\u0019\u0002\u0002\u0192\u0193\u0005l7\u0002",
    "\u0193\u0194\u0007\u001a\u0002\u0002\u0194\u0195\u0005B\"\u0002\u0195",
    "M\u0003\u0002\u0002\u0002\u0196\u0198\u0005V,\u0002\u0197\u0199\u0005",
    "`1\u0002\u0198\u0197\u0003\u0002\u0002\u0002\u0198\u0199\u0003\u0002",
    "\u0002\u0002\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u019b\u00071",
    "\u0002\u0002\u019b\u019c\u0005n8\u0002\u019cO\u0003\u0002\u0002\u0002",
    "\u019d\u019e\u0007F\u0002\u0002\u019e\u019f\u0005l7\u0002\u019fQ\u0003",
    "\u0002\u0002\u0002\u01a0\u01ae\u0005B\"\u0002\u01a1\u01ae\u0005F$\u0002",
    "\u01a2\u01ae\u0005J&\u0002\u01a3\u01ae\u0005L\'\u0002\u01a4\u01a5\u0005",
    "N(\u0002\u01a5\u01a6\u0007\u0018\u0002\u0002\u01a6\u01ae\u0003\u0002",
    "\u0002\u0002\u01a7\u01a8\u0005Z.\u0002\u01a8\u01a9\u0007\u0018\u0002",
    "\u0002\u01a9\u01ae\u0003\u0002\u0002\u0002\u01aa\u01ab\u0005P)\u0002",
    "\u01ab\u01ac\u0007\u0018\u0002\u0002\u01ac\u01ae\u0003\u0002\u0002\u0002",
    "\u01ad\u01a0\u0003\u0002\u0002\u0002\u01ad\u01a1\u0003\u0002\u0002\u0002",
    "\u01ad\u01a2\u0003\u0002\u0002\u0002\u01ad\u01a3\u0003\u0002\u0002\u0002",
    "\u01ad\u01a4\u0003\u0002\u0002\u0002\u01ad\u01a7\u0003\u0002\u0002\u0002",
    "\u01ad\u01aa\u0003\u0002\u0002\u0002\u01aeS\u0003\u0002\u0002\u0002",
    "\u01af\u01b1\u0007\u0003\u0002\u0002\u01b0\u01af\u0003\u0002\u0002\u0002",
    "\u01b0\u01b1\u0003\u0002\u0002\u0002\u01b1\u01b2\u0003\u0002\u0002\u0002",
    "\u01b2\u01b3\u0007G\u0002\u0002\u01b3\u01b5\u0007\u0019\u0002\u0002",
    "\u01b4\u01b6\u0005@!\u0002\u01b5\u01b4\u0003\u0002\u0002\u0002\u01b5",
    "\u01b6\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003\u0002\u0002\u0002\u01b7",
    "\u01b8\u0007\u001a\u0002\u0002\u01b8\u01bc\u0007\u001b\u0002\u0002\u01b9",
    "\u01bb\u0005*\u0016\u0002\u01ba\u01b9\u0003\u0002\u0002\u0002\u01bb",
    "\u01be\u0003\u0002\u0002\u0002\u01bc\u01ba\u0003\u0002\u0002\u0002\u01bc",
    "\u01bd\u0003\u0002\u0002\u0002\u01bd\u01c2\u0003\u0002\u0002\u0002\u01be",
    "\u01bc\u0003\u0002\u0002\u0002\u01bf\u01c1\u0005R*\u0002\u01c0\u01bf",
    "\u0003\u0002\u0002\u0002\u01c1\u01c4\u0003\u0002\u0002\u0002\u01c2\u01c0",
    "\u0003\u0002\u0002\u0002\u01c2\u01c3\u0003\u0002\u0002\u0002\u01c3\u01c5",
    "\u0003\u0002\u0002\u0002\u01c4\u01c2\u0003\u0002\u0002\u0002\u01c5\u01c6",
    "\u0007\u001c\u0002\u0002\u01c6U\u0003\u0002\u0002\u0002\u01c7\u01cc",
    "\u0007G\u0002\u0002\u01c8\u01c9\u0007\"\u0002\u0002\u01c9\u01cb\u0007",
    "G\u0002\u0002\u01ca\u01c8\u0003\u0002\u0002\u0002\u01cb\u01ce\u0003",
    "\u0002\u0002\u0002\u01cc\u01ca\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003",
    "\u0002\u0002\u0002\u01cdW\u0003\u0002\u0002\u0002\u01ce\u01cc\u0003",
    "\u0002\u0002\u0002\u01cf\u01d2\u0007G\u0002\u0002\u01d0\u01d1\u0007",
    " \u0002\u0002\u01d1\u01d3\u0007G\u0002\u0002\u01d2\u01d0\u0003\u0002",
    "\u0002\u0002\u01d3\u01d4\u0003\u0002\u0002\u0002\u01d4\u01d2\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d5Y\u0003\u0002",
    "\u0002\u0002\u01d6\u01d9\u0005V,\u0002\u01d7\u01d9\u0005X-\u0002\u01d8",
    "\u01d6\u0003\u0002\u0002\u0002\u01d8\u01d7\u0003\u0002\u0002\u0002\u01d9",
    "\u01da\u0003\u0002\u0002\u0002\u01da\u01dc\u0007\u0019\u0002\u0002\u01db",
    "\u01dd\u0005^0\u0002\u01dc\u01db\u0003\u0002\u0002\u0002\u01dc\u01dd",
    "\u0003\u0002\u0002\u0002\u01dd\u01de\u0003\u0002\u0002\u0002\u01de\u01df",
    "\u0007\u001a\u0002\u0002\u01df[\u0003\u0002\u0002\u0002\u01e0\u01e1",
    "\u0007G\u0002\u0002\u01e1\u01e3\u00071\u0002\u0002\u01e2\u01e0\u0003",
    "\u0002\u0002\u0002\u01e2\u01e3\u0003\u0002\u0002\u0002\u01e3\u01e6\u0003",
    "\u0002\u0002\u0002\u01e4\u01e7\u0005l7\u0002\u01e5\u01e7\u0007L\u0002",
    "\u0002\u01e6\u01e4\u0003\u0002\u0002\u0002\u01e6\u01e5\u0003\u0002\u0002",
    "\u0002\u01e7]\u0003\u0002\u0002\u0002\u01e8\u01ed\u0005\\/\u0002\u01e9",
    "\u01ea\u0007\u001f\u0002\u0002\u01ea\u01ec\u0005\\/\u0002\u01eb\u01e9",
    "\u0003\u0002\u0002\u0002\u01ec\u01ef\u0003\u0002\u0002\u0002\u01ed\u01eb",
    "\u0003\u0002\u0002\u0002\u01ed\u01ee\u0003\u0002\u0002\u0002\u01ee\u01f1",
    "\u0003\u0002\u0002\u0002\u01ef\u01ed\u0003\u0002\u0002\u0002\u01f0\u01f2",
    "\u0007\u001f\u0002\u0002\u01f1\u01f0\u0003\u0002\u0002\u0002\u01f1\u01f2",
    "\u0003\u0002\u0002\u0002\u01f2_\u0003\u0002\u0002\u0002\u01f3\u01f4",
    "\u0007\u001d\u0002\u0002\u01f4\u01f5\u0005l7\u0002\u01f5\u01f6\u0007",
    "\u001e\u0002\u0002\u01f6\u01f8\u0003\u0002\u0002\u0002\u01f7\u01f3\u0003",
    "\u0002\u0002\u0002\u01f8\u01f9\u0003\u0002\u0002\u0002\u01f9\u01f7\u0003",
    "\u0002\u0002\u0002\u01f9\u01fa\u0003\u0002\u0002\u0002\u01faa\u0003",
    "\u0002\u0002\u0002\u01fb\u01fc\u0007G\u0002\u0002\u01fc\u01fd\u0005",
    "`1\u0002\u01fdc\u0003\u0002\u0002\u0002\u01fe\u0201\u00077\u0002\u0002",
    "\u01ff\u0202\u0005b2\u0002\u0200\u0202\u0005V,\u0002\u0201\u01ff\u0003",
    "\u0002\u0002\u0002\u0201\u0200\u0003\u0002\u0002\u0002\u0202e\u0003",
    "\u0002\u0002\u0002\u0203\u0204\u00056\u001c\u0002\u0204\u0205\u0007",
    "\u0019\u0002\u0002\u0205\u0206\u0005h5\u0002\u0206\u0207\u0007\u001a",
    "\u0002\u0002\u0207g\u0003\u0002\u0002\u0002\u0208\u0209\b5\u0001\u0002",
    "\u0209\u020a\t\u0007\u0002\u0002\u020a\u0216\u0005h5\t\u020b\u0216\u0005",
    "f4\u0002\u020c\u0216\u0005V,\u0002\u020d\u0216\u0005b2\u0002\u020e\u0216",
    "\u0005d3\u0002\u020f\u0216\u0005Z.\u0002\u0210\u0216\u0005t;\u0002\u0211",
    "\u0212\u0007\u0019\u0002\u0002\u0212\u0213\u0005h5\u0002\u0213\u0214",
    "\u0007\u001a\u0002\u0002\u0214\u0216\u0003\u0002\u0002\u0002\u0215\u0208",
    "\u0003\u0002\u0002\u0002\u0215\u020b\u0003\u0002\u0002\u0002\u0215\u020c",
    "\u0003\u0002\u0002\u0002\u0215\u020d\u0003\u0002\u0002\u0002\u0215\u020e",
    "\u0003\u0002\u0002\u0002\u0215\u020f\u0003\u0002\u0002\u0002\u0215\u0210",
    "\u0003\u0002\u0002\u0002\u0215\u0211\u0003\u0002\u0002\u0002\u0216\u022b",
    "\u0003\u0002\u0002\u0002\u0217\u0218\f\u0010\u0002\u0002\u0218\u0219",
    "\u0007(\u0002\u0002\u0219\u022a\u0005h5\u0011\u021a\u021b\f\b\u0002",
    "\u0002\u021b\u021c\t\b\u0002\u0002\u021c\u022a\u0005h5\t\u021d\u021e",
    "\f\u0007\u0002\u0002\u021e\u021f\t\t\u0002\u0002\u021f\u022a\u0005h",
    "5\b\u0220\u0221\f\u0006\u0002\u0002\u0221\u0222\u0007*\u0002\u0002\u0222",
    "\u022a\u0005h5\u0007\u0223\u0224\f\u0005\u0002\u0002\u0224\u0225\t\n",
    "\u0002\u0002\u0225\u022a\u0005h5\u0006\u0226\u0227\f\u0004\u0002\u0002",
    "\u0227\u0228\t\u000b\u0002\u0002\u0228\u022a\u0005h5\u0005\u0229\u0217",
    "\u0003\u0002\u0002\u0002\u0229\u021a\u0003\u0002\u0002\u0002\u0229\u021d",
    "\u0003\u0002\u0002\u0002\u0229\u0220\u0003\u0002\u0002\u0002\u0229\u0223",
    "\u0003\u0002\u0002\u0002\u0229\u0226\u0003\u0002\u0002\u0002\u022a\u022d",
    "\u0003\u0002\u0002\u0002\u022b\u0229\u0003\u0002\u0002\u0002\u022b\u022c",
    "\u0003\u0002\u0002\u0002\u022ci\u0003\u0002\u0002\u0002\u022d\u022b",
    "\u0003\u0002\u0002\u0002\u022e\u022f\u0005h5\u0002\u022f\u0230\t\f\u0002",
    "\u0002\u0230\u0231\u0005h5\u0002\u0231\u0237\u0003\u0002\u0002\u0002",
    "\u0232\u0233\u0007\u0019\u0002\u0002\u0233\u0234\u0005j6\u0002\u0234",
    "\u0235\u0007\u001a\u0002\u0002\u0235\u0237\u0003\u0002\u0002\u0002\u0236",
    "\u022e\u0003\u0002\u0002\u0002\u0236\u0232\u0003\u0002\u0002\u0002\u0237",
    "k\u0003\u0002\u0002\u0002\u0238\u0239\b7\u0001\u0002\u0239\u023a\u0007",
    "4\u0002\u0002\u023a\u0242\u0005l7\u0007\u023b\u0242\u0005h5\u0002\u023c",
    "\u0242\u0005j6\u0002\u023d\u023e\u0007\u0019\u0002\u0002\u023e\u023f",
    "\u0005l7\u0002\u023f\u0240\u0007\u001a\u0002\u0002\u0240\u0242\u0003",
    "\u0002\u0002\u0002\u0241\u0238\u0003\u0002\u0002\u0002\u0241\u023b\u0003",
    "\u0002\u0002\u0002\u0241\u023c\u0003\u0002\u0002\u0002\u0241\u023d\u0003",
    "\u0002\u0002\u0002\u0242\u0248\u0003\u0002\u0002\u0002\u0243\u0244\f",
    "\u0004\u0002\u0002\u0244\u0245\t\r\u0002\u0002\u0245\u0247\u0005l7\u0005",
    "\u0246\u0243\u0003\u0002\u0002\u0002\u0247\u024a\u0003\u0002\u0002\u0002",
    "\u0248\u0246\u0003\u0002\u0002\u0002\u0248\u0249\u0003\u0002\u0002\u0002",
    "\u0249m\u0003\u0002\u0002\u0002\u024a\u0248\u0003\u0002\u0002\u0002",
    "\u024b\u024d\u0007\u0004\u0002\u0002\u024c\u024b\u0003\u0002\u0002\u0002",
    "\u024c\u024d\u0003\u0002\u0002\u0002\u024d\u024e\u0003\u0002\u0002\u0002",
    "\u024e\u024f\u0005l7\u0002\u024fo\u0003\u0002\u0002\u0002\u0250\u0251",
    "\t\u000e\u0002\u0002\u0251q\u0003\u0002\u0002\u0002\u0252\u0256\u0005",
    "p9\u0002\u0253\u0256\u0007K\u0002\u0002\u0254\u0256\u0005\"\u0012\u0002",
    "\u0255\u0252\u0003\u0002\u0002\u0002\u0255\u0253\u0003\u0002\u0002\u0002",
    "\u0255\u0254\u0003\u0002\u0002\u0002\u0256s\u0003\u0002\u0002\u0002",
    "\u0257\u025b\u0005r:\u0002\u0258\u025b\u0005$\u0013\u0002\u0259\u025b",
    "\u0007L\u0002\u0002\u025a\u0257\u0003\u0002\u0002\u0002\u025a\u0258",
    "\u0003\u0002\u0002\u0002\u025a\u0259\u0003\u0002\u0002\u0002\u025bu",
    "\u0003\u0002\u0002\u0002Ay\u007f\u0085\u008b\u008f\u0098\u00a2\u00ab",
    "\u00b5\u00b8\u00bd\u00c7\u00d1\u00da\u00e3\u00e6\u00ee\u00f7\u00fe\u0102",
    "\u0114\u0117\u011e\u0123\u0126\u012e\u0136\u013e\u0144\u0154\u0157\u015a",
    "\u015f\u0169\u0170\u0178\u0180\u0187\u0198\u01ad\u01b0\u01b5\u01bc\u01c2",
    "\u01cc\u01d4\u01d8\u01dc\u01e2\u01e6\u01ed\u01f1\u01f9\u0201\u0215\u0229",
    "\u022b\u0236\u0241\u0248\u024c\u0255\u025a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'async'", "'await'", "'future'", "'semaphore'", 
                     "'module'", "'pipeline'", "'flow'", "'use'", "'config'", 
                     "'default'", "'const'", "'if'", "'else'", "'for'", 
                     "'in'", "'include'", "'void'", "'while'", "'true'", 
                     "'false'", "'ring'", "';'", "'('", "')'", "'{'", "'}'", 
                     "'['", "']'", "','", "'::'", "':'", "'.'", "'+'", "'-'", 
                     "'*'", "'/'", "'%'", "'**'", "'(*)'", "'(.)'", "'<'", 
                     "'>'", "'<='", "'>='", "'=='", "'!='", "'='", "'&&'", 
                     "'||'", "'!'", "'<<'", "'>>'", "'&'", "'|'", "'~'", 
                     "'^'", "'@effects'", "':='", "'int'", "'float'", "'boolean'", 
                     "'int8_t'", "'uint8_t'", "'int16_t'", "'uint16_t'", 
                     "'int32_t'", "'uint32_t'", "'return'" ];

var symbolicNames = [ null, "ASYNC", "AWAIT", "FUTURE", "SEMAPHORE", "MODULE", 
                      "PIPELINE", "FLOW", "USE", "CONFIG", "DEFAULT", "CONST", 
                      "IF", "ELSE", "FOR", "IN", "INCLUDE", "VOID", "WHILE", 
                      "TRUE", "FALSE", "RING", "SEMI", "LP", "RP", "LB", 
                      "RB", "LS", "RS", "COMMA", "DCOLON", "COLON", "PERIOD", 
                      "PLUS", "MINUS", "MUL", "DIV", "MOD", "POW", "HPROD", 
                      "CAT", "LT", "GT", "LTE", "GTE", "EQ", "NEQ", "ASSIGN", 
                      "LAND", "LOR", "LNOT", "LSHIFT", "RSHIFT", "BAND", 
                      "BOR", "BNOT", "BXOR", "EFFECTS", "EASSIGN", "INT", 
                      "FLOAT", "BOOLEAN", "I8", "U8", "I16", "U16", "I32", 
                      "U32", "RETURN", "Identifier", "IntegerConstant", 
                      "FloatingConstant", "DigitSequence", "CharacterConstant", 
                      "StringLiteral", "Whitespace", "Newline", "BlockComment", 
                      "LineComment" ];

var ruleNames =  [ "module", "effectsDef", "effectStmt", "effectTarget", 
                   "effectParam", "effectCtx", "effectSpec", "opsList", 
                   "effectExpr", "effectTerm", "pipelineDef", "pipelineBlock", 
                   "pipelineEntry", "pipelineList", "useSpec", "includeSpec", 
                   "booleanLiteral", "arrayLiteral", "initValue", "varIdDef", 
                   "varDef", "dimValue", "dimensionSpec", "intVal", "numVal", 
                   "rangeType", "castableType", "primitiveType", "varType", 
                   "flowType", "formalParam", "formalParams", "stmtBlock", 
                   "elseStmt", "ifStmt", "identifierList", "forStmt", "whileStmt", 
                   "assignStmt", "returnStmt", "stmt", "funcDef", "qualIdentifier", 
                   "cppQualIdentifier", "functionCall", "actualParam", "actualParams", 
                   "dimensionExpr", "arrayExpr", "addressExpr", "castExpr", 
                   "basicExpr", "relExpr", "expr", "toplevelExpr", "numConstant", 
                   "exprConstant", "literal" ];

function VerticalThings (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

VerticalThings.prototype = Object.create(antlr4.Parser.prototype);
VerticalThings.prototype.constructor = VerticalThings;

Object.defineProperty(VerticalThings.prototype, "atn", {
	get : function() {
		return atn;
	}
});

VerticalThings.EOF = antlr4.Token.EOF;
VerticalThings.ASYNC = 1;
VerticalThings.AWAIT = 2;
VerticalThings.FUTURE = 3;
VerticalThings.SEMAPHORE = 4;
VerticalThings.MODULE = 5;
VerticalThings.PIPELINE = 6;
VerticalThings.FLOW = 7;
VerticalThings.USE = 8;
VerticalThings.CONFIG = 9;
VerticalThings.DEFAULT = 10;
VerticalThings.CONST = 11;
VerticalThings.IF = 12;
VerticalThings.ELSE = 13;
VerticalThings.FOR = 14;
VerticalThings.IN = 15;
VerticalThings.INCLUDE = 16;
VerticalThings.VOID = 17;
VerticalThings.WHILE = 18;
VerticalThings.TRUE = 19;
VerticalThings.FALSE = 20;
VerticalThings.RING = 21;
VerticalThings.SEMI = 22;
VerticalThings.LP = 23;
VerticalThings.RP = 24;
VerticalThings.LB = 25;
VerticalThings.RB = 26;
VerticalThings.LS = 27;
VerticalThings.RS = 28;
VerticalThings.COMMA = 29;
VerticalThings.DCOLON = 30;
VerticalThings.COLON = 31;
VerticalThings.PERIOD = 32;
VerticalThings.PLUS = 33;
VerticalThings.MINUS = 34;
VerticalThings.MUL = 35;
VerticalThings.DIV = 36;
VerticalThings.MOD = 37;
VerticalThings.POW = 38;
VerticalThings.HPROD = 39;
VerticalThings.CAT = 40;
VerticalThings.LT = 41;
VerticalThings.GT = 42;
VerticalThings.LTE = 43;
VerticalThings.GTE = 44;
VerticalThings.EQ = 45;
VerticalThings.NEQ = 46;
VerticalThings.ASSIGN = 47;
VerticalThings.LAND = 48;
VerticalThings.LOR = 49;
VerticalThings.LNOT = 50;
VerticalThings.LSHIFT = 51;
VerticalThings.RSHIFT = 52;
VerticalThings.BAND = 53;
VerticalThings.BOR = 54;
VerticalThings.BNOT = 55;
VerticalThings.BXOR = 56;
VerticalThings.EFFECTS = 57;
VerticalThings.EASSIGN = 58;
VerticalThings.INT = 59;
VerticalThings.FLOAT = 60;
VerticalThings.BOOLEAN = 61;
VerticalThings.I8 = 62;
VerticalThings.U8 = 63;
VerticalThings.I16 = 64;
VerticalThings.U16 = 65;
VerticalThings.I32 = 66;
VerticalThings.U32 = 67;
VerticalThings.RETURN = 68;
VerticalThings.Identifier = 69;
VerticalThings.IntegerConstant = 70;
VerticalThings.FloatingConstant = 71;
VerticalThings.DigitSequence = 72;
VerticalThings.CharacterConstant = 73;
VerticalThings.StringLiteral = 74;
VerticalThings.Whitespace = 75;
VerticalThings.Newline = 76;
VerticalThings.BlockComment = 77;
VerticalThings.LineComment = 78;

VerticalThings.RULE_module = 0;
VerticalThings.RULE_effectsDef = 1;
VerticalThings.RULE_effectStmt = 2;
VerticalThings.RULE_effectTarget = 3;
VerticalThings.RULE_effectParam = 4;
VerticalThings.RULE_effectCtx = 5;
VerticalThings.RULE_effectSpec = 6;
VerticalThings.RULE_opsList = 7;
VerticalThings.RULE_effectExpr = 8;
VerticalThings.RULE_effectTerm = 9;
VerticalThings.RULE_pipelineDef = 10;
VerticalThings.RULE_pipelineBlock = 11;
VerticalThings.RULE_pipelineEntry = 12;
VerticalThings.RULE_pipelineList = 13;
VerticalThings.RULE_useSpec = 14;
VerticalThings.RULE_includeSpec = 15;
VerticalThings.RULE_booleanLiteral = 16;
VerticalThings.RULE_arrayLiteral = 17;
VerticalThings.RULE_initValue = 18;
VerticalThings.RULE_varIdDef = 19;
VerticalThings.RULE_varDef = 20;
VerticalThings.RULE_dimValue = 21;
VerticalThings.RULE_dimensionSpec = 22;
VerticalThings.RULE_intVal = 23;
VerticalThings.RULE_numVal = 24;
VerticalThings.RULE_rangeType = 25;
VerticalThings.RULE_castableType = 26;
VerticalThings.RULE_primitiveType = 27;
VerticalThings.RULE_varType = 28;
VerticalThings.RULE_flowType = 29;
VerticalThings.RULE_formalParam = 30;
VerticalThings.RULE_formalParams = 31;
VerticalThings.RULE_stmtBlock = 32;
VerticalThings.RULE_elseStmt = 33;
VerticalThings.RULE_ifStmt = 34;
VerticalThings.RULE_identifierList = 35;
VerticalThings.RULE_forStmt = 36;
VerticalThings.RULE_whileStmt = 37;
VerticalThings.RULE_assignStmt = 38;
VerticalThings.RULE_returnStmt = 39;
VerticalThings.RULE_stmt = 40;
VerticalThings.RULE_funcDef = 41;
VerticalThings.RULE_qualIdentifier = 42;
VerticalThings.RULE_cppQualIdentifier = 43;
VerticalThings.RULE_functionCall = 44;
VerticalThings.RULE_actualParam = 45;
VerticalThings.RULE_actualParams = 46;
VerticalThings.RULE_dimensionExpr = 47;
VerticalThings.RULE_arrayExpr = 48;
VerticalThings.RULE_addressExpr = 49;
VerticalThings.RULE_castExpr = 50;
VerticalThings.RULE_basicExpr = 51;
VerticalThings.RULE_relExpr = 52;
VerticalThings.RULE_expr = 53;
VerticalThings.RULE_toplevelExpr = 54;
VerticalThings.RULE_numConstant = 55;
VerticalThings.RULE_exprConstant = 56;
VerticalThings.RULE_literal = 57;

function ModuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_module;
    return this;
}

ModuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleContext.prototype.constructor = ModuleContext;

ModuleContext.prototype.effectsDef = function() {
    return this.getTypedRuleContext(EffectsDefContext,0);
};

ModuleContext.prototype.useSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UseSpecContext);
    } else {
        return this.getTypedRuleContext(UseSpecContext,i);
    }
};

ModuleContext.prototype.includeSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeSpecContext);
    } else {
        return this.getTypedRuleContext(IncludeSpecContext,i);
    }
};

ModuleContext.prototype.varDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDefContext);
    } else {
        return this.getTypedRuleContext(VarDefContext,i);
    }
};

ModuleContext.prototype.funcDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FuncDefContext);
    } else {
        return this.getTypedRuleContext(FuncDefContext,i);
    }
};

ModuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterModule(this);
	}
};

ModuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitModule(this);
	}
};

ModuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitModule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ModuleContext = ModuleContext;

VerticalThings.prototype.module = function() {

    var localctx = new ModuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, VerticalThings.RULE_module);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.USE) {
            this.state = 116;
            this.useSpec();
            this.state = 121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.INCLUDE) {
            this.state = 122;
            this.includeSpec();
            this.state = 127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 131;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 128;
                this.varDef(); 
            }
            this.state = 133;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 141;
        switch(this._input.LA(1)) {
        case VerticalThings.EOF:
        case VerticalThings.ASYNC:
        case VerticalThings.Identifier:
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.ASYNC || _la===VerticalThings.Identifier) {
                this.state = 134;
                this.funcDef();
                this.state = 139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case VerticalThings.EFFECTS:
            this.state = 140;
            this.effectsDef();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectsDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectsDef;
    return this;
}

EffectsDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectsDefContext.prototype.constructor = EffectsDefContext;

EffectsDefContext.prototype.EFFECTS = function() {
    return this.getToken(VerticalThings.EFFECTS, 0);
};

EffectsDefContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

EffectsDefContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

EffectsDefContext.prototype.effectStmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectStmtContext);
    } else {
        return this.getTypedRuleContext(EffectStmtContext,i);
    }
};

EffectsDefContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.SEMI);
    } else {
        return this.getToken(VerticalThings.SEMI, i);
    }
};


EffectsDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectsDef(this);
	}
};

EffectsDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectsDef(this);
	}
};

EffectsDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectsDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectsDefContext = EffectsDefContext;

VerticalThings.prototype.effectsDef = function() {

    var localctx = new EffectsDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, VerticalThings.RULE_effectsDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(VerticalThings.EFFECTS);
        this.state = 144;
        this.match(VerticalThings.LB);
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.Identifier) {
            this.state = 145;
            this.effectStmt();
            this.state = 146;
            this.match(VerticalThings.SEMI);
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 153;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectStmt;
    return this;
}

EffectStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectStmtContext.prototype.constructor = EffectStmtContext;

EffectStmtContext.prototype.effectTarget = function() {
    return this.getTypedRuleContext(EffectTargetContext,0);
};

EffectStmtContext.prototype.EASSIGN = function() {
    return this.getToken(VerticalThings.EASSIGN, 0);
};

EffectStmtContext.prototype.effectSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectSpecContext);
    } else {
        return this.getTypedRuleContext(EffectSpecContext,i);
    }
};

EffectStmtContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


EffectStmtContext.prototype.effectCtx = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectCtxContext);
    } else {
        return this.getTypedRuleContext(EffectCtxContext,i);
    }
};

EffectStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectStmt(this);
	}
};

EffectStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectStmt(this);
	}
};

EffectStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectStmtContext = EffectStmtContext;

VerticalThings.prototype.effectStmt = function() {

    var localctx = new EffectStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, VerticalThings.RULE_effectStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.effectTarget();
        this.state = 160;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 156;
            this.match(VerticalThings.COMMA);
            this.state = 157;
            this.effectCtx();
            this.state = 162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 163;
        this.match(VerticalThings.EASSIGN);
        this.state = 164;
        this.effectSpec();
        this.state = 169;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 165;
            this.match(VerticalThings.COMMA);
            this.state = 166;
            this.effectSpec();
            this.state = 171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectTargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectTarget;
    return this;
}

EffectTargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectTargetContext.prototype.constructor = EffectTargetContext;

EffectTargetContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

EffectTargetContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

EffectTargetContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

EffectTargetContext.prototype.effectParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectParamContext);
    } else {
        return this.getTypedRuleContext(EffectParamContext,i);
    }
};

EffectTargetContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


EffectTargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectTarget(this);
	}
};

EffectTargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectTarget(this);
	}
};

EffectTargetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectTarget(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectTargetContext = EffectTargetContext;

VerticalThings.prototype.effectTarget = function() {

    var localctx = new EffectTargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, VerticalThings.RULE_effectTarget);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.qualIdentifier();
        this.state = 173;
        this.match(VerticalThings.LP);
        this.state = 182;
        _la = this._input.LA(1);
        if(_la===VerticalThings.BAND || _la===VerticalThings.Identifier) {
            this.state = 174;
            this.effectParam();
            this.state = 179;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.COMMA) {
                this.state = 175;
                this.match(VerticalThings.COMMA);
                this.state = 176;
                this.effectParam();
                this.state = 181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 184;
        this.match(VerticalThings.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectParam;
    return this;
}

EffectParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectParamContext.prototype.constructor = EffectParamContext;

EffectParamContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

EffectParamContext.prototype.BAND = function() {
    return this.getToken(VerticalThings.BAND, 0);
};

EffectParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectParam(this);
	}
};

EffectParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectParam(this);
	}
};

EffectParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectParamContext = EffectParamContext;

VerticalThings.prototype.effectParam = function() {

    var localctx = new EffectParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, VerticalThings.RULE_effectParam);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        _la = this._input.LA(1);
        if(_la===VerticalThings.BAND) {
            this.state = 186;
            this.match(VerticalThings.BAND);
        }

        this.state = 189;
        this.match(VerticalThings.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectCtxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectCtx;
    return this;
}

EffectCtxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectCtxContext.prototype.constructor = EffectCtxContext;

EffectCtxContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


EffectCtxContext.prototype.COLON = function() {
    return this.getToken(VerticalThings.COLON, 0);
};

EffectCtxContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectCtx(this);
	}
};

EffectCtxContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectCtx(this);
	}
};

EffectCtxContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectCtx(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectCtxContext = EffectCtxContext;

VerticalThings.prototype.effectCtx = function() {

    var localctx = new EffectCtxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, VerticalThings.RULE_effectCtx);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(VerticalThings.Identifier);
        this.state = 192;
        this.match(VerticalThings.COLON);
        this.state = 193;
        this.match(VerticalThings.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectSpec;
    return this;
}

EffectSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectSpecContext.prototype.constructor = EffectSpecContext;

EffectSpecContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

EffectSpecContext.prototype.effectExpr = function() {
    return this.getTypedRuleContext(EffectExprContext,0);
};

EffectSpecContext.prototype.opsList = function() {
    return this.getTypedRuleContext(OpsListContext,0);
};

EffectSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectSpec(this);
	}
};

EffectSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectSpec(this);
	}
};

EffectSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectSpecContext = EffectSpecContext;

VerticalThings.prototype.effectSpec = function() {

    var localctx = new EffectSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, VerticalThings.RULE_effectSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(VerticalThings.Identifier);
        this.state = 197;
        _la = this._input.LA(1);
        if(_la===VerticalThings.LS) {
            this.state = 196;
            this.opsList();
        }

        this.state = 199;
        this.effectExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OpsListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_opsList;
    return this;
}

OpsListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpsListContext.prototype.constructor = OpsListContext;

OpsListContext.prototype.LS = function() {
    return this.getToken(VerticalThings.LS, 0);
};

OpsListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


OpsListContext.prototype.RS = function() {
    return this.getToken(VerticalThings.RS, 0);
};

OpsListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


OpsListContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterOpsList(this);
	}
};

OpsListContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitOpsList(this);
	}
};

OpsListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitOpsList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.OpsListContext = OpsListContext;

VerticalThings.prototype.opsList = function() {

    var localctx = new OpsListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, VerticalThings.RULE_opsList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(VerticalThings.LS);
        this.state = 202;
        this.match(VerticalThings.Identifier);
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 203;
            this.match(VerticalThings.COMMA);
            this.state = 204;
            this.match(VerticalThings.Identifier);
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 210;
        this.match(VerticalThings.RS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectExpr;
    return this;
}

EffectExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectExprContext.prototype.constructor = EffectExprContext;

EffectExprContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

EffectExprContext.prototype.exprConstant = function() {
    return this.getTypedRuleContext(ExprConstantContext,0);
};

EffectExprContext.prototype.StringLiteral = function() {
    return this.getToken(VerticalThings.StringLiteral, 0);
};

EffectExprContext.prototype.effectTerm = function() {
    return this.getTypedRuleContext(EffectTermContext,0);
};

EffectExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectExpr(this);
	}
};

EffectExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectExpr(this);
	}
};

EffectExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectExprContext = EffectExprContext;

VerticalThings.prototype.effectExpr = function() {

    var localctx = new EffectExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, VerticalThings.RULE_effectExpr);
    try {
        this.state = 216;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 212;
            this.match(VerticalThings.Identifier);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this.exprConstant();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 214;
            this.match(VerticalThings.StringLiteral);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 215;
            this.effectTerm();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EffectTermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_effectTerm;
    return this;
}

EffectTermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EffectTermContext.prototype.constructor = EffectTermContext;

EffectTermContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

EffectTermContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

EffectTermContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

EffectTermContext.prototype.effectExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EffectExprContext);
    } else {
        return this.getTypedRuleContext(EffectExprContext,i);
    }
};

EffectTermContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


EffectTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterEffectTerm(this);
	}
};

EffectTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitEffectTerm(this);
	}
};

EffectTermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitEffectTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.EffectTermContext = EffectTermContext;

VerticalThings.prototype.effectTerm = function() {

    var localctx = new EffectTermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, VerticalThings.RULE_effectTerm);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.match(VerticalThings.Identifier);
        this.state = 219;
        this.match(VerticalThings.LP);
        this.state = 228;
        _la = this._input.LA(1);
        if(_la===VerticalThings.TRUE || _la===VerticalThings.FALSE || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (VerticalThings.Identifier - 69)) | (1 << (VerticalThings.IntegerConstant - 69)) | (1 << (VerticalThings.FloatingConstant - 69)) | (1 << (VerticalThings.CharacterConstant - 69)) | (1 << (VerticalThings.StringLiteral - 69)))) !== 0)) {
            this.state = 220;
            this.effectExpr();
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.COMMA) {
                this.state = 221;
                this.match(VerticalThings.COMMA);
                this.state = 222;
                this.effectExpr();
                this.state = 227;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 230;
        this.match(VerticalThings.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_pipelineDef;
    return this;
}

PipelineDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineDefContext.prototype.constructor = PipelineDefContext;

PipelineDefContext.prototype.PIPELINE = function() {
    return this.getToken(VerticalThings.PIPELINE, 0);
};

PipelineDefContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

PipelineDefContext.prototype.pipelineBlock = function() {
    return this.getTypedRuleContext(PipelineBlockContext,0);
};

PipelineDefContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

PipelineDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPipelineDef(this);
	}
};

PipelineDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPipelineDef(this);
	}
};

PipelineDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPipelineDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PipelineDefContext = PipelineDefContext;

VerticalThings.prototype.pipelineDef = function() {

    var localctx = new PipelineDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, VerticalThings.RULE_pipelineDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(VerticalThings.PIPELINE);
        this.state = 233;
        this.match(VerticalThings.Identifier);
        this.state = 234;
        this.pipelineBlock();
        this.state = 236;
        _la = this._input.LA(1);
        if(_la===VerticalThings.SEMI) {
            this.state = 235;
            this.match(VerticalThings.SEMI);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_pipelineBlock;
    return this;
}

PipelineBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineBlockContext.prototype.constructor = PipelineBlockContext;

PipelineBlockContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

PipelineBlockContext.prototype.pipelineList = function() {
    return this.getTypedRuleContext(PipelineListContext,0);
};

PipelineBlockContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

PipelineBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPipelineBlock(this);
	}
};

PipelineBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPipelineBlock(this);
	}
};

PipelineBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPipelineBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PipelineBlockContext = PipelineBlockContext;

VerticalThings.prototype.pipelineBlock = function() {

    var localctx = new PipelineBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, VerticalThings.RULE_pipelineBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(VerticalThings.LB);
        this.state = 239;
        this.pipelineList();
        this.state = 240;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineEntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_pipelineEntry;
    return this;
}

PipelineEntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineEntryContext.prototype.constructor = PipelineEntryContext;

PipelineEntryContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

PipelineEntryContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

PipelineEntryContext.prototype.pipelineBlock = function() {
    return this.getTypedRuleContext(PipelineBlockContext,0);
};

PipelineEntryContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPipelineEntry(this);
	}
};

PipelineEntryContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPipelineEntry(this);
	}
};

PipelineEntryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPipelineEntry(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PipelineEntryContext = PipelineEntryContext;

VerticalThings.prototype.pipelineEntry = function() {

    var localctx = new PipelineEntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, VerticalThings.RULE_pipelineEntry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.state = 242;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 243;
            this.functionCall();
            break;

        case 3:
            this.state = 244;
            this.pipelineBlock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_pipelineList;
    return this;
}

PipelineListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineListContext.prototype.constructor = PipelineListContext;

PipelineListContext.prototype.pipelineEntry = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PipelineEntryContext);
    } else {
        return this.getTypedRuleContext(PipelineEntryContext,i);
    }
};

PipelineListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


PipelineListContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPipelineList(this);
	}
};

PipelineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPipelineList(this);
	}
};

PipelineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPipelineList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PipelineListContext = PipelineListContext;

VerticalThings.prototype.pipelineList = function() {

    var localctx = new PipelineListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, VerticalThings.RULE_pipelineList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.pipelineEntry();
        this.state = 252;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 248;
                this.match(VerticalThings.COMMA);
                this.state = 249;
                this.pipelineEntry(); 
            }
            this.state = 254;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

        this.state = 256;
        _la = this._input.LA(1);
        if(_la===VerticalThings.COMMA) {
            this.state = 255;
            this.match(VerticalThings.COMMA);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UseSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_useSpec;
    return this;
}

UseSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UseSpecContext.prototype.constructor = UseSpecContext;

UseSpecContext.prototype.USE = function() {
    return this.getToken(VerticalThings.USE, 0);
};

UseSpecContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

UseSpecContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

UseSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterUseSpec(this);
	}
};

UseSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitUseSpec(this);
	}
};

UseSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitUseSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.UseSpecContext = UseSpecContext;

VerticalThings.prototype.useSpec = function() {

    var localctx = new UseSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, VerticalThings.RULE_useSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(VerticalThings.USE);
        this.state = 259;
        this.match(VerticalThings.Identifier);
        this.state = 260;
        this.match(VerticalThings.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncludeSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_includeSpec;
    return this;
}

IncludeSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeSpecContext.prototype.constructor = IncludeSpecContext;

IncludeSpecContext.prototype.INCLUDE = function() {
    return this.getToken(VerticalThings.INCLUDE, 0);
};

IncludeSpecContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

IncludeSpecContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

IncludeSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterIncludeSpec(this);
	}
};

IncludeSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitIncludeSpec(this);
	}
};

IncludeSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitIncludeSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.IncludeSpecContext = IncludeSpecContext;

VerticalThings.prototype.includeSpec = function() {

    var localctx = new IncludeSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, VerticalThings.RULE_includeSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.match(VerticalThings.INCLUDE);
        this.state = 263;
        this.match(VerticalThings.Identifier);
        this.state = 264;
        this.match(VerticalThings.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_booleanLiteral;
    this.value = null; // Token
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

BooleanLiteralContext.prototype.TRUE = function() {
    return this.getToken(VerticalThings.TRUE, 0);
};

BooleanLiteralContext.prototype.FALSE = function() {
    return this.getToken(VerticalThings.FALSE, 0);
};

BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.BooleanLiteralContext = BooleanLiteralContext;

VerticalThings.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, VerticalThings.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        localctx.value = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.TRUE || _la===VerticalThings.FALSE)) {
            localctx.value = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

ArrayLiteralContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

ArrayLiteralContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ArrayLiteralContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitArrayLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ArrayLiteralContext = ArrayLiteralContext;

VerticalThings.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, VerticalThings.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(VerticalThings.LB);
        this.state = 277;
        _la = this._input.LA(1);
        if(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (VerticalThings.TRUE - 19)) | (1 << (VerticalThings.FALSE - 19)) | (1 << (VerticalThings.LP - 19)) | (1 << (VerticalThings.LB - 19)) | (1 << (VerticalThings.MINUS - 19)) | (1 << (VerticalThings.LNOT - 19)))) !== 0) || ((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (VerticalThings.BAND - 53)) | (1 << (VerticalThings.BNOT - 53)) | (1 << (VerticalThings.INT - 53)) | (1 << (VerticalThings.FLOAT - 53)) | (1 << (VerticalThings.BOOLEAN - 53)) | (1 << (VerticalThings.I8 - 53)) | (1 << (VerticalThings.U8 - 53)) | (1 << (VerticalThings.I16 - 53)) | (1 << (VerticalThings.U16 - 53)) | (1 << (VerticalThings.I32 - 53)) | (1 << (VerticalThings.U32 - 53)) | (1 << (VerticalThings.Identifier - 53)) | (1 << (VerticalThings.IntegerConstant - 53)) | (1 << (VerticalThings.FloatingConstant - 53)) | (1 << (VerticalThings.CharacterConstant - 53)) | (1 << (VerticalThings.StringLiteral - 53)))) !== 0)) {
            this.state = 269;
            this.expr(0);
            this.state = 274;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.COMMA) {
                this.state = 270;
                this.match(VerticalThings.COMMA);
                this.state = 271;
                this.expr(0);
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 279;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InitValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_initValue;
    return this;
}

InitValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitValueContext.prototype.constructor = InitValueContext;

InitValueContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

InitValueContext.prototype.StringLiteral = function() {
    return this.getToken(VerticalThings.StringLiteral, 0);
};

InitValueContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};

InitValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterInitValue(this);
	}
};

InitValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitInitValue(this);
	}
};

InitValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitInitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.InitValueContext = InitValueContext;

VerticalThings.prototype.initValue = function() {

    var localctx = new InitValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, VerticalThings.RULE_initValue);
    try {
        this.state = 284;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 281;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 282;
            this.match(VerticalThings.StringLiteral);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 283;
            this.arrayLiteral();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarIdDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_varIdDef;
    return this;
}

VarIdDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarIdDefContext.prototype.constructor = VarIdDefContext;

VarIdDefContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

VarIdDefContext.prototype.ASSIGN = function() {
    return this.getToken(VerticalThings.ASSIGN, 0);
};

VarIdDefContext.prototype.initValue = function() {
    return this.getTypedRuleContext(InitValueContext,0);
};

VarIdDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterVarIdDef(this);
	}
};

VarIdDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitVarIdDef(this);
	}
};

VarIdDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitVarIdDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.VarIdDefContext = VarIdDefContext;

VerticalThings.prototype.varIdDef = function() {

    var localctx = new VarIdDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, VerticalThings.RULE_varIdDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(VerticalThings.Identifier);
        this.state = 289;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ASSIGN) {
            this.state = 287;
            this.match(VerticalThings.ASSIGN);
            this.state = 288;
            this.initValue();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_varDef;
    return this;
}

VarDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDefContext.prototype.constructor = VarDefContext;

VarDefContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

VarDefContext.prototype.varIdDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarIdDefContext);
    } else {
        return this.getTypedRuleContext(VarIdDefContext,i);
    }
};

VarDefContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

VarDefContext.prototype.CONST = function() {
    return this.getToken(VerticalThings.CONST, 0);
};

VarDefContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


VarDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterVarDef(this);
	}
};

VarDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitVarDef(this);
	}
};

VarDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitVarDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.VarDefContext = VarDefContext;

VerticalThings.prototype.varDef = function() {

    var localctx = new VarDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, VerticalThings.RULE_varDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        _la = this._input.LA(1);
        if(_la===VerticalThings.CONST) {
            this.state = 291;
            this.match(VerticalThings.CONST);
        }

        this.state = 294;
        this.varType();
        this.state = 295;
        this.varIdDef();
        this.state = 300;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 296;
            this.match(VerticalThings.COMMA);
            this.state = 297;
            this.varIdDef();
            this.state = 302;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 303;
        this.match(VerticalThings.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_dimValue;
    return this;
}

DimValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimValueContext.prototype.constructor = DimValueContext;

DimValueContext.prototype.IntegerConstant = function() {
    return this.getToken(VerticalThings.IntegerConstant, 0);
};

DimValueContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

DimValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterDimValue(this);
	}
};

DimValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitDimValue(this);
	}
};

DimValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitDimValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.DimValueContext = DimValueContext;

VerticalThings.prototype.dimValue = function() {

    var localctx = new DimValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, VerticalThings.RULE_dimValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.Identifier || _la===VerticalThings.IntegerConstant)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimensionSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_dimensionSpec;
    return this;
}

DimensionSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimensionSpecContext.prototype.constructor = DimensionSpecContext;

DimensionSpecContext.prototype.RING = function() {
    return this.getToken(VerticalThings.RING, 0);
};

DimensionSpecContext.prototype.LS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.LS);
    } else {
        return this.getToken(VerticalThings.LS, i);
    }
};


DimensionSpecContext.prototype.dimValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DimValueContext);
    } else {
        return this.getTypedRuleContext(DimValueContext,i);
    }
};

DimensionSpecContext.prototype.RS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.RS);
    } else {
        return this.getToken(VerticalThings.RS, i);
    }
};


DimensionSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterDimensionSpec(this);
	}
};

DimensionSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitDimensionSpec(this);
	}
};

DimensionSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitDimensionSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.DimensionSpecContext = DimensionSpecContext;

VerticalThings.prototype.dimensionSpec = function() {

    var localctx = new DimensionSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, VerticalThings.RULE_dimensionSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        _la = this._input.LA(1);
        if(_la===VerticalThings.RING) {
            this.state = 307;
            this.match(VerticalThings.RING);
        }

        this.state = 314; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 310;
            this.match(VerticalThings.LS);
            this.state = 311;
            this.dimValue();
            this.state = 312;
            this.match(VerticalThings.RS);
            this.state = 316; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===VerticalThings.LS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_intVal;
    return this;
}

IntValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntValContext.prototype.constructor = IntValContext;

IntValContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

IntValContext.prototype.IntegerConstant = function() {
    return this.getToken(VerticalThings.IntegerConstant, 0);
};

IntValContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterIntVal(this);
	}
};

IntValContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitIntVal(this);
	}
};

IntValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitIntVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.IntValContext = IntValContext;

VerticalThings.prototype.intVal = function() {

    var localctx = new IntValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, VerticalThings.RULE_intVal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.Identifier || _la===VerticalThings.IntegerConstant)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_numVal;
    return this;
}

NumValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumValContext.prototype.constructor = NumValContext;

NumValContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

NumValContext.prototype.numConstant = function() {
    return this.getTypedRuleContext(NumConstantContext,0);
};

NumValContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterNumVal(this);
	}
};

NumValContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitNumVal(this);
	}
};

NumValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitNumVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.NumValContext = NumValContext;

VerticalThings.prototype.numVal = function() {

    var localctx = new NumValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, VerticalThings.RULE_numVal);
    try {
        this.state = 322;
        switch(this._input.LA(1)) {
        case VerticalThings.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 320;
            this.match(VerticalThings.Identifier);
            break;
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 321;
            this.numConstant();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RangeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_rangeType;
    return this;
}

RangeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeTypeContext.prototype.constructor = RangeTypeContext;

RangeTypeContext.prototype.LS = function() {
    return this.getToken(VerticalThings.LS, 0);
};

RangeTypeContext.prototype.numVal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumValContext);
    } else {
        return this.getTypedRuleContext(NumValContext,i);
    }
};

RangeTypeContext.prototype.RS = function() {
    return this.getToken(VerticalThings.RS, 0);
};

RangeTypeContext.prototype.COMMA = function() {
    return this.getToken(VerticalThings.COMMA, 0);
};

RangeTypeContext.prototype.COLON = function() {
    return this.getToken(VerticalThings.COLON, 0);
};

RangeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterRangeType(this);
	}
};

RangeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitRangeType(this);
	}
};

RangeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitRangeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.RangeTypeContext = RangeTypeContext;

VerticalThings.prototype.rangeType = function() {

    var localctx = new RangeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, VerticalThings.RULE_rangeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.match(VerticalThings.LS);
        this.state = 325;
        this.numVal();
        this.state = 326;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.COMMA || _la===VerticalThings.COLON)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 327;
        this.numVal();
        this.state = 328;
        this.match(VerticalThings.RS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CastableTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_castableType;
    this.type = null; // Token
    return this;
}

CastableTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CastableTypeContext.prototype.constructor = CastableTypeContext;

CastableTypeContext.prototype.INT = function() {
    return this.getToken(VerticalThings.INT, 0);
};

CastableTypeContext.prototype.FLOAT = function() {
    return this.getToken(VerticalThings.FLOAT, 0);
};

CastableTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(VerticalThings.BOOLEAN, 0);
};

CastableTypeContext.prototype.I8 = function() {
    return this.getToken(VerticalThings.I8, 0);
};

CastableTypeContext.prototype.U8 = function() {
    return this.getToken(VerticalThings.U8, 0);
};

CastableTypeContext.prototype.I16 = function() {
    return this.getToken(VerticalThings.I16, 0);
};

CastableTypeContext.prototype.U16 = function() {
    return this.getToken(VerticalThings.U16, 0);
};

CastableTypeContext.prototype.I32 = function() {
    return this.getToken(VerticalThings.I32, 0);
};

CastableTypeContext.prototype.U32 = function() {
    return this.getToken(VerticalThings.U32, 0);
};

CastableTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterCastableType(this);
	}
};

CastableTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitCastableType(this);
	}
};

CastableTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitCastableType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.CastableTypeContext = CastableTypeContext;

VerticalThings.prototype.castableType = function() {

    var localctx = new CastableTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, VerticalThings.RULE_castableType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        localctx.type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (VerticalThings.INT - 59)) | (1 << (VerticalThings.FLOAT - 59)) | (1 << (VerticalThings.BOOLEAN - 59)) | (1 << (VerticalThings.I8 - 59)) | (1 << (VerticalThings.U8 - 59)) | (1 << (VerticalThings.I16 - 59)) | (1 << (VerticalThings.U16 - 59)) | (1 << (VerticalThings.I32 - 59)) | (1 << (VerticalThings.U32 - 59)))) !== 0))) {
            localctx.type = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_primitiveType;
    this.type = null; // Token
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;

PrimitiveTypeContext.prototype.INT = function() {
    return this.getToken(VerticalThings.INT, 0);
};

PrimitiveTypeContext.prototype.FLOAT = function() {
    return this.getToken(VerticalThings.FLOAT, 0);
};

PrimitiveTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(VerticalThings.BOOLEAN, 0);
};

PrimitiveTypeContext.prototype.VOID = function() {
    return this.getToken(VerticalThings.VOID, 0);
};

PrimitiveTypeContext.prototype.I8 = function() {
    return this.getToken(VerticalThings.I8, 0);
};

PrimitiveTypeContext.prototype.U8 = function() {
    return this.getToken(VerticalThings.U8, 0);
};

PrimitiveTypeContext.prototype.I16 = function() {
    return this.getToken(VerticalThings.I16, 0);
};

PrimitiveTypeContext.prototype.U16 = function() {
    return this.getToken(VerticalThings.U16, 0);
};

PrimitiveTypeContext.prototype.I32 = function() {
    return this.getToken(VerticalThings.I32, 0);
};

PrimitiveTypeContext.prototype.U32 = function() {
    return this.getToken(VerticalThings.U32, 0);
};

PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitPrimitiveType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.PrimitiveTypeContext = PrimitiveTypeContext;

VerticalThings.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, VerticalThings.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        localctx.type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.VOID || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (VerticalThings.INT - 59)) | (1 << (VerticalThings.FLOAT - 59)) | (1 << (VerticalThings.BOOLEAN - 59)) | (1 << (VerticalThings.I8 - 59)) | (1 << (VerticalThings.U8 - 59)) | (1 << (VerticalThings.I16 - 59)) | (1 << (VerticalThings.U16 - 59)) | (1 << (VerticalThings.I32 - 59)) | (1 << (VerticalThings.U32 - 59)))) !== 0))) {
            localctx.type = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_varType;
    return this;
}

VarTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarTypeContext.prototype.constructor = VarTypeContext;

VarTypeContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

VarTypeContext.prototype.cppQualIdentifier = function() {
    return this.getTypedRuleContext(CppQualIdentifierContext,0);
};

VarTypeContext.prototype.rangeType = function() {
    return this.getTypedRuleContext(RangeTypeContext,0);
};

VarTypeContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

VarTypeContext.prototype.dimensionSpec = function() {
    return this.getTypedRuleContext(DimensionSpecContext,0);
};

VarTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterVarType(this);
	}
};

VarTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitVarType(this);
	}
};

VarTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitVarType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.VarTypeContext = VarTypeContext;

VerticalThings.prototype.varType = function() {

    var localctx = new VarTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, VerticalThings.RULE_varType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.state = 334;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 335;
            this.cppQualIdentifier();
            break;

        case 3:
            this.state = 336;
            this.rangeType();
            break;

        case 4:
            this.state = 337;
            this.primitiveType();
            break;

        }
        this.state = 341;
        _la = this._input.LA(1);
        if(_la===VerticalThings.RING || _la===VerticalThings.LS) {
            this.state = 340;
            this.dimensionSpec();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FlowTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_flowType;
    return this;
}

FlowTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlowTypeContext.prototype.constructor = FlowTypeContext;

FlowTypeContext.prototype.FLOW = function() {
    return this.getToken(VerticalThings.FLOW, 0);
};

FlowTypeContext.prototype.DEFAULT = function() {
    return this.getToken(VerticalThings.DEFAULT, 0);
};

FlowTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFlowType(this);
	}
};

FlowTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFlowType(this);
	}
};

FlowTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFlowType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FlowTypeContext = FlowTypeContext;

VerticalThings.prototype.flowType = function() {

    var localctx = new FlowTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, VerticalThings.RULE_flowType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        _la = this._input.LA(1);
        if(_la===VerticalThings.DEFAULT) {
            this.state = 343;
            this.match(VerticalThings.DEFAULT);
        }

        this.state = 346;
        this.match(VerticalThings.FLOW);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_formalParam;
    return this;
}

FormalParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParamContext.prototype.constructor = FormalParamContext;

FormalParamContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

FormalParamContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

FormalParamContext.prototype.CONST = function() {
    return this.getToken(VerticalThings.CONST, 0);
};

FormalParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFormalParam(this);
	}
};

FormalParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFormalParam(this);
	}
};

FormalParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFormalParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FormalParamContext = FormalParamContext;

VerticalThings.prototype.formalParam = function() {

    var localctx = new FormalParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, VerticalThings.RULE_formalParam);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 349;
        _la = this._input.LA(1);
        if(_la===VerticalThings.CONST) {
            this.state = 348;
            this.match(VerticalThings.CONST);
        }

        this.state = 351;
        this.varType();
        this.state = 352;
        this.match(VerticalThings.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_formalParams;
    return this;
}

FormalParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParamsContext.prototype.constructor = FormalParamsContext;

FormalParamsContext.prototype.formalParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParamContext);
    } else {
        return this.getTypedRuleContext(FormalParamContext,i);
    }
};

FormalParamsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


FormalParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFormalParams(this);
	}
};

FormalParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFormalParams(this);
	}
};

FormalParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFormalParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FormalParamsContext = FormalParamsContext;

VerticalThings.prototype.formalParams = function() {

    var localctx = new FormalParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, VerticalThings.RULE_formalParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        this.formalParam();
        this.state = 359;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 355;
            this.match(VerticalThings.COMMA);
            this.state = 356;
            this.formalParam();
            this.state = 361;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_stmtBlock;
    return this;
}

StmtBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtBlockContext.prototype.constructor = StmtBlockContext;

StmtBlockContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

StmtBlockContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

StmtBlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

StmtBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterStmtBlock(this);
	}
};

StmtBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitStmtBlock(this);
	}
};

StmtBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitStmtBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.StmtBlockContext = StmtBlockContext;

VerticalThings.prototype.stmtBlock = function() {

    var localctx = new StmtBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, VerticalThings.RULE_stmtBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        this.match(VerticalThings.LB);
        this.state = 366;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.IF) | (1 << VerticalThings.FOR) | (1 << VerticalThings.WHILE) | (1 << VerticalThings.LB))) !== 0) || _la===VerticalThings.RETURN || _la===VerticalThings.Identifier) {
            this.state = 363;
            this.stmt();
            this.state = 368;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 369;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_elseStmt;
    return this;
}

ElseStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStmtContext.prototype.constructor = ElseStmtContext;

ElseStmtContext.prototype.ELSE = function() {
    return this.getToken(VerticalThings.ELSE, 0);
};

ElseStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

ElseStmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

ElseStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterElseStmt(this);
	}
};

ElseStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitElseStmt(this);
	}
};

ElseStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitElseStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ElseStmtContext = ElseStmtContext;

VerticalThings.prototype.elseStmt = function() {

    var localctx = new ElseStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, VerticalThings.RULE_elseStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.match(VerticalThings.ELSE);
        this.state = 374;
        switch(this._input.LA(1)) {
        case VerticalThings.LB:
            this.state = 372;
            this.stmtBlock();
            break;
        case VerticalThings.IF:
            this.state = 373;
            this.ifStmt();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_ifStmt;
    return this;
}

IfStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStmtContext.prototype.constructor = IfStmtContext;

IfStmtContext.prototype.IF = function() {
    return this.getToken(VerticalThings.IF, 0);
};

IfStmtContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

IfStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

IfStmtContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

IfStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

IfStmtContext.prototype.elseStmt = function() {
    return this.getTypedRuleContext(ElseStmtContext,0);
};

IfStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterIfStmt(this);
	}
};

IfStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitIfStmt(this);
	}
};

IfStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitIfStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.IfStmtContext = IfStmtContext;

VerticalThings.prototype.ifStmt = function() {

    var localctx = new IfStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, VerticalThings.RULE_ifStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(VerticalThings.IF);
        this.state = 377;
        this.match(VerticalThings.LP);
        this.state = 378;
        this.expr(0);
        this.state = 379;
        this.match(VerticalThings.RP);
        this.state = 380;
        this.stmtBlock();
        this.state = 382;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ELSE) {
            this.state = 381;
            this.elseStmt();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_identifierList;
    return this;
}

IdentifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierListContext.prototype.constructor = IdentifierListContext;

IdentifierListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


IdentifierListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


IdentifierListContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterIdentifierList(this);
	}
};

IdentifierListContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitIdentifierList(this);
	}
};

IdentifierListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitIdentifierList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.IdentifierListContext = IdentifierListContext;

VerticalThings.prototype.identifierList = function() {

    var localctx = new IdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, VerticalThings.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.match(VerticalThings.Identifier);
        this.state = 389;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 385;
            this.match(VerticalThings.COMMA);
            this.state = 386;
            this.match(VerticalThings.Identifier);
            this.state = 391;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_forStmt;
    return this;
}

ForStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStmtContext.prototype.constructor = ForStmtContext;

ForStmtContext.prototype.FOR = function() {
    return this.getToken(VerticalThings.FOR, 0);
};

ForStmtContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

ForStmtContext.prototype.IN = function() {
    return this.getToken(VerticalThings.IN, 0);
};

ForStmtContext.prototype.rangeType = function() {
    return this.getTypedRuleContext(RangeTypeContext,0);
};

ForStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

ForStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterForStmt(this);
	}
};

ForStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitForStmt(this);
	}
};

ForStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitForStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ForStmtContext = ForStmtContext;

VerticalThings.prototype.forStmt = function() {

    var localctx = new ForStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, VerticalThings.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.match(VerticalThings.FOR);
        this.state = 393;
        this.identifierList();
        this.state = 394;
        this.match(VerticalThings.IN);
        this.state = 395;
        this.rangeType();
        this.state = 396;
        this.stmtBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_whileStmt;
    return this;
}

WhileStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStmtContext.prototype.constructor = WhileStmtContext;

WhileStmtContext.prototype.WHILE = function() {
    return this.getToken(VerticalThings.WHILE, 0);
};

WhileStmtContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

WhileStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

WhileStmtContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

WhileStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

WhileStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterWhileStmt(this);
	}
};

WhileStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitWhileStmt(this);
	}
};

WhileStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitWhileStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.WhileStmtContext = WhileStmtContext;

VerticalThings.prototype.whileStmt = function() {

    var localctx = new WhileStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, VerticalThings.RULE_whileStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        this.match(VerticalThings.WHILE);
        this.state = 399;
        this.match(VerticalThings.LP);
        this.state = 400;
        this.expr(0);
        this.state = 401;
        this.match(VerticalThings.RP);
        this.state = 402;
        this.stmtBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_assignStmt;
    return this;
}

AssignStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStmtContext.prototype.constructor = AssignStmtContext;

AssignStmtContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

AssignStmtContext.prototype.ASSIGN = function() {
    return this.getToken(VerticalThings.ASSIGN, 0);
};

AssignStmtContext.prototype.toplevelExpr = function() {
    return this.getTypedRuleContext(ToplevelExprContext,0);
};

AssignStmtContext.prototype.dimensionExpr = function() {
    return this.getTypedRuleContext(DimensionExprContext,0);
};

AssignStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterAssignStmt(this);
	}
};

AssignStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitAssignStmt(this);
	}
};

AssignStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitAssignStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.AssignStmtContext = AssignStmtContext;

VerticalThings.prototype.assignStmt = function() {

    var localctx = new AssignStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, VerticalThings.RULE_assignStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        this.qualIdentifier();
        this.state = 406;
        _la = this._input.LA(1);
        if(_la===VerticalThings.LS) {
            this.state = 405;
            this.dimensionExpr();
        }

        this.state = 408;
        this.match(VerticalThings.ASSIGN);
        this.state = 409;
        this.toplevelExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_returnStmt;
    return this;
}

ReturnStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStmtContext.prototype.constructor = ReturnStmtContext;

ReturnStmtContext.prototype.RETURN = function() {
    return this.getToken(VerticalThings.RETURN, 0);
};

ReturnStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ReturnStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterReturnStmt(this);
	}
};

ReturnStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitReturnStmt(this);
	}
};

ReturnStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitReturnStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ReturnStmtContext = ReturnStmtContext;

VerticalThings.prototype.returnStmt = function() {

    var localctx = new ReturnStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, VerticalThings.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.match(VerticalThings.RETURN);
        this.state = 412;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

StmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

StmtContext.prototype.forStmt = function() {
    return this.getTypedRuleContext(ForStmtContext,0);
};

StmtContext.prototype.whileStmt = function() {
    return this.getTypedRuleContext(WhileStmtContext,0);
};

StmtContext.prototype.assignStmt = function() {
    return this.getTypedRuleContext(AssignStmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

StmtContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

StmtContext.prototype.returnStmt = function() {
    return this.getTypedRuleContext(ReturnStmtContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.StmtContext = StmtContext;

VerticalThings.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, VerticalThings.RULE_stmt);
    try {
        this.state = 427;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 414;
            this.stmtBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 415;
            this.ifStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 416;
            this.forStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 417;
            this.whileStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 418;
            this.assignStmt();
            this.state = 419;
            this.match(VerticalThings.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 421;
            this.functionCall();
            this.state = 422;
            this.match(VerticalThings.SEMI);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 424;
            this.returnStmt();
            this.state = 425;
            this.match(VerticalThings.SEMI);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_funcDef;
    return this;
}

FuncDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncDefContext.prototype.constructor = FuncDefContext;

FuncDefContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

FuncDefContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

FuncDefContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

FuncDefContext.prototype.LB = function() {
    return this.getToken(VerticalThings.LB, 0);
};

FuncDefContext.prototype.RB = function() {
    return this.getToken(VerticalThings.RB, 0);
};

FuncDefContext.prototype.ASYNC = function() {
    return this.getToken(VerticalThings.ASYNC, 0);
};

FuncDefContext.prototype.formalParams = function() {
    return this.getTypedRuleContext(FormalParamsContext,0);
};

FuncDefContext.prototype.varDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDefContext);
    } else {
        return this.getTypedRuleContext(VarDefContext,i);
    }
};

FuncDefContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

FuncDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFuncDef(this);
	}
};

FuncDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFuncDef(this);
	}
};

FuncDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFuncDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FuncDefContext = FuncDefContext;

VerticalThings.prototype.funcDef = function() {

    var localctx = new FuncDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, VerticalThings.RULE_funcDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ASYNC) {
            this.state = 429;
            this.match(VerticalThings.ASYNC);
        }

        this.state = 432;
        this.match(VerticalThings.Identifier);
        this.state = 433;
        this.match(VerticalThings.LP);
        this.state = 435;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.CONST) | (1 << VerticalThings.VOID) | (1 << VerticalThings.LS))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (VerticalThings.INT - 59)) | (1 << (VerticalThings.FLOAT - 59)) | (1 << (VerticalThings.BOOLEAN - 59)) | (1 << (VerticalThings.I8 - 59)) | (1 << (VerticalThings.U8 - 59)) | (1 << (VerticalThings.I16 - 59)) | (1 << (VerticalThings.U16 - 59)) | (1 << (VerticalThings.I32 - 59)) | (1 << (VerticalThings.U32 - 59)) | (1 << (VerticalThings.Identifier - 59)))) !== 0)) {
            this.state = 434;
            this.formalParams();
        }

        this.state = 437;
        this.match(VerticalThings.RP);
        this.state = 438;
        this.match(VerticalThings.LB);
        this.state = 442;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 439;
                this.varDef(); 
            }
            this.state = 444;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
        }

        this.state = 448;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.IF) | (1 << VerticalThings.FOR) | (1 << VerticalThings.WHILE) | (1 << VerticalThings.LB))) !== 0) || _la===VerticalThings.RETURN || _la===VerticalThings.Identifier) {
            this.state = 445;
            this.stmt();
            this.state = 450;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 451;
        this.match(VerticalThings.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QualIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_qualIdentifier;
    return this;
}

QualIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualIdentifierContext.prototype.constructor = QualIdentifierContext;

QualIdentifierContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


QualIdentifierContext.prototype.PERIOD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.PERIOD);
    } else {
        return this.getToken(VerticalThings.PERIOD, i);
    }
};


QualIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterQualIdentifier(this);
	}
};

QualIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitQualIdentifier(this);
	}
};

QualIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitQualIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.QualIdentifierContext = QualIdentifierContext;

VerticalThings.prototype.qualIdentifier = function() {

    var localctx = new QualIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, VerticalThings.RULE_qualIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 453;
        this.match(VerticalThings.Identifier);
        this.state = 458;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 454;
                this.match(VerticalThings.PERIOD);
                this.state = 455;
                this.match(VerticalThings.Identifier); 
            }
            this.state = 460;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CppQualIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_cppQualIdentifier;
    return this;
}

CppQualIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CppQualIdentifierContext.prototype.constructor = CppQualIdentifierContext;

CppQualIdentifierContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.Identifier);
    } else {
        return this.getToken(VerticalThings.Identifier, i);
    }
};


CppQualIdentifierContext.prototype.DCOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.DCOLON);
    } else {
        return this.getToken(VerticalThings.DCOLON, i);
    }
};


CppQualIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterCppQualIdentifier(this);
	}
};

CppQualIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitCppQualIdentifier(this);
	}
};

CppQualIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitCppQualIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.CppQualIdentifierContext = CppQualIdentifierContext;

VerticalThings.prototype.cppQualIdentifier = function() {

    var localctx = new CppQualIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, VerticalThings.RULE_cppQualIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 461;
        this.match(VerticalThings.Identifier);
        this.state = 464; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 462;
            this.match(VerticalThings.DCOLON);
            this.state = 463;
            this.match(VerticalThings.Identifier);
            this.state = 466; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===VerticalThings.DCOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

FunctionCallContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

FunctionCallContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

FunctionCallContext.prototype.cppQualIdentifier = function() {
    return this.getTypedRuleContext(CppQualIdentifierContext,0);
};

FunctionCallContext.prototype.actualParams = function() {
    return this.getTypedRuleContext(ActualParamsContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.FunctionCallContext = FunctionCallContext;

VerticalThings.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, VerticalThings.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 470;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        switch(la_) {
        case 1:
            this.state = 468;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 469;
            this.cppQualIdentifier();
            break;

        }
        this.state = 472;
        this.match(VerticalThings.LP);
        this.state = 474;
        _la = this._input.LA(1);
        if(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (VerticalThings.TRUE - 19)) | (1 << (VerticalThings.FALSE - 19)) | (1 << (VerticalThings.LP - 19)) | (1 << (VerticalThings.LB - 19)) | (1 << (VerticalThings.MINUS - 19)) | (1 << (VerticalThings.LNOT - 19)))) !== 0) || ((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (VerticalThings.BAND - 53)) | (1 << (VerticalThings.BNOT - 53)) | (1 << (VerticalThings.INT - 53)) | (1 << (VerticalThings.FLOAT - 53)) | (1 << (VerticalThings.BOOLEAN - 53)) | (1 << (VerticalThings.I8 - 53)) | (1 << (VerticalThings.U8 - 53)) | (1 << (VerticalThings.I16 - 53)) | (1 << (VerticalThings.U16 - 53)) | (1 << (VerticalThings.I32 - 53)) | (1 << (VerticalThings.U32 - 53)) | (1 << (VerticalThings.Identifier - 53)) | (1 << (VerticalThings.IntegerConstant - 53)) | (1 << (VerticalThings.FloatingConstant - 53)) | (1 << (VerticalThings.CharacterConstant - 53)) | (1 << (VerticalThings.StringLiteral - 53)))) !== 0)) {
            this.state = 473;
            this.actualParams();
        }

        this.state = 476;
        this.match(VerticalThings.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActualParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_actualParam;
    return this;
}

ActualParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActualParamContext.prototype.constructor = ActualParamContext;

ActualParamContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ActualParamContext.prototype.StringLiteral = function() {
    return this.getToken(VerticalThings.StringLiteral, 0);
};

ActualParamContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

ActualParamContext.prototype.ASSIGN = function() {
    return this.getToken(VerticalThings.ASSIGN, 0);
};

ActualParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterActualParam(this);
	}
};

ActualParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitActualParam(this);
	}
};

ActualParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitActualParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ActualParamContext = ActualParamContext;

VerticalThings.prototype.actualParam = function() {

    var localctx = new ActualParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, VerticalThings.RULE_actualParam);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 480;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        if(la_===1) {
            this.state = 478;
            this.match(VerticalThings.Identifier);
            this.state = 479;
            this.match(VerticalThings.ASSIGN);

        }
        this.state = 484;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.state = 482;
            this.expr(0);
            break;

        case 2:
            this.state = 483;
            this.match(VerticalThings.StringLiteral);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActualParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_actualParams;
    return this;
}

ActualParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActualParamsContext.prototype.constructor = ActualParamsContext;

ActualParamsContext.prototype.actualParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActualParamContext);
    } else {
        return this.getTypedRuleContext(ActualParamContext,i);
    }
};

ActualParamsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


ActualParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterActualParams(this);
	}
};

ActualParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitActualParams(this);
	}
};

ActualParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitActualParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ActualParamsContext = ActualParamsContext;

VerticalThings.prototype.actualParams = function() {

    var localctx = new ActualParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, VerticalThings.RULE_actualParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 486;
        this.actualParam();
        this.state = 491;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 487;
                this.match(VerticalThings.COMMA);
                this.state = 488;
                this.actualParam(); 
            }
            this.state = 493;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
        }

        this.state = 495;
        _la = this._input.LA(1);
        if(_la===VerticalThings.COMMA) {
            this.state = 494;
            this.match(VerticalThings.COMMA);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimensionExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_dimensionExpr;
    return this;
}

DimensionExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimensionExprContext.prototype.constructor = DimensionExprContext;

DimensionExprContext.prototype.LS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.LS);
    } else {
        return this.getToken(VerticalThings.LS, i);
    }
};


DimensionExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

DimensionExprContext.prototype.RS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.RS);
    } else {
        return this.getToken(VerticalThings.RS, i);
    }
};


DimensionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterDimensionExpr(this);
	}
};

DimensionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitDimensionExpr(this);
	}
};

DimensionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitDimensionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.DimensionExprContext = DimensionExprContext;

VerticalThings.prototype.dimensionExpr = function() {

    var localctx = new DimensionExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, VerticalThings.RULE_dimensionExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 501; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 497;
        		this.match(VerticalThings.LS);
        		this.state = 498;
        		this.expr(0);
        		this.state = 499;
        		this.match(VerticalThings.RS);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 503; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,52, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_arrayExpr;
    return this;
}

ArrayExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayExprContext.prototype.constructor = ArrayExprContext;

ArrayExprContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

ArrayExprContext.prototype.dimensionExpr = function() {
    return this.getTypedRuleContext(DimensionExprContext,0);
};

ArrayExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterArrayExpr(this);
	}
};

ArrayExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitArrayExpr(this);
	}
};

ArrayExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitArrayExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ArrayExprContext = ArrayExprContext;

VerticalThings.prototype.arrayExpr = function() {

    var localctx = new ArrayExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, VerticalThings.RULE_arrayExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 505;
        this.match(VerticalThings.Identifier);
        this.state = 506;
        this.dimensionExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddressExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_addressExpr;
    return this;
}

AddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddressExprContext.prototype.constructor = AddressExprContext;

AddressExprContext.prototype.BAND = function() {
    return this.getToken(VerticalThings.BAND, 0);
};

AddressExprContext.prototype.arrayExpr = function() {
    return this.getTypedRuleContext(ArrayExprContext,0);
};

AddressExprContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

AddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterAddressExpr(this);
	}
};

AddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitAddressExpr(this);
	}
};

AddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.AddressExprContext = AddressExprContext;

VerticalThings.prototype.addressExpr = function() {

    var localctx = new AddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, VerticalThings.RULE_addressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 508;
        this.match(VerticalThings.BAND);
        this.state = 511;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
        switch(la_) {
        case 1:
            this.state = 509;
            this.arrayExpr();
            break;

        case 2:
            this.state = 510;
            this.qualIdentifier();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CastExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_castExpr;
    return this;
}

CastExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CastExprContext.prototype.constructor = CastExprContext;

CastExprContext.prototype.castableType = function() {
    return this.getTypedRuleContext(CastableTypeContext,0);
};

CastExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

CastExprContext.prototype.basicExpr = function() {
    return this.getTypedRuleContext(BasicExprContext,0);
};

CastExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

CastExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterCastExpr(this);
	}
};

CastExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitCastExpr(this);
	}
};

CastExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitCastExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.CastExprContext = CastExprContext;

VerticalThings.prototype.castExpr = function() {

    var localctx = new CastExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, VerticalThings.RULE_castExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
        this.castableType();
        this.state = 514;
        this.match(VerticalThings.LP);
        this.state = 515;
        this.basicExpr(0);
        this.state = 516;
        this.match(VerticalThings.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BasicExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_basicExpr;
    this.up = null; // Token
    this.op = null; // Token
    return this;
}

BasicExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicExprContext.prototype.constructor = BasicExprContext;

BasicExprContext.prototype.basicExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicExprContext);
    } else {
        return this.getTypedRuleContext(BasicExprContext,i);
    }
};

BasicExprContext.prototype.BNOT = function() {
    return this.getToken(VerticalThings.BNOT, 0);
};

BasicExprContext.prototype.MINUS = function() {
    return this.getToken(VerticalThings.MINUS, 0);
};

BasicExprContext.prototype.castExpr = function() {
    return this.getTypedRuleContext(CastExprContext,0);
};

BasicExprContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

BasicExprContext.prototype.arrayExpr = function() {
    return this.getTypedRuleContext(ArrayExprContext,0);
};

BasicExprContext.prototype.addressExpr = function() {
    return this.getTypedRuleContext(AddressExprContext,0);
};

BasicExprContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

BasicExprContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

BasicExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

BasicExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

BasicExprContext.prototype.POW = function() {
    return this.getToken(VerticalThings.POW, 0);
};

BasicExprContext.prototype.LSHIFT = function() {
    return this.getToken(VerticalThings.LSHIFT, 0);
};

BasicExprContext.prototype.RSHIFT = function() {
    return this.getToken(VerticalThings.RSHIFT, 0);
};

BasicExprContext.prototype.BAND = function() {
    return this.getToken(VerticalThings.BAND, 0);
};

BasicExprContext.prototype.BOR = function() {
    return this.getToken(VerticalThings.BOR, 0);
};

BasicExprContext.prototype.BXOR = function() {
    return this.getToken(VerticalThings.BXOR, 0);
};

BasicExprContext.prototype.CAT = function() {
    return this.getToken(VerticalThings.CAT, 0);
};

BasicExprContext.prototype.HPROD = function() {
    return this.getToken(VerticalThings.HPROD, 0);
};

BasicExprContext.prototype.MUL = function() {
    return this.getToken(VerticalThings.MUL, 0);
};

BasicExprContext.prototype.DIV = function() {
    return this.getToken(VerticalThings.DIV, 0);
};

BasicExprContext.prototype.MOD = function() {
    return this.getToken(VerticalThings.MOD, 0);
};

BasicExprContext.prototype.PLUS = function() {
    return this.getToken(VerticalThings.PLUS, 0);
};

BasicExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterBasicExpr(this);
	}
};

BasicExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitBasicExpr(this);
	}
};

BasicExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitBasicExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VerticalThings.prototype.basicExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BasicExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 102;
    this.enterRecursionRule(localctx, 102, VerticalThings.RULE_basicExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 531;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
        switch(la_) {
        case 1:
            this.state = 519;
            localctx.up = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===VerticalThings.MINUS || _la===VerticalThings.BNOT)) {
                localctx.up = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 520;
            this.basicExpr(7);
            break;

        case 2:
            this.state = 521;
            this.castExpr();
            break;

        case 3:
            this.state = 522;
            this.qualIdentifier();
            break;

        case 4:
            this.state = 523;
            this.arrayExpr();
            break;

        case 5:
            this.state = 524;
            this.addressExpr();
            break;

        case 6:
            this.state = 525;
            this.functionCall();
            break;

        case 7:
            this.state = 526;
            this.literal();
            break;

        case 8:
            this.state = 527;
            this.match(VerticalThings.LP);
            this.state = 528;
            this.basicExpr(0);
            this.state = 529;
            this.match(VerticalThings.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 553;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,56,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 551;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 533;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 534;
                    localctx.op = this.match(VerticalThings.POW);
                    this.state = 535;
                    this.basicExpr(15);
                    break;

                case 2:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 536;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 537;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VerticalThings.LSHIFT || _la===VerticalThings.RSHIFT)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 538;
                    this.basicExpr(7);
                    break;

                case 3:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 539;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 540;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (VerticalThings.BAND - 53)) | (1 << (VerticalThings.BOR - 53)) | (1 << (VerticalThings.BXOR - 53)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 541;
                    this.basicExpr(6);
                    break;

                case 4:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 542;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 543;
                    localctx.op = this.match(VerticalThings.CAT);
                    this.state = 544;
                    this.basicExpr(5);
                    break;

                case 5:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 545;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 546;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (VerticalThings.MUL - 35)) | (1 << (VerticalThings.DIV - 35)) | (1 << (VerticalThings.MOD - 35)) | (1 << (VerticalThings.HPROD - 35)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 547;
                    this.basicExpr(4);
                    break;

                case 6:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 548;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 549;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VerticalThings.PLUS || _la===VerticalThings.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 550;
                    this.basicExpr(3);
                    break;

                } 
            }
            this.state = 555;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,56,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function RelExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_relExpr;
    this.op = null; // Token
    return this;
}

RelExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelExprContext.prototype.constructor = RelExprContext;

RelExprContext.prototype.basicExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicExprContext);
    } else {
        return this.getTypedRuleContext(BasicExprContext,i);
    }
};

RelExprContext.prototype.GT = function() {
    return this.getToken(VerticalThings.GT, 0);
};

RelExprContext.prototype.GTE = function() {
    return this.getToken(VerticalThings.GTE, 0);
};

RelExprContext.prototype.LT = function() {
    return this.getToken(VerticalThings.LT, 0);
};

RelExprContext.prototype.LTE = function() {
    return this.getToken(VerticalThings.LTE, 0);
};

RelExprContext.prototype.EQ = function() {
    return this.getToken(VerticalThings.EQ, 0);
};

RelExprContext.prototype.NEQ = function() {
    return this.getToken(VerticalThings.NEQ, 0);
};

RelExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

RelExprContext.prototype.relExpr = function() {
    return this.getTypedRuleContext(RelExprContext,0);
};

RelExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

RelExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterRelExpr(this);
	}
};

RelExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitRelExpr(this);
	}
};

RelExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitRelExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.RelExprContext = RelExprContext;

VerticalThings.prototype.relExpr = function() {

    var localctx = new RelExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, VerticalThings.RULE_relExpr);
    var _la = 0; // Token type
    try {
        this.state = 564;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 556;
            this.basicExpr(0);
            this.state = 557;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (VerticalThings.LT - 41)) | (1 << (VerticalThings.GT - 41)) | (1 << (VerticalThings.LTE - 41)) | (1 << (VerticalThings.GTE - 41)) | (1 << (VerticalThings.EQ - 41)) | (1 << (VerticalThings.NEQ - 41)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 558;
            this.basicExpr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 560;
            this.match(VerticalThings.LP);
            this.state = 561;
            this.relExpr();
            this.state = 562;
            this.match(VerticalThings.RP);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_expr;
    this.op = null; // Token
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.LNOT = function() {
    return this.getToken(VerticalThings.LNOT, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.basicExpr = function() {
    return this.getTypedRuleContext(BasicExprContext,0);
};

ExprContext.prototype.relExpr = function() {
    return this.getTypedRuleContext(RelExprContext,0);
};

ExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

ExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

ExprContext.prototype.LOR = function() {
    return this.getToken(VerticalThings.LOR, 0);
};

ExprContext.prototype.LAND = function() {
    return this.getToken(VerticalThings.LAND, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VerticalThings.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 106;
    this.enterRecursionRule(localctx, 106, VerticalThings.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 575;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        switch(la_) {
        case 1:
            this.state = 567;
            this.match(VerticalThings.LNOT);
            this.state = 568;
            this.expr(5);
            break;

        case 2:
            this.state = 569;
            this.basicExpr(0);
            break;

        case 3:
            this.state = 570;
            this.relExpr();
            break;

        case 4:
            this.state = 571;
            this.match(VerticalThings.LP);
            this.state = 572;
            this.expr(0);
            this.state = 573;
            this.match(VerticalThings.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 582;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,59,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_expr);
                this.state = 577;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 578;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===VerticalThings.LAND || _la===VerticalThings.LOR)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 579;
                this.expr(3); 
            }
            this.state = 584;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,59,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ToplevelExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_toplevelExpr;
    return this;
}

ToplevelExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ToplevelExprContext.prototype.constructor = ToplevelExprContext;

ToplevelExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ToplevelExprContext.prototype.AWAIT = function() {
    return this.getToken(VerticalThings.AWAIT, 0);
};

ToplevelExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterToplevelExpr(this);
	}
};

ToplevelExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitToplevelExpr(this);
	}
};

ToplevelExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitToplevelExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ToplevelExprContext = ToplevelExprContext;

VerticalThings.prototype.toplevelExpr = function() {

    var localctx = new ToplevelExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, VerticalThings.RULE_toplevelExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 586;
        _la = this._input.LA(1);
        if(_la===VerticalThings.AWAIT) {
            this.state = 585;
            this.match(VerticalThings.AWAIT);
        }

        this.state = 588;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_numConstant;
    return this;
}

NumConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumConstantContext.prototype.constructor = NumConstantContext;

NumConstantContext.prototype.IntegerConstant = function() {
    return this.getToken(VerticalThings.IntegerConstant, 0);
};

NumConstantContext.prototype.FloatingConstant = function() {
    return this.getToken(VerticalThings.FloatingConstant, 0);
};

NumConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterNumConstant(this);
	}
};

NumConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitNumConstant(this);
	}
};

NumConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitNumConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.NumConstantContext = NumConstantContext;

VerticalThings.prototype.numConstant = function() {

    var localctx = new NumConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, VerticalThings.RULE_numConstant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 590;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.IntegerConstant || _la===VerticalThings.FloatingConstant)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_exprConstant;
    return this;
}

ExprConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprConstantContext.prototype.constructor = ExprConstantContext;

ExprConstantContext.prototype.numConstant = function() {
    return this.getTypedRuleContext(NumConstantContext,0);
};

ExprConstantContext.prototype.CharacterConstant = function() {
    return this.getToken(VerticalThings.CharacterConstant, 0);
};

ExprConstantContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

ExprConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterExprConstant(this);
	}
};

ExprConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitExprConstant(this);
	}
};

ExprConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitExprConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ExprConstantContext = ExprConstantContext;

VerticalThings.prototype.exprConstant = function() {

    var localctx = new ExprConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, VerticalThings.RULE_exprConstant);
    try {
        this.state = 595;
        switch(this._input.LA(1)) {
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 592;
            this.numConstant();
            break;
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 593;
            this.match(VerticalThings.CharacterConstant);
            break;
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 594;
            this.booleanLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.exprConstant = function() {
    return this.getTypedRuleContext(ExprConstantContext,0);
};

LiteralContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(VerticalThings.StringLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.LiteralContext = LiteralContext;

VerticalThings.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, VerticalThings.RULE_literal);
    try {
        this.state = 600;
        switch(this._input.LA(1)) {
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 597;
            this.exprConstant();
            break;
        case VerticalThings.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 598;
            this.arrayLiteral();
            break;
        case VerticalThings.StringLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 599;
            this.match(VerticalThings.StringLiteral);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


VerticalThings.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 51:
			return this.basicExpr_sempred(localctx, predIndex);
	case 53:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

VerticalThings.prototype.basicExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VerticalThings.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.VerticalThings = VerticalThings;
