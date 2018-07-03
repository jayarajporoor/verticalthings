/*
 * @author: Don Dennis (t-dodenn)
 * testprotoNNF.h
 */
#ifdef __TEST_PROTONN__

#ifndef __XX__TEST__PROTONN__XX__


#if defined(ARDUINO) && ARDUINO >= 100
  #include "Arduino.h"
#else
  #include "WProgram.h"
#endif

#include "../../config.h"
#include "../protoNN.h"
#include "../data.h"


/**
 * Some basic sanity checks
 * @see \_\_TEST_PROTONN__
 */
unsigned ProtoNNF::runProtoNNTests(){
	unsigned m = 3;
	unsigned int d = 10;
	unsigned int d_cap = 5;
	unsigned int L = 4;
	unsigned int testFailures = 0;
	for(int i = 0; i < d_cap; i++){
		for(int j = 0; j < d; j++){
			float component = getProjectionComponent(i,j);
			if(fabs(component - (i+j)) >= 0.000001){
				testFailures |= 1;
			}
		}
	}
	
	float prototype0[] = {-1.0,-0.5,0.0,0.5,1.0};
	float prototype1[] = {-2.0,-1.0,0.0,1.0,2.0};
	float prototype2[] = {-7.51,-7.51,-7.51,-7.51,-7.51};
	float *prototypes[] = {prototype0, prototype1, prototype2};
	float currPrototype[d_cap];
	for(int i = 0; i < m; i++){
		getPrototype(i, currPrototype);
		for(int j = 0; j < d_cap; j++){
			if(fabs(prototypes[i][j] - currPrototype[j]) >= 0.000001){
				testFailures |= 2;
			}
		}
	}

	float prototypeLabel0[] = {0.96,0.01,0.01,0.02};
	float prototypeLabel1[] = {0.02,0.94,0.02,0.02};
	float prototypeLabel2[] = {0.10,0.15,0.55,0.20};
	float *prototypeLabels[] = {prototypeLabel0, prototypeLabel1, prototypeLabel2};
	float currPrototypeLabel[L];
	for(int i = 0; i < m; i++){
		getPrototypeLabel(i, currPrototypeLabel);
		for(int j = 0; j < L; j++){
			if(fabs(prototypeLabels[i][j] - currPrototypeLabel[j]) >= 0.000001){
				testFailures |= 4;
			}
		}
	}

	float dataPoint[] = {0.1, 0.2, 0.3, 0.4, 0.5, -0.1, -0.2, -0.3, -0.4, -0.5};
	float ldProjection[d_cap];
	float expectedLDProjection[] = {-7.5,-7.5,-7.5,-7.5,-7.5};
	denseLDProjection(dataPoint, ldProjection);
	for(int i = 0; i < d_cap; i++){
		if(fabs(ldProjection[i] - expectedLDProjection[i]) >= 0.000001){
			testFailures |= 8;
		}
	}

	float vec1[] = {1.0, 2.0, -1.0};
	float vec2[] = {1.2, 3.0, -1.1};
	if(fabs(gaussian(vec1, vec2, 3, 1.0) - 0.349937749) >= 0.000001)
		testFailures |= 16;
	if(fabs(gaussian(vec1, vec2, 3, 0.5) - 0.769126364) >= 0.000001)
		testFailures |= 32;

	scalarVectorMul(vec1, 3, -2);
	float expectedResultMul[] = {-2.0, -4.0, 2.0};
	for(int i = 0; i < 3; i++){
		if(fabs(expectedResultMul[i] - vec1[i]) >= 0.0000001)
			testFailures |= 64;
	}
	vectorVectorAdd(vec2, vec1, 3);
	float expectedResultAdd[] = {-0.8, -1.0, 0.9};
	for(int i = 0; i < 3; i++){
		if(fabs(expectedResultAdd[i] - vec2[i]) >= 0.0000001){
			testFailures |= 128;
		}
	}

	float maxScore = rho(dataPoint, d, true);
	if (fabs(maxScore - 0.5) >= 0.001)
		testFailures |= 256;

	float prediction = predict(dataPoint, d, true);
	if(fabs(prediction - 0.54972507) >= 0.000001)
		testFailures |= 512;

	prediction = predict(dataPoint, d, false);
	if(fabs(prediction - 2.0) >= 0.000001){
		testFailures |= 1024;
	}

	if(this->errorCode != 0)
		testFailures |= 2048;
	return testFailures;
}

#endif // __XX__TEST__PROTONN__XX__
#endif // __TEST_PROTONN__