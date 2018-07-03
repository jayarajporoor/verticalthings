#ifndef __THRESHOLD_PREDICTOR__
#define __THRESHOLD_PREDICTOR__

#include "../config.h"
#include "utils.h"

class ThresholdPredictor {

	FIFOCircularQ<float, 400> *ay, *gy;
	float ayflat[400];
	float gyflat[400];
	void getBucketGY(int*);
	void getBucketAY(int*);
	int checkTap(int*);
	int checkTwist(int*);
public:
	ThresholdPredictor(FIFOCircularQ<float, 400>*, FIFOCircularQ<float, 400>*);
	int predict(float *x, unsigned length);
	int getErrorCode();
};

#endif