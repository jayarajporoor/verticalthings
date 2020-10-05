/*
 * This is an autogenerated file. Modifications
 * might not be persistent.
 */
namespace protoNNParam {

#ifndef __TEST_PROTONN__
    /** Gamma for gaussian kernel */
    const PROGMEM float gamma = 0.001219;
    /** Low Dimensional Projection Matrix */
    const PROGMEM unsigned int featDim = 124;
    const PROGMEM unsigned int ldDim = 10;

    /**
    * Projectino Matrix (W)
    * d_cap x d flattened (dimension of 2D array)
    * ldDim x featDim
    */
    const PROGMEM  float ldProjectionMatrix[]  = {
		-0.590253,5.20892,4.13162,0.876941,-0.331894,1.57267,-0.0325109,-0.071271,-0.152932,1.05009,-0.11941,1.64823,0.687354,-1.2858,-1.46315,-1.11738,1.011,0.309944,1.24839,0.704287,0.43972,0.828692,2.08799,3.75328,2.60948,4.22434,1.70193,-1.01155,0.466358,0.317378,-0.932579,-1.96222,-1.9722,-1.2157,-1.75366,-0.541855,-1.52937,-0.679381,0.820792,1.04965,0.79712,0.400432,-0.295896,-0.895822,2.08626,1.37169,1.11811,-0.788952,0.880597,0.600188,-0.194979,-1.36956,-0.189506,-1.16442,-1.24381,-1.01405,-1.0291,0.497597,0.394046,1.22044,1.01496,0.421079,2.67765,1.2675,-1.71297,0.171774,0.505313,0.188072,-0.580084,0.0710612,2.02881,2.02858,1.12657,1.15116,1.13324,1.25317,0.158083,-0.183848,0.261384,-0.171276,0.00839241,-0.152596,0.0740805,-1.59109,0.24261,-0.0503251,-1.03993,0.222752,3.38982,1.80594,2.42984,2.10478,-0.902062,-1.00947,-1.14359,-1.03455,2.09589,0.989573,1.37169,1.05126,1.15729,0.296689,-0.727392,0.74133,-1.05901,1.35517,1.20822,1.04922,-0.377185,1.55082,-0.448407,3.02202,1.27928,1.70501,1.56461,1.82831,2.36991,-0.770263,-0.519807,2.06199,-1.22034,0.758831,-1.25694,0.844571,
		-0.184752,-0.269928,-0.808901,-0.0668234,-2.04514,-1.84532,-2.54876,0.280684,-1.51858,0.456648,0.880988,1.16404,1.27545,1.87693,1.76489,1.83152,1.21469,0.724017,0.395514,0.115653,-0.247929,-1.52128,-3.02865,-2.01164,-2.70479,-5.41983,0.266932,1.52537,-0.364251,0.1926,1.00123,1.19171,1.20614,1.50712,1.04815,0.480019,0.883882,0.515096,-0.717901,-0.65356,-0.384128,-1.02068,0.173317,-0.00765577,-1.18985,-2.06854,-1.79874,-1.46788,-0.278261,-0.304018,0.402396,0.642584,0.639071,1.55131,1.49837,1.25058,1.04394,0.545946,-0.1614,-0.323461,-2.5966,-1.86876,-2.04001,-0.152449,-2.17365,-0.358423,2.07398,1.44966,1.51402,-1.06055,-0.263368,-1.47697,-1.46603,-1.8101,-1.83718,-1.60428,0.0715313,0.616796,-0.838489,-0.518433,0.0513507,1.68693,1.11367,2.06947,0.157286,1.10986,0.30147,-0.0013634,-0.245582,1.19558,1.21272,1.97663,-3.23477,-1.86446,-2.16381,-1.43334,-0.287831,-0.19267,1.03572,0.50532,-0.0787583,1.05992,0.610409,-2.57588,-0.255964,-1.0866,-1.27171,-0.099504,-0.294828,-1.03415,-0.130733,-0.818742,-1.52813,-2.08446,-1.75748,-1.17669,-1.83405,0.257456,0.146172,0.0516231,1.03975,1.42935,-0.722672,-0.386379,
		0.460555,-3.38878,-1.54395,-4.47738,-1.5151,-2.35188,-1.17393,0.79167,-2.77536,0.385955,0.665223,1.1277,1.02717,1.02993,0.798666,1.13633,1.14667,0.579032,0.560943,0.438063,0.303608,-0.957714,-2.43081,-1.23979,2.33287,-3.48733,0.849742,1.02269,-1.53302,-0.996188,0.33835,0.692615,0.385698,0.543864,0.571764,1.41113,-0.120631,0.492925,0.216346,0.0170309,-0.601549,0.780384,-1.02181,-0.0162026,-2.07063,-3.42194,0.234827,0.191533,0.0775006,0.558461,0.634285,0.903105,1.31272,0.599715,0.454607,1.4123,1.29136,1.27612,0.759874,0.37927,-2.47598,-0.302157,-4.45264,0.315656,0.0503862,1.18222,-2.3531,-1.06274,-0.1283,-0.0800141,-0.0922837,-0.477766,-0.838676,-0.361553,-0.599283,0.649939,0.741412,1.02141,-0.0394042,0.588498,0.263675,0.253757,-0.602978,0.993008,0.459344,-0.253815,0.804631,-0.864458,-1.51813,0.0509528,-1.40051,-0.00898395,-0.467035,-0.476524,-0.607131,3.32893,-1.77446,0.444997,-1.21554,-0.247886,0.769603,-0.432038,-1.00728,1.12581,0.261825,-1.19526,0.260522,0.628175,-1.57739,0.0770003,-0.514155,-0.0408283,0.852969,-0.0139169,-0.449249,0.272173,0.0638629,0.0643897,-1.05642,-0.383368,-0.798997,0.297267,0.608101,0.528513,
		-0.377982,-5.73619,-3.22316,-0.463862,-1.03078,-1.22613,-2.04461,-1.01749,-0.554285,1.02851,0.562209,1.17892,0.379506,-0.475476,-0.43278,-0.473652,0.893116,0.82446,0.984606,1.03789,-0.255013,0.576893,-0.88504,3.56588,1.19533,4.8045,0.0186402,-1.64909,0.136545,0.561052,-1.43074,-1.6765,-1.92852,-1.69262,-1.22399,-0.226353,-2.06249,-1.0396,-0.0446611,0.339299,-0.308028,-1.03149,-0.698699,-0.259216,1.02128,-2.3843,-0.699793,0.0829713,0.644876,0.568876,0.167033,-0.0604519,-0.0837599,-0.964248,-0.913501,-0.603395,-0.265338,0.46143,0.676197,0.871144,0.0154508,-0.602749,0.480072,0.0129596,0.761154,1.1262,0.388654,1.05156,-0.216668,-0.760816,-0.199613,0.864896,-1.44913,-0.7598,-0.611572,-1.27869,0.340958,0.814515,0.367092,-1.01298,-1.51469,1.44706,0.605508,-1.72014,-0.31858,0.876661,1.42455,-1.50983,0.0715457,-1.64506,-1.7206,-2.64505,2.77221,2.16228,2.05564,2.50441,0.526625,-0.51984,-1.05017,-1.39635,-1.29254,-0.0455944,-0.260374,1.55286,1.81779,-1.54805,-1.02927,0.584879,-0.5293,-0.58705,0.410411,0.91525,-0.692134,-0.669219,-1.32878,-1.63163,0.791344,0.377096,-1.02978,0.196049,-1.03236,2.06784,1.04205,-2.07896,
		-0.561722,-0.32011,0.581427,0.955533,-1.72821,-0.983211,-1.65447,0.992292,0.602889,-1.17821,-0.0919972,-1.17329,-0.835294,0.859479,1.1505,1.23573,-1.26963,-0.523219,-1.46516,-1.6678,-0.988007,0.257581,-1.33904,-4.11355,-4.53566,-5.99869,-2.35284,1.81226,-0.143754,-0.536271,0.408631,1.02976,1.34424,1.06363,1.33972,-0.0936399,1.50425,0.0251987,-1.28232,-1.29023,-0.810576,-1.18739,-0.315234,0.845104,-1.62205,-1.10793,0.519842,-0.987857,-1.98441,-2.13895,-1.21038,-0.834084,-1.37964,0.684419,0.621809,-0.753411,-0.940038,-2.62681,-2.06671,-2.14658,0.111201,0.376628,-1.06698,-1.32778,-1.14956,-0.521268,0.71049,-0.670163,-1.02591,0.0181965,1.45499,-1.68124,-2.14564,-0.595606,-0.550468,-1.87365,-1.2107,-1.05252,-2.11467,-1.71551,-1.12233,0.515625,-0.865307,0.146905,0.035051,0.198018,0.132999,0.296579,-0.825465,-0.0748212,1.01616,2.29607,-2.05852,-0.540157,-0.863074,-2.46272,-0.150986,-0.217965,1.4299,1.27071,-0.507374,2.10561,-0.821369,-1.35355,-0.445437,-0.766833,1.22665,0.0924163,-0.51532,0.747682,0.514887,-0.820293,-1.45547,-1.82245,-1.45583,-2.76389,-2.06832,-0.108551,-0.524279,0.518501,1.20875,0.654617,2.5086,1.01613,
		1.07699,3.48948,0.973344,-1.92532,-0.123957,1.85578,0.798499,0.325471,1.43156,1.26903,0.183577,0.358124,-0.276646,-2.63377,-2.28542,-1.93355,0.0322823,-0.035875,1.04381,1.50635,0.748072,0.453241,1.65377,2.86595,4.66166,5.85807,2.57793,-3.39989,-0.587112,-0.672022,-2.75223,-3.29466,-3.60775,-3.8068,-2.89976,-1.92409,-3.08258,-1.21863,-0.447755,0.528377,-0.200405,1.52061,-0.750914,-0.628969,1.2564,-0.641302,0.725682,0.937212,1.34442,1.35538,-0.0361356,-0.73708,-0.440519,-2.78245,-2.82549,-1.48025,-0.740393,0.927855,0.879142,1.7951,-0.303934,-0.0580038,0.898771,0.651033,0.449529,0.0323613,0.52738,0.271194,0.0767295,0.430061,1.02444,0.605068,1.74831,0.73498,0.887682,1.49268,1.29385,0.421632,1.61985,-1.29742,-0.627544,-1.03126,-0.096385,-1.05055,0.423037,-0.525692,0.201936,0.86379,2.03119,1.35644,1.03281,1.06387,0.824091,0.026789,-0.200042,1.45241,0.553972,-0.970394,0.915954,0.236415,-1.8127,-0.28156,0.509548,-1.77802,-0.0921088,0.604524,-0.567504,1.50181,0.800364,0.376836,-1.02045,-0.256184,0.616201,1.32035,1.35746,0.31361,2.34629,0.843553,-0.0471983,2.10952,0.618639,-0.788477,-0.260091,-0.895533,
		-0.347866,4.33878,3.03374,-0.275728,1.22738,1.57832,-0.160416,-1.28066,0.0188953,-0.0682409,-0.518707,-0.571453,-0.978277,-1.25685,-1.12894,-1.08749,-0.63209,-0.47168,0.0875262,0.229342,0.130423,2.38021,1.09493,2.41098,2.95341,3.42948,0.819897,-3.97724,0.35061,0.229441,-0.636236,-1.07346,-1.11874,-0.92309,-1.28249,-0.994143,-1.19054,-0.517513,-0.00698488,1.57195,-0.0856894,-0.220212,1.01885,0.252231,0.610142,1.59781,2.48056,-0.0478779,0.536695,0.836727,0.410119,0.136731,0.0955918,-0.209275,-0.581714,-0.379503,0.173647,0.508675,0.625168,1.22694,1.03942,1.17382,2.03921,-1.19024,-0.776081,-0.367685,0.721969,0.173666,-0.761455,0.681183,1.69037,1.58961,1.63393,0.563507,0.903116,1.20868,-0.157587,1.03832,1.05462,-1.046,-0.780647,0.632043,-0.405887,1.28963,-0.24205,0.363255,-0.286921,-1.51558,0.787591,2.36161,-0.324522,0.291691,-0.220059,0.167275,-0.481475,-0.157488,-0.136521,1.14114,-0.0184376,2.42962,0.205774,-0.149686,-0.185519,-0.174687,-1.14968,-0.793403,1.23634,-0.624021,-1.02396,-0.203219,-0.262048,-0.68262,1.27526,1.09455,1.10748,1.04183,1.44843,-1.5066,0.00803764,-0.65221,-0.182216,0.193057,-0.212012,-0.863461,
		0.404581,3.56717,3.46287,0.702163,0.757538,-0.347944,-3.48183,0.529879,-0.408875,0.0377953,-0.100422,0.285337,0.195617,0.014216,-0.058359,0.00340121,0.436069,-0.00572671,0.179923,0.375752,0.62134,-0.0618004,0.244167,0.34238,0.895645,0.837893,0.65398,0.491069,-0.00813913,0.665814,-0.00675145,-0.23877,0.344618,0.118587,-0.40517,-0.504392,-0.1361,0.0889804,0.344604,-0.515894,0.30995,-0.815889,-1.04385,-0.518903,0.495535,-0.750833,0.592861,-1.0501,0.456387,0.0703278,0.324771,0.0844465,0.241993,-0.00322779,0.0611373,0.532251,0.181901,0.425926,0.54961,0.369554,0.440536,-0.282183,-1.56513,-0.806345,0.49235,-0.149159,-0.84891,-0.585319,-0.880856,-1.25636,-0.0736983,0.4205,-0.266437,-0.320941,-0.539554,0.610038,0.788919,0.740386,1.07617,-0.684042,1.03903,-2.09142,-0.152418,0.247672,-1.6824,2.09639,-0.388907,1.1744,0.512569,2.0898,0.102542,1.06454,-1.39506,-1.61504,-1.57254,-1.03585,-1.51668,0.657334,0.813086,2.13924,1.80471,-0.521354,0.0836206,-2.94845,-1.73851,0.377185,-0.581756,0.519941,-1.21403,-0.590807,-0.584583,-1.26625,-0.399788,-0.0377828,0.038746,-0.01851,0.825847,0.842309,0.546617,-0.267368,-0.0254255,0.400586,0.82728,0.261994,
		1.13167,3.36195,1.93764,-0.0127232,-0.184478,-2.24823,-4.81742,-2.06903,-0.507337,1.67623,2.38451,1.77854,2.68549,2.90078,2.86838,2.60594,1.66177,2.07266,1.63358,1.01701,-1.4486,-1.53439,-2.0736,0.285835,-2.10612,-4.06161,-0.449423,-2.27805,0.23644,0.555072,-0.626758,1.74823,0.583858,0.646004,2.57422,4.11678,-0.0942743,0.599405,0.185549,-0.344964,-0.404934,1.06874,0.626654,0.648094,-0.0405374,-3.24493,-2.59076,-1.04109,0.292027,1.98124,2.13372,3.50941,3.54182,1.72619,1.52976,3.02036,3.27566,2.45121,1.89788,0.470632,-1.83754,-3.40441,-2.14543,-3.65718,-0.806562,-1.177,0.128236,1.23095,-2.34343,-1.20677,-0.0266592,2.03729,-0.569675,-0.748956,-0.51284,-1.84853,-0.178228,-1.47394,0.872118,0.786084,0.0766235,0.587133,-0.280666,1.38775,0.253867,-0.693934,-0.504786,0.364853,2.27526,1.05719,2.28342,3.75086,-3.12076,-2.02532,-2.37011,-2.0118,1.26438,0.444845,0.723313,0.841233,1.03512,-0.147579,0.58388,-2.05767,-1.41772,-0.352619,1.05469,-1.05992,-0.072868,-0.505866,-0.532353,0.647035,-0.763961,-0.973799,-0.658299,-0.986581,-1.24097,-0.12903,1.3741,1.04378,1.1609,1.17049,-0.602853,-0.192774,
		0.91335,-0.933976,-1.38623,-2.56926,0.681107,0.576335,-0.42881,1.43307,2.10698,0.267118,0.419007,-0.31157,-0.133565,0.766984,0.311857,0.616862,-0.396076,-0.348784,0.0162607,-0.234535,1.68768,-0.644643,-0.508901,-0.155175,-2.06656,-1.08074,-1.49889,-2.82924,-0.593578,-0.581109,-0.68751,-0.445,-0.697794,-0.702815,-0.680967,-0.95715,0.137399,-0.418808,-1.0106,-0.510941,-1.34196,0.375608,-0.92531,-0.18253,-0.247831,0.643863,-0.493596,0.806538,-0.265122,-0.3179,-0.128934,-0.210126,-0.57715,-0.0631027,-0.100924,-0.0659422,0.0766595,-0.570905,-0.400625,-0.263199,0.32986,-0.203582,0.80303,-0.496256,0.854694,-1.04702,-0.0381127,-0.197119,-0.622113,-0.4084,0.0454431,-1.59133,-0.498765,-0.391084,-0.350771,-0.570601,-0.812243,-0.774285,0.6366,-1.52277,0.262688,-0.753005,1.04039,-1.11401,-1.04273,1.19429,-1.58981,0.310127,-0.730817,-0.0687302,1.98557,1.98378,-1.16588,-0.576578,-0.375334,-1.14999,0.16557,0.588891,-0.812458,-0.27498,-1.18032,2.05311,-1.10687,0.143176,-1.76148,-0.307269,-0.145838,1.52117,1.04678,-1.72694,-0.300962,0.282104,-0.725495,-1.07027,-1.13586,-0.44722,-1.26213,-0.37823,0.261475,0.509242,-1.06261,0.434818,-0.131582,-0.34294,
	};
    
    /**
     * Prototypes (B)
     * m x d_cap flattened (dimension of 2D array)
     * numPrototypes x d_cap
     */
    const PROGMEM float prototypeMatrix[] = {
		277.307000,-1176.480000,533.058000,-314.528000,-1752.210000,-462.194000,212.919000,-724.583000,378.652000,-1073.490000,
		-22.773400,-1231.060000,6.860240,453.976000,-1793.000000,-45.049800,366.883000,-101.544000,1761.950000,-924.103000,
		450.484000,-637.252000,-1055.560000,-297.671000,-570.614000,-1955.920000,171.006000,-436.644000,-169.835000,-1285.140000,
		-143.078000,-920.070000,291.899000,-456.813000,-1146.650000,-1272.930000,33.010300,-678.510000,-79.001000,-1158.740000,
		-402.396000,-1238.440000,-342.827000,-583.789000,-605.500000,-1798.470000,176.480000,-638.409000,1065.690000,-380.505000,
		-647.446000,-1644.260000,37.565400,182.351000,-1043.410000,-947.612000,220.012000,-624.755000,661.244000,813.536000,
		-158.390000,-1184.080000,388.221000,89.738200,-2146.670000,-26.593800,651.514000,-27.333700,1945.840000,-1067.290000,
		-718.802000,-839.373000,-222.751000,-557.799000,-26.229400,-2267.610000,-1131.900000,-1227.080000,1163.200000,-1109.990000,
		-380.052000,-1455.840000,-778.944000,483.907000,-610.281000,-704.922000,843.921000,-383.192000,426.356000,-1245.510000,
		80.343100,-1107.250000,-2005.880000,-158.771000,-568.874000,-2106.860000,-45.156100,-198.709000,1118.980000,-2085.050000,
		771.920000,-570.185000,-1456.160000,-1014.360000,-974.046000,-1048.080000,426.967000,-559.510000,1008.680000,-1270.170000,
		-547.825000,-1647.220000,-83.840900,1089.870000,269.652000,-1371.260000,67.611800,-659.721000,70.511800,-363.321000,
		-233.342000,-1501.280000,-391.993000,-714.110000,-410.258000,-1618.170000,273.037000,-253.530000,1126.280000,-108.706000,
		541.786000,-1054.850000,-941.806000,-916.175000,-471.704000,-878.082000,149.190000,-560.551000,1232.880000,532.455000,
		418.705000,-1463.510000,-1278.830000,-1156.230000,-437.505000,-489.128000,201.539000,-157.221000,1812.370000,-705.097000,
		501.548000,-856.937000,-1185.120000,-513.709000,51.852400,-458.157000,-620.784000,-359.869000,1499.850000,-422.930000,
		125.981000,-2089.900000,-572.254000,72.324300,-1341.590000,-1821.920000,264.185000,12.401000,1679.190000,-247.282000,
		534.880000,-1317.620000,-939.706000,747.487000,-1367.280000,-599.583000,294.131000,-362.710000,1043.200000,-700.753000,
		-619.715000,-754.980000,-771.597000,-463.376000,-12.710800,-2551.190000,-501.667000,-208.789000,-469.738000,-954.588000,
		621.461000,-1146.110000,-802.106000,1015.170000,-1213.670000,-683.494000,222.032000,-251.992000,1147.240000,-905.630000,
		997.772000,-1604.920000,299.746000,572.083000,-2238.780000,-139.205000,363.614000,-507.932000,497.348000,-1231.650000,
		-108.215000,-1713.080000,449.387000,-392.981000,-1096.020000,-1145.240000,373.997000,-223.457000,1588.810000,-600.026000,
		946.248000,-1050.780000,-229.052000,568.556000,-1124.190000,-952.583000,447.398000,310.716000,511.365000,-1156.530000,
		75.755800,-1562.520000,-1348.030000,150.771000,-1656.970000,-611.902000,716.838000,-463.478000,442.479000,-356.748000,
	};
    /** Number of prototypes (m) */
    const PROGMEM unsigned int numPrototypes = 24;
    
    /**
     * Prototype Lables (Z)
     * m x L (dimension of 2D array)
     * numLabels x numPrototypes
     */
    const PROGMEM float prototypeLabelMatrix[] = {
		0.000000,0.739473,0.000000,-0.004563,-0.000628,0.002208,0.000000,0.042286,0.000000,0.001744,
		0.000000,4.178430,0.000000,-0.023761,0.007732,-0.035611,0.000000,-4.332800,0.000000,0.562570,
		0.000000,2.248770,0.000000,1.097140,-1.288410,0.425899,0.000000,0.155535,0.000000,0.090636,
		0.000000,0.967171,0.000000,0.024730,0.002443,-0.004190,0.000000,0.018922,0.000000,0.002948,
		0.000000,1.560160,0.000000,-1.518850,0.973213,1.321540,0.000000,-0.238430,0.000000,-0.133896,
		0.000000,-8.277770,0.000000,-0.321815,0.566742,3.055580,0.000000,1.419280,0.000000,-3.063860,
		0.000000,0.848907,0.000000,0.032877,-0.014069,0.102408,0.000000,5.802700,0.000000,-0.869221,
		0.000000,-164.732000,0.000000,174.628000,-0.833743,-1.712990,0.000000,2.253660,0.000000,0.572986,
		0.000000,6.315630,0.000000,-0.004698,-0.488592,-0.033322,0.000000,-0.896269,0.000000,-2.220460,
		0.000000,3.218600,0.000000,-0.136100,-0.248747,0.172835,0.000000,-0.043954,0.000000,-0.015586,
		0.000000,-1.672320,0.000000,-0.210127,9.306580,-4.919660,0.000000,-0.028138,0.000000,-0.070750,
		0.000000,-13.858500,0.000000,10.057600,14.042000,-3.756190,0.000000,5.399810,0.000000,10.975500,
		0.000000,4.187930,0.000000,1.745240,-4.597500,-4.885230,0.000000,1.203470,0.000000,0.968316,
		0.000000,-31.884400,0.000000,1.866500,52.464800,-12.638000,0.000000,-2.478630,0.000000,-7.872760,
		0.000000,12.325800,0.000000,1.543310,-39.691400,21.725200,0.000000,0.706776,0.000000,-0.801363,
		0.000000,-34.515300,0.000000,-5.885110,-11.897300,90.433900,0.000000,-2.734330,0.000000,3.959880,
		0.000000,9.579620,0.000000,3.709700,1.200390,-3.493890,0.000000,-21.335800,0.000000,-3.096960,
		0.000000,8.890160,0.000000,0.264404,-0.119390,-0.032229,0.000000,2.548610,0.000000,-10.590300,
		0.000000,82.940300,0.000000,-73.085900,1.713330,-3.432040,0.000000,-2.570970,0.000000,-2.485640,
		0.000000,-26.119100,0.000000,-0.413183,0.252397,-0.027025,0.000000,11.178000,0.000000,13.054700,
		0.000000,1.326720,0.000000,0.003723,0.000870,-0.001287,0.000000,0.009439,0.000000,0.022732,
		0.000000,4.483970,0.000000,0.033211,0.005525,-0.071132,0.000000,0.096703,0.000000,0.117653,
		0.000000,7.676090,0.000000,0.004102,-0.066312,0.045287,0.000000,-3.717330,0.000000,-0.625264,
		0.000000,-9.847440,0.000000,-0.187153,0.219795,0.085042,0.000000,-1.726860,0.000000,16.194000,
};
    /** Number of output labels, (L). */
    const PROGMEM unsigned int numLabels = 10; // 0,1,2,3,4,5
    
#else
    const PROGMEM float = 1.0;
    const PROGMEM unsigned int featDim = 10;
    const PROGMEM unsigned int ldDim = 5;
    // Row Major (X.x)
    const PROGMEM  float ldProjectionMatrix[]  = {
        0.0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,
        1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,
        2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,
        3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,
        4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,
    };
    // Column Major
    const PROGMEM unsigned int numPrototypes = 3;
    const PROGMEM float prototypeMatrix[] = {
        -1.0,-0.5,0.0,0.5,1.0,
        -2.0,-1.0,0.0,1.0,2.0,
        -7.51,-7.51,-7.51,-7.51,-7.51,
    };
    // column major
    const PROGMEM unsigned int numLabels = 4;
    const PROGMEM float prototypeLabelMatrix[] = {
        0.96,0.01,0.01,0.02,
        0.02,0.94,0.02,0.02,
        0.10,0.15,0.55,0.20,
    };
#endif
};
    