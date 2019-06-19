// Generated from VerticalThings.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VerticalThingsListener = require('./VerticalThingsListener').VerticalThingsListener;
var VerticalThingsVisitor = require('./VerticalThingsVisitor').VerticalThingsVisitor;

var grammarFileName = "VerticalThings.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003R\u0215\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0003\u0002\u0007\u0002",
    "p\n\u0002\f\u0002\u000e\u0002s\u000b\u0002\u0003\u0002\u0007\u0002v",
    "\n\u0002\f\u0002\u000e\u0002y\u000b\u0002\u0003\u0002\u0007\u0002|\n",
    "\u0002\f\u0002\u000e\u0002\u007f\u000b\u0002\u0003\u0002\u0007\u0002",
    "\u0082\n\u0002\f\u0002\u000e\u0002\u0085\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u008b\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005\u0094\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007",
    "\u0006\u0099\n\u0006\f\u0006\u000e\u0006\u009c\u000b\u0006\u0003\u0006",
    "\u0005\u0006\u009f\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u00af\n\n\f\n\u000e\n\u00b2\u000b\n\u0005",
    "\n\u00b4\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u00bb\n\u000b\u0003\f\u0003\f\u0003\f\u0005\f\u00c0\n\f\u0003",
    "\r\u0005\r\u00c3\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00c9\n",
    "\r\f\r\u000e\r\u00cc\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0005\u000f\u00d3\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0006\u000f\u00d9\n\u000f\r\u000f\u000e\u000f\u00da",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u00e1\n",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00f1\n\u0015\u0003\u0015",
    "\u0005\u0015\u00f4\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007",
    "\u0016\u00f9\n\u0016\f\u0016\u000e\u0016\u00fc\u000b\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u0104\n\u0018\u0003\u0019\u0005\u0019\u0107\n\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u010f",
    "\n\u001a\f\u001a\u000e\u001a\u0112\u000b\u001a\u0003\u001b\u0003\u001b",
    "\u0007\u001b\u0116\n\u001b\f\u001b\u000e\u001b\u0119\u000b\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u0120",
    "\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0005\u001d\u0128\n\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0007\u001e\u012d\n\u001e\f\u001e\u000e\u001e\u0130\u000b\u001e",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0005!\u0140",
    "\n!\u0003!\u0005!\u0143\n!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0005#\u0158\n#\u0003$\u0003$\u0003$\u0003$\u0003",
    "%\u0005%\u015f\n%\u0003%\u0003%\u0003%\u0003%\u0005%\u0165\n%\u0003",
    "%\u0003%\u0003%\u0007%\u016a\n%\f%\u000e%\u016d\u000b%\u0003%\u0007",
    "%\u0170\n%\f%\u000e%\u0173\u000b%\u0003%\u0003%\u0003&\u0003&\u0003",
    "&\u0007&\u017a\n&\f&\u000e&\u017d\u000b&\u0003\'\u0003\'\u0003\'\u0006",
    "\'\u0182\n\'\r\'\u000e\'\u0183\u0003(\u0003(\u0005(\u0188\n(\u0003(",
    "\u0003(\u0005(\u018c\n(\u0003(\u0003(\u0003)\u0003)\u0005)\u0192\n)",
    "\u0003)\u0003)\u0005)\u0196\n)\u0003*\u0003*\u0003*\u0007*\u019b\n*",
    "\f*\u000e*\u019e\u000b*\u0003*\u0005*\u01a1\n*\u0003+\u0003+\u0003+",
    "\u0003+\u0006+\u01a7\n+\r+\u000e+\u01a8\u0003,\u0003,\u0003,\u0003-",
    "\u0003-\u0003-\u0005-\u01b1\n-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0005/\u01c5\n/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0007/\u01d9\n/\f/\u000e/\u01dc\u000b/\u00030\u0003",
    "0\u00030\u00030\u00030\u00030\u00030\u00030\u00050\u01e6\n0\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00051\u01f1\n1\u0003",
    "1\u00031\u00031\u00071\u01f6\n1\f1\u000e1\u01f9\u000b1\u00032\u0003",
    "2\u00032\u00052\u01fe\n2\u00033\u00033\u00033\u00053\u0203\n3\u0003",
    "4\u00034\u00034\u00034\u00035\u00035\u00036\u00036\u00036\u00056\u020e",
    "\n6\u00037\u00037\u00037\u00057\u0213\n7\u00037\u0002\u0004\\`8\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjl\u0002\u0010\u0003\u0002\u0017",
    "\u0018\u0003\u0002IJ\u0004\u0002!!##\u0003\u0002?G\u0005\u0002\u0006",
    "\u0007\u0015\u0015?G\u0004\u0002&&;;\u0003\u000278\u0004\u00029:<<\u0004",
    "\u0002\')++\u0003\u0002%&\u0003\u0002-2\u0003\u000245\u0003\u0002\u0004",
    "\u0005\u0003\u0002JK\u022c\u0002q\u0003\u0002\u0002\u0002\u0004\u0086",
    "\u0003\u0002\u0002\u0002\u0006\u008c\u0003\u0002\u0002\u0002\b\u0093",
    "\u0003\u0002\u0002\u0002\n\u0095\u0003\u0002\u0002\u0002\f\u00a0\u0003",
    "\u0002\u0002\u0002\u000e\u00a4\u0003\u0002\u0002\u0002\u0010\u00a8\u0003",
    "\u0002\u0002\u0002\u0012\u00aa\u0003\u0002\u0002\u0002\u0014\u00ba\u0003",
    "\u0002\u0002\u0002\u0016\u00bc\u0003\u0002\u0002\u0002\u0018\u00c2\u0003",
    "\u0002\u0002\u0002\u001a\u00cf\u0003\u0002\u0002\u0002\u001c\u00d2\u0003",
    "\u0002\u0002\u0002\u001e\u00dc\u0003\u0002\u0002\u0002 \u00e0\u0003",
    "\u0002\u0002\u0002\"\u00e2\u0003\u0002\u0002\u0002$\u00e8\u0003\u0002",
    "\u0002\u0002&\u00ea\u0003\u0002\u0002\u0002(\u00f0\u0003\u0002\u0002",
    "\u0002*\u00f5\u0003\u0002\u0002\u0002,\u00fd\u0003\u0002\u0002\u0002",
    ".\u0103\u0003\u0002\u0002\u00020\u0106\u0003\u0002\u0002\u00022\u010b",
    "\u0003\u0002\u0002\u00024\u0113\u0003\u0002\u0002\u00026\u011c\u0003",
    "\u0002\u0002\u00028\u0121\u0003\u0002\u0002\u0002:\u0129\u0003\u0002",
    "\u0002\u0002<\u0131\u0003\u0002\u0002\u0002>\u0137\u0003\u0002\u0002",
    "\u0002@\u0142\u0003\u0002\u0002\u0002B\u0147\u0003\u0002\u0002\u0002",
    "D\u0157\u0003\u0002\u0002\u0002F\u0159\u0003\u0002\u0002\u0002H\u015e",
    "\u0003\u0002\u0002\u0002J\u0176\u0003\u0002\u0002\u0002L\u017e\u0003",
    "\u0002\u0002\u0002N\u0187\u0003\u0002\u0002\u0002P\u0191\u0003\u0002",
    "\u0002\u0002R\u0197\u0003\u0002\u0002\u0002T\u01a6\u0003\u0002\u0002",
    "\u0002V\u01aa\u0003\u0002\u0002\u0002X\u01ad\u0003\u0002\u0002\u0002",
    "Z\u01b2\u0003\u0002\u0002\u0002\\\u01c4\u0003\u0002\u0002\u0002^\u01e5",
    "\u0003\u0002\u0002\u0002`\u01f0\u0003\u0002\u0002\u0002b\u01fa\u0003",
    "\u0002\u0002\u0002d\u0202\u0003\u0002\u0002\u0002f\u0204\u0003\u0002",
    "\u0002\u0002h\u0208\u0003\u0002\u0002\u0002j\u020d\u0003\u0002\u0002",
    "\u0002l\u0212\u0003\u0002\u0002\u0002np\u0005\f\u0007\u0002on\u0003",
    "\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002",
    "qr\u0003\u0002\u0002\u0002rw\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002",
    "\u0002tv\u0005\u000e\b\u0002ut\u0003\u0002\u0002\u0002vy\u0003\u0002",
    "\u0002\u0002wu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x}\u0003",
    "\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002z|\u0005\u0018\r\u0002{",
    "z\u0003\u0002\u0002\u0002|\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002",
    "\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0083\u0003\u0002\u0002\u0002",
    "\u007f}\u0003\u0002\u0002\u0002\u0080\u0082\u0005H%\u0002\u0081\u0080",
    "\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081",
    "\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0003",
    "\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0007\n\u0002\u0002\u0087\u0088\u0007I\u0002\u0002\u0088\u008a\u0005",
    "\u0006\u0004\u0002\u0089\u008b\u0007\u001a\u0002\u0002\u008a\u0089\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u0005\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0007\u001d\u0002\u0002\u008d\u008e\u0005",
    "\n\u0006\u0002\u008e\u008f\u0007\u001e\u0002\u0002\u008f\u0007\u0003",
    "\u0002\u0002\u0002\u0090\u0094\u0005J&\u0002\u0091\u0094\u0005N(\u0002",
    "\u0092\u0094\u0005\u0006\u0004\u0002\u0093\u0090\u0003\u0002\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0093\u0092\u0003\u0002\u0002\u0002",
    "\u0094\t\u0003\u0002\u0002\u0002\u0095\u009a\u0005\b\u0005\u0002\u0096",
    "\u0097\u0007!\u0002\u0002\u0097\u0099\u0005\b\u0005\u0002\u0098\u0096",
    "\u0003\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002\u009a\u0098",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009e",
    "\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u009f",
    "\u0007!\u0002\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009e\u009f",
    "\u0003\u0002\u0002\u0002\u009f\u000b\u0003\u0002\u0002\u0002\u00a0\u00a1",
    "\u0007\b\u0002\u0002\u00a1\u00a2\u0007I\u0002\u0002\u00a2\u00a3\u0007",
    "\u001a\u0002\u0002\u00a3\r\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007",
    "\u0014\u0002\u0002\u00a5\u00a6\u0007I\u0002\u0002\u00a6\u00a7\u0007",
    "\u001a\u0002\u0002\u00a7\u000f\u0003\u0002\u0002\u0002\u00a8\u00a9\t",
    "\u0002\u0002\u0002\u00a9\u0011\u0003\u0002\u0002\u0002\u00aa\u00b3\u0007",
    "\u001d\u0002\u0002\u00ab\u00b0\u0005`1\u0002\u00ac\u00ad\u0007!\u0002",
    "\u0002\u00ad\u00af\u0005`1\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002",
    "\u00af\u00b2\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002",
    "\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u00ab\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0007\u001e\u0002\u0002\u00b6\u0013\u0003\u0002\u0002\u0002",
    "\u00b7\u00bb\u0005`1\u0002\u00b8\u00bb\u0007N\u0002\u0002\u00b9\u00bb",
    "\u0005\u0012\n\u0002\u00ba\u00b7\u0003\u0002\u0002\u0002\u00ba\u00b8",
    "\u0003\u0002\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb\u0015",
    "\u0003\u0002\u0002\u0002\u00bc\u00bf\u0007I\u0002\u0002\u00bd\u00be",
    "\u00073\u0002\u0002\u00be\u00c0\u0005\u0014\u000b\u0002\u00bf\u00bd",
    "\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u0017",
    "\u0003\u0002\u0002\u0002\u00c1\u00c3\u0007\u000f\u0002\u0002\u00c2\u00c1",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c4",
    "\u0003\u0002\u0002\u0002\u00c4\u00c5\u0005(\u0015\u0002\u00c5\u00ca",
    "\u0005\u0016\f\u0002\u00c6\u00c7\u0007!\u0002\u0002\u00c7\u00c9\u0005",
    "\u0016\f\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003",
    "\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003",
    "\u0002\u0002\u0002\u00cb\u00cd\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\u0007\u001a\u0002\u0002\u00ce\u0019\u0003",
    "\u0002\u0002\u0002\u00cf\u00d0\t\u0003\u0002\u0002\u00d0\u001b\u0003",
    "\u0002\u0002\u0002\u00d1\u00d3\u0007\u0019\u0002\u0002\u00d2\u00d1\u0003",
    "\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d8\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\u0007\u001f\u0002\u0002\u00d5\u00d6\u0005",
    "\u001a\u000e\u0002\u00d6\u00d7\u0007 \u0002\u0002\u00d7\u00d9\u0003",
    "\u0002\u0002\u0002\u00d8\u00d4\u0003\u0002\u0002\u0002\u00d9\u00da\u0003",
    "\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003",
    "\u0002\u0002\u0002\u00db\u001d\u0003\u0002\u0002\u0002\u00dc\u00dd\t",
    "\u0003\u0002\u0002\u00dd\u001f\u0003\u0002\u0002\u0002\u00de\u00e1\u0007",
    "I\u0002\u0002\u00df\u00e1\u0005h5\u0002\u00e0\u00de\u0003\u0002\u0002",
    "\u0002\u00e0\u00df\u0003\u0002\u0002\u0002\u00e1!\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\u0007\u001f\u0002\u0002\u00e3\u00e4\u0005 \u0011",
    "\u0002\u00e4\u00e5\t\u0004\u0002\u0002\u00e5\u00e6\u0005 \u0011\u0002",
    "\u00e6\u00e7\u0007 \u0002\u0002\u00e7#\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\t\u0005\u0002\u0002\u00e9%\u0003\u0002\u0002\u0002\u00ea\u00eb",
    "\t\u0006\u0002\u0002\u00eb\'\u0003\u0002\u0002\u0002\u00ec\u00f1\u0005",
    "J&\u0002\u00ed\u00f1\u0005L\'\u0002\u00ee\u00f1\u0005\"\u0012\u0002",
    "\u00ef\u00f1\u0005&\u0014\u0002\u00f0\u00ec\u0003\u0002\u0002\u0002",
    "\u00f0\u00ed\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002",
    "\u00f0\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f3\u0003\u0002\u0002\u0002",
    "\u00f2\u00f4\u0005\u001c\u000f\u0002\u00f3\u00f2\u0003\u0002\u0002\u0002",
    "\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4)\u0003\u0002\u0002\u0002",
    "\u00f5\u00fa\u0005(\u0015\u0002\u00f6\u00f7\u0007!\u0002\u0002\u00f7",
    "\u00f9\u0005(\u0015\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9",
    "\u00fc\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa",
    "\u00fb\u0003\u0002\u0002\u0002\u00fb+\u0003\u0002\u0002\u0002\u00fc",
    "\u00fa\u0003\u0002\u0002\u0002\u00fd\u00fe\u0007\u001b\u0002\u0002\u00fe",
    "\u00ff\u0005*\u0016\u0002\u00ff\u0100\u0007\u001c\u0002\u0002\u0100",
    "-\u0003\u0002\u0002\u0002\u0101\u0104\u0005(\u0015\u0002\u0102\u0104",
    "\u0005,\u0017\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103\u0102",
    "\u0003\u0002\u0002\u0002\u0104/\u0003\u0002\u0002\u0002\u0105\u0107",
    "\u0007\u000f\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109",
    "\u0005(\u0015\u0002\u0109\u010a\u0007I\u0002\u0002\u010a1\u0003\u0002",
    "\u0002\u0002\u010b\u0110\u00050\u0019\u0002\u010c\u010d\u0007!\u0002",
    "\u0002\u010d\u010f\u00050\u0019\u0002\u010e\u010c\u0003\u0002\u0002",
    "\u0002\u010f\u0112\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002",
    "\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u01113\u0003\u0002\u0002",
    "\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0113\u0117\u0007\u001d\u0002",
    "\u0002\u0114\u0116\u0005D#\u0002\u0115\u0114\u0003\u0002\u0002\u0002",
    "\u0116\u0119\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u011a\u0003\u0002\u0002\u0002",
    "\u0119\u0117\u0003\u0002\u0002\u0002\u011a\u011b\u0007\u001e\u0002\u0002",
    "\u011b5\u0003\u0002\u0002\u0002\u011c\u011f\u0007\u0011\u0002\u0002",
    "\u011d\u0120\u00054\u001b\u0002\u011e\u0120\u00058\u001d\u0002\u011f",
    "\u011d\u0003\u0002\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002\u0120",
    "7\u0003\u0002\u0002\u0002\u0121\u0122\u0007\u0010\u0002\u0002\u0122",
    "\u0123\u0007\u001b\u0002\u0002\u0123\u0124\u0005`1\u0002\u0124\u0125",
    "\u0007\u001c\u0002\u0002\u0125\u0127\u00054\u001b\u0002\u0126\u0128",
    "\u00056\u001c\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u0127\u0128",
    "\u0003\u0002\u0002\u0002\u01289\u0003\u0002\u0002\u0002\u0129\u012e",
    "\u0007I\u0002\u0002\u012a\u012b\u0007!\u0002\u0002\u012b\u012d\u0007",
    "I\u0002\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012d\u0130\u0003",
    "\u0002\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002\u012e\u012f\u0003",
    "\u0002\u0002\u0002\u012f;\u0003\u0002\u0002\u0002\u0130\u012e\u0003",
    "\u0002\u0002\u0002\u0131\u0132\u0007\u0012\u0002\u0002\u0132\u0133\u0005",
    ":\u001e\u0002\u0133\u0134\u0007\u0013\u0002\u0002\u0134\u0135\u0005",
    "\"\u0012\u0002\u0135\u0136\u00054\u001b\u0002\u0136=\u0003\u0002\u0002",
    "\u0002\u0137\u0138\u0007\u0016\u0002\u0002\u0138\u0139\u0007\u001b\u0002",
    "\u0002\u0139\u013a\u0005`1\u0002\u013a\u013b\u0007\u001c\u0002\u0002",
    "\u013b\u013c\u00054\u001b\u0002\u013c?\u0003\u0002\u0002\u0002\u013d",
    "\u013f\u0005J&\u0002\u013e\u0140\u0005T+\u0002\u013f\u013e\u0003\u0002",
    "\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0143\u0003\u0002",
    "\u0002\u0002\u0141\u0143\u0005F$\u0002\u0142\u013d\u0003\u0002\u0002",
    "\u0002\u0142\u0141\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002",
    "\u0002\u0144\u0145\u00073\u0002\u0002\u0145\u0146\u0005d3\u0002\u0146",
    "A\u0003\u0002\u0002\u0002\u0147\u0148\u0007H\u0002\u0002\u0148\u0149",
    "\u0005d3\u0002\u0149C\u0003\u0002\u0002\u0002\u014a\u0158\u00054\u001b",
    "\u0002\u014b\u0158\u00058\u001d\u0002\u014c\u0158\u0005<\u001f\u0002",
    "\u014d\u0158\u0005> \u0002\u014e\u014f\u0005@!\u0002\u014f\u0150\u0007",
    "\u001a\u0002\u0002\u0150\u0158\u0003\u0002\u0002\u0002\u0151\u0152\u0005",
    "N(\u0002\u0152\u0153\u0007\u001a\u0002\u0002\u0153\u0158\u0003\u0002",
    "\u0002\u0002\u0154\u0155\u0005B\"\u0002\u0155\u0156\u0007\u001a\u0002",
    "\u0002\u0156\u0158\u0003\u0002\u0002\u0002\u0157\u014a\u0003\u0002\u0002",
    "\u0002\u0157\u014b\u0003\u0002\u0002\u0002\u0157\u014c\u0003\u0002\u0002",
    "\u0002\u0157\u014d\u0003\u0002\u0002\u0002\u0157\u014e\u0003\u0002\u0002",
    "\u0002\u0157\u0151\u0003\u0002\u0002\u0002\u0157\u0154\u0003\u0002\u0002",
    "\u0002\u0158E\u0003\u0002\u0002\u0002\u0159\u015a\u0007\u001b\u0002",
    "\u0002\u015a\u015b\u0005:\u001e\u0002\u015b\u015c\u0007\u001c\u0002",
    "\u0002\u015cG\u0003\u0002\u0002\u0002\u015d\u015f\u0007\u0003\u0002",
    "\u0002\u015e\u015d\u0003\u0002\u0002\u0002\u015e\u015f\u0003\u0002\u0002",
    "\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u0160\u0161\u0005.\u0018",
    "\u0002\u0161\u0162\u0007I\u0002\u0002\u0162\u0164\u0007\u001b\u0002",
    "\u0002\u0163\u0165\u00052\u001a\u0002\u0164\u0163\u0003\u0002\u0002",
    "\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0166\u0003\u0002\u0002",
    "\u0002\u0166\u0167\u0007\u001c\u0002\u0002\u0167\u016b\u0007\u001d\u0002",
    "\u0002\u0168\u016a\u0005\u0018\r\u0002\u0169\u0168\u0003\u0002\u0002",
    "\u0002\u016a\u016d\u0003\u0002\u0002\u0002\u016b\u0169\u0003\u0002\u0002",
    "\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u0171\u0003\u0002\u0002",
    "\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016e\u0170\u0005D#\u0002",
    "\u016f\u016e\u0003\u0002\u0002\u0002\u0170\u0173\u0003\u0002\u0002\u0002",
    "\u0171\u016f\u0003\u0002\u0002\u0002\u0171\u0172\u0003\u0002\u0002\u0002",
    "\u0172\u0174\u0003\u0002\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002",
    "\u0174\u0175\u0007\u001e\u0002\u0002\u0175I\u0003\u0002\u0002\u0002",
    "\u0176\u017b\u0007I\u0002\u0002\u0177\u0178\u0007$\u0002\u0002\u0178",
    "\u017a\u0007I\u0002\u0002\u0179\u0177\u0003\u0002\u0002\u0002\u017a",
    "\u017d\u0003\u0002\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017b",
    "\u017c\u0003\u0002\u0002\u0002\u017cK\u0003\u0002\u0002\u0002\u017d",
    "\u017b\u0003\u0002\u0002\u0002\u017e\u0181\u0007I\u0002\u0002\u017f",
    "\u0180\u0007\"\u0002\u0002\u0180\u0182\u0007I\u0002\u0002\u0181\u017f",
    "\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002\u0002\u0002\u0183\u0181",
    "\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184M",
    "\u0003\u0002\u0002\u0002\u0185\u0188\u0005J&\u0002\u0186\u0188\u0005",
    "L\'\u0002\u0187\u0185\u0003\u0002\u0002\u0002\u0187\u0186\u0003\u0002",
    "\u0002\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u018b\u0007\u001b",
    "\u0002\u0002\u018a\u018c\u0005R*\u0002\u018b\u018a\u0003\u0002\u0002",
    "\u0002\u018b\u018c\u0003\u0002\u0002\u0002\u018c\u018d\u0003\u0002\u0002",
    "\u0002\u018d\u018e\u0007\u001c\u0002\u0002\u018eO\u0003\u0002\u0002",
    "\u0002\u018f\u0190\u0007I\u0002\u0002\u0190\u0192\u00073\u0002\u0002",
    "\u0191\u018f\u0003\u0002\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002",
    "\u0192\u0195\u0003\u0002\u0002\u0002\u0193\u0196\u0005`1\u0002\u0194",
    "\u0196\u0007N\u0002\u0002\u0195\u0193\u0003\u0002\u0002\u0002\u0195",
    "\u0194\u0003\u0002\u0002\u0002\u0196Q\u0003\u0002\u0002\u0002\u0197",
    "\u019c\u0005P)\u0002\u0198\u0199\u0007!\u0002\u0002\u0199\u019b\u0005",
    "P)\u0002\u019a\u0198\u0003\u0002\u0002\u0002\u019b\u019e\u0003\u0002",
    "\u0002\u0002\u019c\u019a\u0003\u0002\u0002\u0002\u019c\u019d\u0003\u0002",
    "\u0002\u0002\u019d\u01a0\u0003\u0002\u0002\u0002\u019e\u019c\u0003\u0002",
    "\u0002\u0002\u019f\u01a1\u0007!\u0002\u0002\u01a0\u019f\u0003\u0002",
    "\u0002\u0002\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1S\u0003\u0002",
    "\u0002\u0002\u01a2\u01a3\u0007\u001f\u0002\u0002\u01a3\u01a4\u0005`",
    "1\u0002\u01a4\u01a5\u0007 \u0002\u0002\u01a5\u01a7\u0003\u0002\u0002",
    "\u0002\u01a6\u01a2\u0003\u0002\u0002\u0002\u01a7\u01a8\u0003\u0002\u0002",
    "\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002",
    "\u0002\u01a9U\u0003\u0002\u0002\u0002\u01aa\u01ab\u0007I\u0002\u0002",
    "\u01ab\u01ac\u0005T+\u0002\u01acW\u0003\u0002\u0002\u0002\u01ad\u01b0",
    "\u00079\u0002\u0002\u01ae\u01b1\u0005V,\u0002\u01af\u01b1\u0005J&\u0002",
    "\u01b0\u01ae\u0003\u0002\u0002\u0002\u01b0\u01af\u0003\u0002\u0002\u0002",
    "\u01b1Y\u0003\u0002\u0002\u0002\u01b2\u01b3\u0005$\u0013\u0002\u01b3",
    "\u01b4\u0007\u001b\u0002\u0002\u01b4\u01b5\u0005\\/\u0002\u01b5\u01b6",
    "\u0007\u001c\u0002\u0002\u01b6[\u0003\u0002\u0002\u0002\u01b7\u01b8",
    "\b/\u0001\u0002\u01b8\u01b9\t\u0007\u0002\u0002\u01b9\u01c5\u0005\\",
    "/\t\u01ba\u01c5\u0005Z.\u0002\u01bb\u01c5\u0005J&\u0002\u01bc\u01c5",
    "\u0005V,\u0002\u01bd\u01c5\u0005X-\u0002\u01be\u01c5\u0005N(\u0002\u01bf",
    "\u01c5\u0005l7\u0002\u01c0\u01c1\u0007\u001b\u0002\u0002\u01c1\u01c2",
    "\u0005\\/\u0002\u01c2\u01c3\u0007\u001c\u0002\u0002\u01c3\u01c5\u0003",
    "\u0002\u0002\u0002\u01c4\u01b7\u0003\u0002\u0002\u0002\u01c4\u01ba\u0003",
    "\u0002\u0002\u0002\u01c4\u01bb\u0003\u0002\u0002\u0002\u01c4\u01bc\u0003",
    "\u0002\u0002\u0002\u01c4\u01bd\u0003\u0002\u0002\u0002\u01c4\u01be\u0003",
    "\u0002\u0002\u0002\u01c4\u01bf\u0003\u0002\u0002\u0002\u01c4\u01c0\u0003",
    "\u0002\u0002\u0002\u01c5\u01da\u0003\u0002\u0002\u0002\u01c6\u01c7\f",
    "\u0010\u0002\u0002\u01c7\u01c8\u0007*\u0002\u0002\u01c8\u01d9\u0005",
    "\\/\u0011\u01c9\u01ca\f\b\u0002\u0002\u01ca\u01cb\t\b\u0002\u0002\u01cb",
    "\u01d9\u0005\\/\t\u01cc\u01cd\f\u0007\u0002\u0002\u01cd\u01ce\t\t\u0002",
    "\u0002\u01ce\u01d9\u0005\\/\b\u01cf\u01d0\f\u0006\u0002\u0002\u01d0",
    "\u01d1\u0007,\u0002\u0002\u01d1\u01d9\u0005\\/\u0007\u01d2\u01d3\f\u0005",
    "\u0002\u0002\u01d3\u01d4\t\n\u0002\u0002\u01d4\u01d9\u0005\\/\u0006",
    "\u01d5\u01d6\f\u0004\u0002\u0002\u01d6\u01d7\t\u000b\u0002\u0002\u01d7",
    "\u01d9\u0005\\/\u0005\u01d8\u01c6\u0003\u0002\u0002\u0002\u01d8\u01c9",
    "\u0003\u0002\u0002\u0002\u01d8\u01cc\u0003\u0002\u0002\u0002\u01d8\u01cf",
    "\u0003\u0002\u0002\u0002\u01d8\u01d2\u0003\u0002\u0002\u0002\u01d8\u01d5",
    "\u0003\u0002\u0002\u0002\u01d9\u01dc\u0003\u0002\u0002\u0002\u01da\u01d8",
    "\u0003\u0002\u0002\u0002\u01da\u01db\u0003\u0002\u0002\u0002\u01db]",
    "\u0003\u0002\u0002\u0002\u01dc\u01da\u0003\u0002\u0002\u0002\u01dd\u01de",
    "\u0005\\/\u0002\u01de\u01df\t\f\u0002\u0002\u01df\u01e0\u0005\\/\u0002",
    "\u01e0\u01e6\u0003\u0002\u0002\u0002\u01e1\u01e2\u0007\u001b\u0002\u0002",
    "\u01e2\u01e3\u0005^0\u0002\u01e3\u01e4\u0007\u001c\u0002\u0002\u01e4",
    "\u01e6\u0003\u0002\u0002\u0002\u01e5\u01dd\u0003\u0002\u0002\u0002\u01e5",
    "\u01e1\u0003\u0002\u0002\u0002\u01e6_\u0003\u0002\u0002\u0002\u01e7",
    "\u01e8\b1\u0001\u0002\u01e8\u01e9\u00076\u0002\u0002\u01e9\u01f1\u0005",
    "`1\u0007\u01ea\u01f1\u0005\\/\u0002\u01eb\u01f1\u0005^0\u0002\u01ec",
    "\u01ed\u0007\u001b\u0002\u0002\u01ed\u01ee\u0005`1\u0002\u01ee\u01ef",
    "\u0007\u001c\u0002\u0002\u01ef\u01f1\u0003\u0002\u0002\u0002\u01f0\u01e7",
    "\u0003\u0002\u0002\u0002\u01f0\u01ea\u0003\u0002\u0002\u0002\u01f0\u01eb",
    "\u0003\u0002\u0002\u0002\u01f0\u01ec\u0003\u0002\u0002\u0002\u01f1\u01f7",
    "\u0003\u0002\u0002\u0002\u01f2\u01f3\f\u0004\u0002\u0002\u01f3\u01f4",
    "\t\r\u0002\u0002\u01f4\u01f6\u0005`1\u0005\u01f5\u01f2\u0003\u0002\u0002",
    "\u0002\u01f6\u01f9\u0003\u0002\u0002\u0002\u01f7\u01f5\u0003\u0002\u0002",
    "\u0002\u01f7\u01f8\u0003\u0002\u0002\u0002\u01f8a\u0003\u0002\u0002",
    "\u0002\u01f9\u01f7\u0003\u0002\u0002\u0002\u01fa\u01fd\t\u000e\u0002",
    "\u0002\u01fb\u01fe\u0005N(\u0002\u01fc\u01fe\u0007I\u0002\u0002\u01fd",
    "\u01fb\u0003\u0002\u0002\u0002\u01fd\u01fc\u0003\u0002\u0002\u0002\u01fe",
    "c\u0003\u0002\u0002\u0002\u01ff\u0203\u0005b2\u0002\u0200\u0203\u0005",
    "f4\u0002\u0201\u0203\u0005`1\u0002\u0202\u01ff\u0003\u0002\u0002\u0002",
    "\u0202\u0200\u0003\u0002\u0002\u0002\u0202\u0201\u0003\u0002\u0002\u0002",
    "\u0203e\u0003\u0002\u0002\u0002\u0204\u0205\u0007\u001b\u0002\u0002",
    "\u0205\u0206\u0005R*\u0002\u0206\u0207\u0007\u001c\u0002\u0002\u0207",
    "g\u0003\u0002\u0002\u0002\u0208\u0209\t\u000f\u0002\u0002\u0209i\u0003",
    "\u0002\u0002\u0002\u020a\u020e\u0005h5\u0002\u020b\u020e\u0007M\u0002",
    "\u0002\u020c\u020e\u0005\u0010\t\u0002\u020d\u020a\u0003\u0002\u0002",
    "\u0002\u020d\u020b\u0003\u0002\u0002\u0002\u020d\u020c\u0003\u0002\u0002",
    "\u0002\u020ek\u0003\u0002\u0002\u0002\u020f\u0213\u0005j6\u0002\u0210",
    "\u0213\u0005\u0012\n\u0002\u0211\u0213\u0007N\u0002\u0002\u0212\u020f",
    "\u0003\u0002\u0002\u0002\u0212\u0210\u0003\u0002\u0002\u0002\u0212\u0211",
    "\u0003\u0002\u0002\u0002\u0213m\u0003\u0002\u0002\u00028qw}\u0083\u008a",
    "\u0093\u009a\u009e\u00b0\u00b3\u00ba\u00bf\u00c2\u00ca\u00d2\u00da\u00e0",
    "\u00f0\u00f3\u00fa\u0103\u0106\u0110\u0117\u011f\u0127\u012e\u013f\u0142",
    "\u0157\u015e\u0164\u016b\u0171\u017b\u0183\u0187\u018b\u0191\u0195\u019c",
    "\u01a0\u01a8\u01b0\u01c4\u01d8\u01da\u01e5\u01f0\u01f7\u01fd\u0202\u020d",
    "\u0212"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'async'", "'await'", "'signal'", "'future'", 
                     "'event'", "'using'", "'module'", "'pipeline'", "'flow'", 
                     "'use'", "'config'", "'default'", "'const'", "'if'", 
                     "'else'", "'for'", "'in'", "'include'", "'void'", "'while'", 
                     "'true'", "'false'", "'ring'", "';'", "'('", "')'", 
                     "'{'", "'}'", "'['", "']'", "','", "'::'", "':'", "'.'", 
                     "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'(*)'", 
                     "'(.)'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
                     "'='", "'&&'", "'||'", "'!'", "'<<'", "'>>'", "'&'", 
                     "'|'", "'~'", "'^'", "'@effects'", "':='", "'int'", 
                     "'float'", "'boolean'", "'int8_t'", "'uint8_t'", "'int16_t'", 
                     "'uint16_t'", "'int32_t'", "'uint32_t'", "'return'" ];

var symbolicNames = [ null, "ASYNC", "AWAIT", "SIGNAL", "FUTURE", "EVENT", 
                      "USING", "MODULE", "PIPELINE", "FLOW", "USE", "CONFIG", 
                      "DEFAULT", "CONST", "IF", "ELSE", "FOR", "IN", "INCLUDE", 
                      "VOID", "WHILE", "TRUE", "FALSE", "RING", "SEMI", 
                      "LP", "RP", "LB", "RB", "LS", "RS", "COMMA", "DCOLON", 
                      "COLON", "PERIOD", "PLUS", "MINUS", "MUL", "DIV", 
                      "MOD", "POW", "HPROD", "CAT", "LT", "GT", "LTE", "GTE", 
                      "EQ", "NEQ", "ASSIGN", "LAND", "LOR", "LNOT", "LSHIFT", 
                      "RSHIFT", "BAND", "BOR", "BNOT", "BXOR", "EFFECTS", 
                      "EASSIGN", "INT", "FLOAT", "BOOLEAN", "I8", "U8", 
                      "I16", "U16", "I32", "U32", "RETURN", "Identifier", 
                      "IntegerConstant", "FloatingConstant", "DigitSequence", 
                      "CharacterConstant", "StringLiteral", "Whitespace", 
                      "Newline", "BlockComment", "LineComment" ];

var ruleNames =  [ "module", "pipelineDef", "pipelineBlock", "pipelineEntry", 
                   "pipelineList", "usingSpec", "includeSpec", "booleanLiteral", 
                   "arrayLiteral", "initValue", "varIdDef", "varDef", "dimValue", 
                   "dimensionSpec", "intVal", "numVal", "rangeType", "castableType", 
                   "primitiveType", "varType", "varTypeList", "tupleType", 
                   "returnType", "formalParam", "formalParams", "stmtBlock", 
                   "elseStmt", "ifStmt", "identifierList", "forStmt", "whileStmt", 
                   "assignStmt", "returnStmt", "stmt", "tupleIds", "funcDef", 
                   "qualIdentifier", "cppQualIdentifier", "functionCall", 
                   "actualParam", "actualParams", "dimensionExpr", "arrayExpr", 
                   "addressExpr", "castExpr", "basicExpr", "relExpr", "expr", 
                   "syncExpr", "toplevelExpr", "tupleExpr", "numConstant", 
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
VerticalThings.SIGNAL = 3;
VerticalThings.FUTURE = 4;
VerticalThings.EVENT = 5;
VerticalThings.USING = 6;
VerticalThings.MODULE = 7;
VerticalThings.PIPELINE = 8;
VerticalThings.FLOW = 9;
VerticalThings.USE = 10;
VerticalThings.CONFIG = 11;
VerticalThings.DEFAULT = 12;
VerticalThings.CONST = 13;
VerticalThings.IF = 14;
VerticalThings.ELSE = 15;
VerticalThings.FOR = 16;
VerticalThings.IN = 17;
VerticalThings.INCLUDE = 18;
VerticalThings.VOID = 19;
VerticalThings.WHILE = 20;
VerticalThings.TRUE = 21;
VerticalThings.FALSE = 22;
VerticalThings.RING = 23;
VerticalThings.SEMI = 24;
VerticalThings.LP = 25;
VerticalThings.RP = 26;
VerticalThings.LB = 27;
VerticalThings.RB = 28;
VerticalThings.LS = 29;
VerticalThings.RS = 30;
VerticalThings.COMMA = 31;
VerticalThings.DCOLON = 32;
VerticalThings.COLON = 33;
VerticalThings.PERIOD = 34;
VerticalThings.PLUS = 35;
VerticalThings.MINUS = 36;
VerticalThings.MUL = 37;
VerticalThings.DIV = 38;
VerticalThings.MOD = 39;
VerticalThings.POW = 40;
VerticalThings.HPROD = 41;
VerticalThings.CAT = 42;
VerticalThings.LT = 43;
VerticalThings.GT = 44;
VerticalThings.LTE = 45;
VerticalThings.GTE = 46;
VerticalThings.EQ = 47;
VerticalThings.NEQ = 48;
VerticalThings.ASSIGN = 49;
VerticalThings.LAND = 50;
VerticalThings.LOR = 51;
VerticalThings.LNOT = 52;
VerticalThings.LSHIFT = 53;
VerticalThings.RSHIFT = 54;
VerticalThings.BAND = 55;
VerticalThings.BOR = 56;
VerticalThings.BNOT = 57;
VerticalThings.BXOR = 58;
VerticalThings.EFFECTS = 59;
VerticalThings.EASSIGN = 60;
VerticalThings.INT = 61;
VerticalThings.FLOAT = 62;
VerticalThings.BOOLEAN = 63;
VerticalThings.I8 = 64;
VerticalThings.U8 = 65;
VerticalThings.I16 = 66;
VerticalThings.U16 = 67;
VerticalThings.I32 = 68;
VerticalThings.U32 = 69;
VerticalThings.RETURN = 70;
VerticalThings.Identifier = 71;
VerticalThings.IntegerConstant = 72;
VerticalThings.FloatingConstant = 73;
VerticalThings.DigitSequence = 74;
VerticalThings.CharacterConstant = 75;
VerticalThings.StringLiteral = 76;
VerticalThings.Whitespace = 77;
VerticalThings.Newline = 78;
VerticalThings.BlockComment = 79;
VerticalThings.LineComment = 80;

VerticalThings.RULE_module = 0;
VerticalThings.RULE_pipelineDef = 1;
VerticalThings.RULE_pipelineBlock = 2;
VerticalThings.RULE_pipelineEntry = 3;
VerticalThings.RULE_pipelineList = 4;
VerticalThings.RULE_usingSpec = 5;
VerticalThings.RULE_includeSpec = 6;
VerticalThings.RULE_booleanLiteral = 7;
VerticalThings.RULE_arrayLiteral = 8;
VerticalThings.RULE_initValue = 9;
VerticalThings.RULE_varIdDef = 10;
VerticalThings.RULE_varDef = 11;
VerticalThings.RULE_dimValue = 12;
VerticalThings.RULE_dimensionSpec = 13;
VerticalThings.RULE_intVal = 14;
VerticalThings.RULE_numVal = 15;
VerticalThings.RULE_rangeType = 16;
VerticalThings.RULE_castableType = 17;
VerticalThings.RULE_primitiveType = 18;
VerticalThings.RULE_varType = 19;
VerticalThings.RULE_varTypeList = 20;
VerticalThings.RULE_tupleType = 21;
VerticalThings.RULE_returnType = 22;
VerticalThings.RULE_formalParam = 23;
VerticalThings.RULE_formalParams = 24;
VerticalThings.RULE_stmtBlock = 25;
VerticalThings.RULE_elseStmt = 26;
VerticalThings.RULE_ifStmt = 27;
VerticalThings.RULE_identifierList = 28;
VerticalThings.RULE_forStmt = 29;
VerticalThings.RULE_whileStmt = 30;
VerticalThings.RULE_assignStmt = 31;
VerticalThings.RULE_returnStmt = 32;
VerticalThings.RULE_stmt = 33;
VerticalThings.RULE_tupleIds = 34;
VerticalThings.RULE_funcDef = 35;
VerticalThings.RULE_qualIdentifier = 36;
VerticalThings.RULE_cppQualIdentifier = 37;
VerticalThings.RULE_functionCall = 38;
VerticalThings.RULE_actualParam = 39;
VerticalThings.RULE_actualParams = 40;
VerticalThings.RULE_dimensionExpr = 41;
VerticalThings.RULE_arrayExpr = 42;
VerticalThings.RULE_addressExpr = 43;
VerticalThings.RULE_castExpr = 44;
VerticalThings.RULE_basicExpr = 45;
VerticalThings.RULE_relExpr = 46;
VerticalThings.RULE_expr = 47;
VerticalThings.RULE_syncExpr = 48;
VerticalThings.RULE_toplevelExpr = 49;
VerticalThings.RULE_tupleExpr = 50;
VerticalThings.RULE_numConstant = 51;
VerticalThings.RULE_exprConstant = 52;
VerticalThings.RULE_literal = 53;

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

ModuleContext.prototype.usingSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsingSpecContext);
    } else {
        return this.getTypedRuleContext(UsingSpecContext,i);
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
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.USING) {
            this.state = 108;
            this.usingSpec();
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.INCLUDE) {
            this.state = 114;
            this.includeSpec();
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 123;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 120;
                this.varDef(); 
            }
            this.state = 125;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.ASYNC) | (1 << VerticalThings.FUTURE) | (1 << VerticalThings.EVENT) | (1 << VerticalThings.VOID) | (1 << VerticalThings.LP) | (1 << VerticalThings.LS))) !== 0) || ((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (VerticalThings.INT - 61)) | (1 << (VerticalThings.FLOAT - 61)) | (1 << (VerticalThings.BOOLEAN - 61)) | (1 << (VerticalThings.I8 - 61)) | (1 << (VerticalThings.U8 - 61)) | (1 << (VerticalThings.I16 - 61)) | (1 << (VerticalThings.U16 - 61)) | (1 << (VerticalThings.I32 - 61)) | (1 << (VerticalThings.U32 - 61)) | (1 << (VerticalThings.Identifier - 61)))) !== 0)) {
            this.state = 126;
            this.funcDef();
            this.state = 131;
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
    this.enterRule(localctx, 2, VerticalThings.RULE_pipelineDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(VerticalThings.PIPELINE);
        this.state = 133;
        this.match(VerticalThings.Identifier);
        this.state = 134;
        this.pipelineBlock();
        this.state = 136;
        _la = this._input.LA(1);
        if(_la===VerticalThings.SEMI) {
            this.state = 135;
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
    this.enterRule(localctx, 4, VerticalThings.RULE_pipelineBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(VerticalThings.LB);
        this.state = 139;
        this.pipelineList();
        this.state = 140;
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
    this.enterRule(localctx, 6, VerticalThings.RULE_pipelineEntry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 142;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 143;
            this.functionCall();
            break;

        case 3:
            this.state = 144;
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
    this.enterRule(localctx, 8, VerticalThings.RULE_pipelineList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.pipelineEntry();
        this.state = 152;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 148;
                this.match(VerticalThings.COMMA);
                this.state = 149;
                this.pipelineEntry(); 
            }
            this.state = 154;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

        this.state = 156;
        _la = this._input.LA(1);
        if(_la===VerticalThings.COMMA) {
            this.state = 155;
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

function UsingSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_usingSpec;
    return this;
}

UsingSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsingSpecContext.prototype.constructor = UsingSpecContext;

UsingSpecContext.prototype.USING = function() {
    return this.getToken(VerticalThings.USING, 0);
};

UsingSpecContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

UsingSpecContext.prototype.SEMI = function() {
    return this.getToken(VerticalThings.SEMI, 0);
};

UsingSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterUsingSpec(this);
	}
};

UsingSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitUsingSpec(this);
	}
};

UsingSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitUsingSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.UsingSpecContext = UsingSpecContext;

VerticalThings.prototype.usingSpec = function() {

    var localctx = new UsingSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, VerticalThings.RULE_usingSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(VerticalThings.USING);
        this.state = 159;
        this.match(VerticalThings.Identifier);
        this.state = 160;
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
    this.enterRule(localctx, 12, VerticalThings.RULE_includeSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(VerticalThings.INCLUDE);
        this.state = 163;
        this.match(VerticalThings.Identifier);
        this.state = 164;
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
    this.enterRule(localctx, 14, VerticalThings.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
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
    this.enterRule(localctx, 16, VerticalThings.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(VerticalThings.LB);
        this.state = 177;
        _la = this._input.LA(1);
        if(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (VerticalThings.TRUE - 21)) | (1 << (VerticalThings.FALSE - 21)) | (1 << (VerticalThings.LP - 21)) | (1 << (VerticalThings.LB - 21)) | (1 << (VerticalThings.MINUS - 21)) | (1 << (VerticalThings.LNOT - 21)))) !== 0) || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (VerticalThings.BAND - 55)) | (1 << (VerticalThings.BNOT - 55)) | (1 << (VerticalThings.INT - 55)) | (1 << (VerticalThings.FLOAT - 55)) | (1 << (VerticalThings.BOOLEAN - 55)) | (1 << (VerticalThings.I8 - 55)) | (1 << (VerticalThings.U8 - 55)) | (1 << (VerticalThings.I16 - 55)) | (1 << (VerticalThings.U16 - 55)) | (1 << (VerticalThings.I32 - 55)) | (1 << (VerticalThings.U32 - 55)) | (1 << (VerticalThings.Identifier - 55)) | (1 << (VerticalThings.IntegerConstant - 55)) | (1 << (VerticalThings.FloatingConstant - 55)) | (1 << (VerticalThings.CharacterConstant - 55)) | (1 << (VerticalThings.StringLiteral - 55)))) !== 0)) {
            this.state = 169;
            this.expr(0);
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VerticalThings.COMMA) {
                this.state = 170;
                this.match(VerticalThings.COMMA);
                this.state = 171;
                this.expr(0);
                this.state = 176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 179;
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
    this.enterRule(localctx, 18, VerticalThings.RULE_initValue);
    try {
        this.state = 184;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 181;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 182;
            this.match(VerticalThings.StringLiteral);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 183;
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
    this.enterRule(localctx, 20, VerticalThings.RULE_varIdDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(VerticalThings.Identifier);
        this.state = 189;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ASSIGN) {
            this.state = 187;
            this.match(VerticalThings.ASSIGN);
            this.state = 188;
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
    this.enterRule(localctx, 22, VerticalThings.RULE_varDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        _la = this._input.LA(1);
        if(_la===VerticalThings.CONST) {
            this.state = 191;
            this.match(VerticalThings.CONST);
        }

        this.state = 194;
        this.varType();
        this.state = 195;
        this.varIdDef();
        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 196;
            this.match(VerticalThings.COMMA);
            this.state = 197;
            this.varIdDef();
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 203;
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
    this.enterRule(localctx, 24, VerticalThings.RULE_dimValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
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
    this.enterRule(localctx, 26, VerticalThings.RULE_dimensionSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        _la = this._input.LA(1);
        if(_la===VerticalThings.RING) {
            this.state = 207;
            this.match(VerticalThings.RING);
        }

        this.state = 214; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 210;
            this.match(VerticalThings.LS);
            this.state = 211;
            this.dimValue();
            this.state = 212;
            this.match(VerticalThings.RS);
            this.state = 216; 
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
    this.enterRule(localctx, 28, VerticalThings.RULE_intVal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
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
    this.enterRule(localctx, 30, VerticalThings.RULE_numVal);
    try {
        this.state = 222;
        switch(this._input.LA(1)) {
        case VerticalThings.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 220;
            this.match(VerticalThings.Identifier);
            break;
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 221;
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
    this.enterRule(localctx, 32, VerticalThings.RULE_rangeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(VerticalThings.LS);
        this.state = 225;
        this.numVal();
        this.state = 226;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.COMMA || _la===VerticalThings.COLON)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 227;
        this.numVal();
        this.state = 228;
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
    this.enterRule(localctx, 34, VerticalThings.RULE_castableType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        localctx.type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (VerticalThings.INT - 61)) | (1 << (VerticalThings.FLOAT - 61)) | (1 << (VerticalThings.BOOLEAN - 61)) | (1 << (VerticalThings.I8 - 61)) | (1 << (VerticalThings.U8 - 61)) | (1 << (VerticalThings.I16 - 61)) | (1 << (VerticalThings.U16 - 61)) | (1 << (VerticalThings.I32 - 61)) | (1 << (VerticalThings.U32 - 61)))) !== 0))) {
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

PrimitiveTypeContext.prototype.EVENT = function() {
    return this.getToken(VerticalThings.EVENT, 0);
};

PrimitiveTypeContext.prototype.FUTURE = function() {
    return this.getToken(VerticalThings.FUTURE, 0);
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
    this.enterRule(localctx, 36, VerticalThings.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        localctx.type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.FUTURE) | (1 << VerticalThings.EVENT) | (1 << VerticalThings.VOID))) !== 0) || ((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (VerticalThings.INT - 61)) | (1 << (VerticalThings.FLOAT - 61)) | (1 << (VerticalThings.BOOLEAN - 61)) | (1 << (VerticalThings.I8 - 61)) | (1 << (VerticalThings.U8 - 61)) | (1 << (VerticalThings.I16 - 61)) | (1 << (VerticalThings.U16 - 61)) | (1 << (VerticalThings.I32 - 61)) | (1 << (VerticalThings.U32 - 61)))) !== 0))) {
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
    this.enterRule(localctx, 38, VerticalThings.RULE_varType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.state = 234;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 235;
            this.cppQualIdentifier();
            break;

        case 3:
            this.state = 236;
            this.rangeType();
            break;

        case 4:
            this.state = 237;
            this.primitiveType();
            break;

        }
        this.state = 241;
        _la = this._input.LA(1);
        if(_la===VerticalThings.RING || _la===VerticalThings.LS) {
            this.state = 240;
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

function VarTypeListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_varTypeList;
    return this;
}

VarTypeListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarTypeListContext.prototype.constructor = VarTypeListContext;

VarTypeListContext.prototype.varType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarTypeContext);
    } else {
        return this.getTypedRuleContext(VarTypeContext,i);
    }
};

VarTypeListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VerticalThings.COMMA);
    } else {
        return this.getToken(VerticalThings.COMMA, i);
    }
};


VarTypeListContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterVarTypeList(this);
	}
};

VarTypeListContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitVarTypeList(this);
	}
};

VarTypeListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitVarTypeList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.VarTypeListContext = VarTypeListContext;

VerticalThings.prototype.varTypeList = function() {

    var localctx = new VarTypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, VerticalThings.RULE_varTypeList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.varType();
        this.state = 248;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 244;
            this.match(VerticalThings.COMMA);
            this.state = 245;
            this.varType();
            this.state = 250;
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

function TupleTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_tupleType;
    return this;
}

TupleTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleTypeContext.prototype.constructor = TupleTypeContext;

TupleTypeContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

TupleTypeContext.prototype.varTypeList = function() {
    return this.getTypedRuleContext(VarTypeListContext,0);
};

TupleTypeContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

TupleTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterTupleType(this);
	}
};

TupleTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitTupleType(this);
	}
};

TupleTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitTupleType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.TupleTypeContext = TupleTypeContext;

VerticalThings.prototype.tupleType = function() {

    var localctx = new TupleTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, VerticalThings.RULE_tupleType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this.match(VerticalThings.LP);
        this.state = 252;
        this.varTypeList();
        this.state = 253;
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

function ReturnTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_returnType;
    return this;
}

ReturnTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnTypeContext.prototype.constructor = ReturnTypeContext;

ReturnTypeContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

ReturnTypeContext.prototype.tupleType = function() {
    return this.getTypedRuleContext(TupleTypeContext,0);
};

ReturnTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterReturnType(this);
	}
};

ReturnTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitReturnType(this);
	}
};

ReturnTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitReturnType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.ReturnTypeContext = ReturnTypeContext;

VerticalThings.prototype.returnType = function() {

    var localctx = new ReturnTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, VerticalThings.RULE_returnType);
    try {
        this.state = 257;
        switch(this._input.LA(1)) {
        case VerticalThings.FUTURE:
        case VerticalThings.EVENT:
        case VerticalThings.VOID:
        case VerticalThings.LS:
        case VerticalThings.INT:
        case VerticalThings.FLOAT:
        case VerticalThings.BOOLEAN:
        case VerticalThings.I8:
        case VerticalThings.U8:
        case VerticalThings.I16:
        case VerticalThings.U16:
        case VerticalThings.I32:
        case VerticalThings.U32:
        case VerticalThings.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 255;
            this.varType();
            break;
        case VerticalThings.LP:
            this.enterOuterAlt(localctx, 2);
            this.state = 256;
            this.tupleType();
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
    this.enterRule(localctx, 46, VerticalThings.RULE_formalParam);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        _la = this._input.LA(1);
        if(_la===VerticalThings.CONST) {
            this.state = 259;
            this.match(VerticalThings.CONST);
        }

        this.state = 262;
        this.varType();
        this.state = 263;
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
    this.enterRule(localctx, 48, VerticalThings.RULE_formalParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.formalParam();
        this.state = 270;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 266;
            this.match(VerticalThings.COMMA);
            this.state = 267;
            this.formalParam();
            this.state = 272;
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
    this.enterRule(localctx, 50, VerticalThings.RULE_stmtBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(VerticalThings.LB);
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.IF) | (1 << VerticalThings.FOR) | (1 << VerticalThings.WHILE) | (1 << VerticalThings.LP) | (1 << VerticalThings.LB))) !== 0) || _la===VerticalThings.RETURN || _la===VerticalThings.Identifier) {
            this.state = 274;
            this.stmt();
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 280;
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
    this.enterRule(localctx, 52, VerticalThings.RULE_elseStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.match(VerticalThings.ELSE);
        this.state = 285;
        switch(this._input.LA(1)) {
        case VerticalThings.LB:
            this.state = 283;
            this.stmtBlock();
            break;
        case VerticalThings.IF:
            this.state = 284;
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
    this.enterRule(localctx, 54, VerticalThings.RULE_ifStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(VerticalThings.IF);
        this.state = 288;
        this.match(VerticalThings.LP);
        this.state = 289;
        this.expr(0);
        this.state = 290;
        this.match(VerticalThings.RP);
        this.state = 291;
        this.stmtBlock();
        this.state = 293;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ELSE) {
            this.state = 292;
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
    this.enterRule(localctx, 56, VerticalThings.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(VerticalThings.Identifier);
        this.state = 300;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VerticalThings.COMMA) {
            this.state = 296;
            this.match(VerticalThings.COMMA);
            this.state = 297;
            this.match(VerticalThings.Identifier);
            this.state = 302;
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
    this.enterRule(localctx, 58, VerticalThings.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.match(VerticalThings.FOR);
        this.state = 304;
        this.identifierList();
        this.state = 305;
        this.match(VerticalThings.IN);
        this.state = 306;
        this.rangeType();
        this.state = 307;
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
    this.enterRule(localctx, 60, VerticalThings.RULE_whileStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(VerticalThings.WHILE);
        this.state = 310;
        this.match(VerticalThings.LP);
        this.state = 311;
        this.expr(0);
        this.state = 312;
        this.match(VerticalThings.RP);
        this.state = 313;
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

AssignStmtContext.prototype.ASSIGN = function() {
    return this.getToken(VerticalThings.ASSIGN, 0);
};

AssignStmtContext.prototype.toplevelExpr = function() {
    return this.getTypedRuleContext(ToplevelExprContext,0);
};

AssignStmtContext.prototype.tupleIds = function() {
    return this.getTypedRuleContext(TupleIdsContext,0);
};

AssignStmtContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
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
    this.enterRule(localctx, 62, VerticalThings.RULE_assignStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        switch(this._input.LA(1)) {
        case VerticalThings.Identifier:
            this.state = 315;
            this.qualIdentifier();
            this.state = 317;
            _la = this._input.LA(1);
            if(_la===VerticalThings.LS) {
                this.state = 316;
                this.dimensionExpr();
            }

            break;
        case VerticalThings.LP:
            this.state = 319;
            this.tupleIds();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 322;
        this.match(VerticalThings.ASSIGN);
        this.state = 323;
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

ReturnStmtContext.prototype.toplevelExpr = function() {
    return this.getTypedRuleContext(ToplevelExprContext,0);
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
    this.enterRule(localctx, 64, VerticalThings.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 325;
        this.match(VerticalThings.RETURN);
        this.state = 326;
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
    this.enterRule(localctx, 66, VerticalThings.RULE_stmt);
    try {
        this.state = 341;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 328;
            this.stmtBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 329;
            this.ifStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 330;
            this.forStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 331;
            this.whileStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 332;
            this.assignStmt();
            this.state = 333;
            this.match(VerticalThings.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 335;
            this.functionCall();
            this.state = 336;
            this.match(VerticalThings.SEMI);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 338;
            this.returnStmt();
            this.state = 339;
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

function TupleIdsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_tupleIds;
    return this;
}

TupleIdsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleIdsContext.prototype.constructor = TupleIdsContext;

TupleIdsContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

TupleIdsContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

TupleIdsContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

TupleIdsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterTupleIds(this);
	}
};

TupleIdsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitTupleIds(this);
	}
};

TupleIdsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitTupleIds(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.TupleIdsContext = TupleIdsContext;

VerticalThings.prototype.tupleIds = function() {

    var localctx = new TupleIdsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, VerticalThings.RULE_tupleIds);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(VerticalThings.LP);
        this.state = 344;
        this.identifierList();
        this.state = 345;
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

FuncDefContext.prototype.returnType = function() {
    return this.getTypedRuleContext(ReturnTypeContext,0);
};

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
    this.enterRule(localctx, 70, VerticalThings.RULE_funcDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        _la = this._input.LA(1);
        if(_la===VerticalThings.ASYNC) {
            this.state = 347;
            this.match(VerticalThings.ASYNC);
        }

        this.state = 350;
        this.returnType();
        this.state = 351;
        this.match(VerticalThings.Identifier);
        this.state = 352;
        this.match(VerticalThings.LP);
        this.state = 354;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.FUTURE) | (1 << VerticalThings.EVENT) | (1 << VerticalThings.CONST) | (1 << VerticalThings.VOID) | (1 << VerticalThings.LS))) !== 0) || ((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (VerticalThings.INT - 61)) | (1 << (VerticalThings.FLOAT - 61)) | (1 << (VerticalThings.BOOLEAN - 61)) | (1 << (VerticalThings.I8 - 61)) | (1 << (VerticalThings.U8 - 61)) | (1 << (VerticalThings.I16 - 61)) | (1 << (VerticalThings.U16 - 61)) | (1 << (VerticalThings.I32 - 61)) | (1 << (VerticalThings.U32 - 61)) | (1 << (VerticalThings.Identifier - 61)))) !== 0)) {
            this.state = 353;
            this.formalParams();
        }

        this.state = 356;
        this.match(VerticalThings.RP);
        this.state = 357;
        this.match(VerticalThings.LB);
        this.state = 361;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 358;
                this.varDef(); 
            }
            this.state = 363;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
        }

        this.state = 367;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerticalThings.IF) | (1 << VerticalThings.FOR) | (1 << VerticalThings.WHILE) | (1 << VerticalThings.LP) | (1 << VerticalThings.LB))) !== 0) || _la===VerticalThings.RETURN || _la===VerticalThings.Identifier) {
            this.state = 364;
            this.stmt();
            this.state = 369;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 370;
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
    this.enterRule(localctx, 72, VerticalThings.RULE_qualIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
        this.match(VerticalThings.Identifier);
        this.state = 377;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 373;
                this.match(VerticalThings.PERIOD);
                this.state = 374;
                this.match(VerticalThings.Identifier); 
            }
            this.state = 379;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
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
    this.enterRule(localctx, 74, VerticalThings.RULE_cppQualIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(VerticalThings.Identifier);
        this.state = 383; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 381;
            this.match(VerticalThings.DCOLON);
            this.state = 382;
            this.match(VerticalThings.Identifier);
            this.state = 385; 
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
    this.enterRule(localctx, 76, VerticalThings.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 389;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.state = 387;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 388;
            this.cppQualIdentifier();
            break;

        }
        this.state = 391;
        this.match(VerticalThings.LP);
        this.state = 393;
        _la = this._input.LA(1);
        if(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (VerticalThings.TRUE - 21)) | (1 << (VerticalThings.FALSE - 21)) | (1 << (VerticalThings.LP - 21)) | (1 << (VerticalThings.LB - 21)) | (1 << (VerticalThings.MINUS - 21)) | (1 << (VerticalThings.LNOT - 21)))) !== 0) || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (VerticalThings.BAND - 55)) | (1 << (VerticalThings.BNOT - 55)) | (1 << (VerticalThings.INT - 55)) | (1 << (VerticalThings.FLOAT - 55)) | (1 << (VerticalThings.BOOLEAN - 55)) | (1 << (VerticalThings.I8 - 55)) | (1 << (VerticalThings.U8 - 55)) | (1 << (VerticalThings.I16 - 55)) | (1 << (VerticalThings.U16 - 55)) | (1 << (VerticalThings.I32 - 55)) | (1 << (VerticalThings.U32 - 55)) | (1 << (VerticalThings.Identifier - 55)) | (1 << (VerticalThings.IntegerConstant - 55)) | (1 << (VerticalThings.FloatingConstant - 55)) | (1 << (VerticalThings.CharacterConstant - 55)) | (1 << (VerticalThings.StringLiteral - 55)))) !== 0)) {
            this.state = 392;
            this.actualParams();
        }

        this.state = 395;
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
    this.enterRule(localctx, 78, VerticalThings.RULE_actualParam);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 399;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        if(la_===1) {
            this.state = 397;
            this.match(VerticalThings.Identifier);
            this.state = 398;
            this.match(VerticalThings.ASSIGN);

        }
        this.state = 403;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.state = 401;
            this.expr(0);
            break;

        case 2:
            this.state = 402;
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
    this.enterRule(localctx, 80, VerticalThings.RULE_actualParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.actualParam();
        this.state = 410;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 406;
                this.match(VerticalThings.COMMA);
                this.state = 407;
                this.actualParam(); 
            }
            this.state = 412;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
        }

        this.state = 414;
        _la = this._input.LA(1);
        if(_la===VerticalThings.COMMA) {
            this.state = 413;
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
    this.enterRule(localctx, 82, VerticalThings.RULE_dimensionExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 420; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 416;
        		this.match(VerticalThings.LS);
        		this.state = 417;
        		this.expr(0);
        		this.state = 418;
        		this.match(VerticalThings.RS);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 422; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,42, this._ctx);
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
    this.enterRule(localctx, 84, VerticalThings.RULE_arrayExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        this.match(VerticalThings.Identifier);
        this.state = 425;
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
    this.enterRule(localctx, 86, VerticalThings.RULE_addressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        this.match(VerticalThings.BAND);
        this.state = 430;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.state = 428;
            this.arrayExpr();
            break;

        case 2:
            this.state = 429;
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
    this.enterRule(localctx, 88, VerticalThings.RULE_castExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        this.castableType();
        this.state = 433;
        this.match(VerticalThings.LP);
        this.state = 434;
        this.basicExpr(0);
        this.state = 435;
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
    var _startState = 90;
    this.enterRecursionRule(localctx, 90, VerticalThings.RULE_basicExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 450;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            this.state = 438;
            localctx.up = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===VerticalThings.MINUS || _la===VerticalThings.BNOT)) {
                localctx.up = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 439;
            this.basicExpr(7);
            break;

        case 2:
            this.state = 440;
            this.castExpr();
            break;

        case 3:
            this.state = 441;
            this.qualIdentifier();
            break;

        case 4:
            this.state = 442;
            this.arrayExpr();
            break;

        case 5:
            this.state = 443;
            this.addressExpr();
            break;

        case 6:
            this.state = 444;
            this.functionCall();
            break;

        case 7:
            this.state = 445;
            this.literal();
            break;

        case 8:
            this.state = 446;
            this.match(VerticalThings.LP);
            this.state = 447;
            this.basicExpr(0);
            this.state = 448;
            this.match(VerticalThings.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 472;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 470;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 452;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 453;
                    localctx.op = this.match(VerticalThings.POW);
                    this.state = 454;
                    this.basicExpr(15);
                    break;

                case 2:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 455;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 456;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VerticalThings.LSHIFT || _la===VerticalThings.RSHIFT)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 457;
                    this.basicExpr(7);
                    break;

                case 3:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 458;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 459;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (VerticalThings.BAND - 55)) | (1 << (VerticalThings.BOR - 55)) | (1 << (VerticalThings.BXOR - 55)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 460;
                    this.basicExpr(6);
                    break;

                case 4:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 461;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 462;
                    localctx.op = this.match(VerticalThings.CAT);
                    this.state = 463;
                    this.basicExpr(5);
                    break;

                case 5:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 464;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 465;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (VerticalThings.MUL - 37)) | (1 << (VerticalThings.DIV - 37)) | (1 << (VerticalThings.MOD - 37)) | (1 << (VerticalThings.HPROD - 37)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 466;
                    this.basicExpr(4);
                    break;

                case 6:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_basicExpr);
                    this.state = 467;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 468;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===VerticalThings.PLUS || _la===VerticalThings.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 469;
                    this.basicExpr(3);
                    break;

                } 
            }
            this.state = 474;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
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
    this.enterRule(localctx, 92, VerticalThings.RULE_relExpr);
    var _la = 0; // Token type
    try {
        this.state = 483;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 475;
            this.basicExpr(0);
            this.state = 476;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (VerticalThings.LT - 43)) | (1 << (VerticalThings.GT - 43)) | (1 << (VerticalThings.LTE - 43)) | (1 << (VerticalThings.GTE - 43)) | (1 << (VerticalThings.EQ - 43)) | (1 << (VerticalThings.NEQ - 43)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 477;
            this.basicExpr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 479;
            this.match(VerticalThings.LP);
            this.state = 480;
            this.relExpr();
            this.state = 481;
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
    var _startState = 94;
    this.enterRecursionRule(localctx, 94, VerticalThings.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.state = 486;
            this.match(VerticalThings.LNOT);
            this.state = 487;
            this.expr(5);
            break;

        case 2:
            this.state = 488;
            this.basicExpr(0);
            break;

        case 3:
            this.state = 489;
            this.relExpr();
            break;

        case 4:
            this.state = 490;
            this.match(VerticalThings.LP);
            this.state = 491;
            this.expr(0);
            this.state = 492;
            this.match(VerticalThings.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 501;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, VerticalThings.RULE_expr);
                this.state = 496;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 497;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===VerticalThings.LAND || _la===VerticalThings.LOR)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 498;
                this.expr(3); 
            }
            this.state = 503;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
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

function SyncExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_syncExpr;
    return this;
}

SyncExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SyncExprContext.prototype.constructor = SyncExprContext;

SyncExprContext.prototype.AWAIT = function() {
    return this.getToken(VerticalThings.AWAIT, 0);
};

SyncExprContext.prototype.SIGNAL = function() {
    return this.getToken(VerticalThings.SIGNAL, 0);
};

SyncExprContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

SyncExprContext.prototype.Identifier = function() {
    return this.getToken(VerticalThings.Identifier, 0);
};

SyncExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterSyncExpr(this);
	}
};

SyncExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitSyncExpr(this);
	}
};

SyncExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitSyncExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.SyncExprContext = SyncExprContext;

VerticalThings.prototype.syncExpr = function() {

    var localctx = new SyncExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, VerticalThings.RULE_syncExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 504;
        _la = this._input.LA(1);
        if(!(_la===VerticalThings.AWAIT || _la===VerticalThings.SIGNAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 507;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.state = 505;
            this.functionCall();
            break;

        case 2:
            this.state = 506;
            this.match(VerticalThings.Identifier);
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

ToplevelExprContext.prototype.syncExpr = function() {
    return this.getTypedRuleContext(SyncExprContext,0);
};

ToplevelExprContext.prototype.tupleExpr = function() {
    return this.getTypedRuleContext(TupleExprContext,0);
};

ToplevelExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
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
    this.enterRule(localctx, 98, VerticalThings.RULE_toplevelExpr);
    try {
        this.state = 512;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 509;
            this.syncExpr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 510;
            this.tupleExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 511;
            this.expr(0);
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

function TupleExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerticalThings.RULE_tupleExpr;
    return this;
}

TupleExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleExprContext.prototype.constructor = TupleExprContext;

TupleExprContext.prototype.LP = function() {
    return this.getToken(VerticalThings.LP, 0);
};

TupleExprContext.prototype.actualParams = function() {
    return this.getTypedRuleContext(ActualParamsContext,0);
};

TupleExprContext.prototype.RP = function() {
    return this.getToken(VerticalThings.RP, 0);
};

TupleExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.enterTupleExpr(this);
	}
};

TupleExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerticalThingsListener ) {
        listener.exitTupleExpr(this);
	}
};

TupleExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VerticalThingsVisitor ) {
        return visitor.visitTupleExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VerticalThings.TupleExprContext = TupleExprContext;

VerticalThings.prototype.tupleExpr = function() {

    var localctx = new TupleExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, VerticalThings.RULE_tupleExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 514;
        this.match(VerticalThings.LP);
        this.state = 515;
        this.actualParams();
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
    this.enterRule(localctx, 102, VerticalThings.RULE_numConstant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 518;
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
    this.enterRule(localctx, 104, VerticalThings.RULE_exprConstant);
    try {
        this.state = 523;
        switch(this._input.LA(1)) {
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 520;
            this.numConstant();
            break;
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 521;
            this.match(VerticalThings.CharacterConstant);
            break;
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 522;
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
    this.enterRule(localctx, 106, VerticalThings.RULE_literal);
    try {
        this.state = 528;
        switch(this._input.LA(1)) {
        case VerticalThings.TRUE:
        case VerticalThings.FALSE:
        case VerticalThings.IntegerConstant:
        case VerticalThings.FloatingConstant:
        case VerticalThings.CharacterConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 525;
            this.exprConstant();
            break;
        case VerticalThings.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 526;
            this.arrayLiteral();
            break;
        case VerticalThings.StringLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 527;
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
	case 45:
			return this.basicExpr_sempred(localctx, predIndex);
	case 47:
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
