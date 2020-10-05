from model import ldDim, numLabels, prototypeMatrix, ldProjectionMatrix;
import Config;
import limit;
import math
import np
import sys
scores = np.zeroes(10, dtype=int32)

def predict(float[FEATURE_LENGTH] x):
	x_cap : float[ldDim] = np.zeroes(ldDim, dtype=float)
	y_cap = float[numLabels] = np.zeroes(y_cap, dtype=float)
	weight : float = 0.0
    maxScore :float
	maxIndex :int
	#scores=0;
	y_cap=0.0;
	# Project x onto ldDim dimension
	x_cap= ldProjectionMatrix*x;
	for i in range(0,numPrototypes):
		weight=(x_cap-prototypeMatrix[i]) * (x_cap-prototypeMatrix[i])
		weight=-1*gamma*gamma*weight
		weight=math.exp(weight)
		for j in range(0, numLabels):
			y_cap[j]=prototypeLabelMatrix[i][j]*weight + y_cap[j]
	for i in range(0,numLabels):
		scores[i]=100000*y_cap[i]
	    #Serial.println(scores[i])
	maxScore= sys.float_info.min
	maxIndex=0
	for i in range(0, numLabels):
		if(y_cap[i] > maxScore):
			maxIndex=i
			maxScore=y_cap[i]
	return maxIndex, scores
