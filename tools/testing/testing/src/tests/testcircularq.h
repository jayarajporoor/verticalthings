#ifdef __TEST_CIRCULARQ__ // the compiler flag
#ifndef __XX_TEST_CIRCULARQ_XX__ // the compiler multi-include safeguard
#define __XX_TEST_CIRCULARQ_XX__

#include "../utils.h"
#include "../../config.h"
#include "../protoNN.h"

uint16_t testCircularQ(){
	uint8_t errorCode = 0;
	FIFOCircularQ<int, 10> testQ;
	int flat[10];
	testQ.forceAdd(0);
	testQ.forceAdd(1);
	testQ.flatten(flat);
	if(flat[0] != 0 && flat[1] != 1)
		errorCode |= 1;
	for(int i = 2;i < 11; i++)
		testQ.forceAdd(i);
	testQ.flatten(flat);
	for(int i = 0; i < 10; i++){
		if(flat[i] != i + 1){
			errorCode |= 2;
			break;
		}
	}
	for(int i = 100; i < 120; i++)
		testQ.forceAdd(i);
	testQ.flatten(flat);
	for(int i = 0; i < 10; i++){
		if(flat[i] != 110 + i){
			errorCode |= 4;
			break;
		}
	}

	FIFOCircularQ<float, 10> testQF;
	float flatF[10];
	testQF.forceAdd(0.0);
	testQF.forceAdd(0.1);
	testQF.flatten(flatF);
	if( fabs(flatF[0] - 0.0) >= 0.00001 ||
		fabs(flatF[1] - 0.1) >= 0.00001){
		errorCode |= 8;
	}
	for(int i = 2;i < 11; i++)
		testQF.forceAdd(1 / float(i));
	testQF.flatten(flatF);
	if(fabs(flatF[0] - 0.1) >= 0.00001)
		errorCode |= 16;
	for(int i = 1; i < 10; i++){
		if(fabs(flatF[i] - 1.0/(i + 1.0)) >= 0.00001){
			errorCode |= 16;
			break;
		}
	}
	for(int i = 100; i < 120; i++)
		testQF.forceAdd(1.0/float(i));
	testQF.flatten(flatF);
	for(int i = 0; i < 10; i++){
		if(fabs(flatF[i] - 1.0/(110.0 + i)) >= 0.000001){
			errorCode |= 32;
			break;
		}
	}
	return errorCode;
}

#endif // __XX_TEST_CIRCULARQ_XX__
#endif // __TEST_CIRCULARQ__