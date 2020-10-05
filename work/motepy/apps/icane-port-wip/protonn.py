scores : int32[10] = np.zeroes(10, dtype=int32)

def predict(x: float[FEATURE_LENGTH]) -> void:
    x_cap : float[10] =  np.zeroes(10, dtype=float32)
    y_cap : float[10] =  np.zeroes(10, dtype=float32)
    weight : float = 0
    maxScore :float = 0
    maxIndex :int  = 0
    #scores=0;
    y_cap=0.0
    # Project x onto ldDim dimension
    x_cap= ldProjectionMatrix*x
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
    #return maxIndex, scores
    return maxIndex
