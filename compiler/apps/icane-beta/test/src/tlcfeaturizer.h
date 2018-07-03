#ifndef __TLC_Featurizer__
#define __TLC_Featurizer__

#include "../config.h"
#include "utils.h"

class TLCFeaturizer {

	FIFOCircularQ<float, 400> *ax, *ay, *az, *gx, *gy, *gz;
	float sensorValue1Dflat[400];
	int bucketIndex;
	int bucketWidth=20; // Default value of number of buckets 
	int getBucket(
		FIFOCircularQ<float, 400>*, 
		int bucketDistribution[]);
	/*
	 * Format of feature vector:[longestPosIndex,longestPosCount,
	 * longestNegCount,longestNegIndex,ax[20buckets],
	 * ay[20buckets],az[20buckets],
	 * gx[20buckets],gy[20buckets],gz[20buckets]]
	 */
public:
	TLCFeaturizer(
		int bucketWidth, 
		FIFOCircularQ<float, 400>*, 
		FIFOCircularQ<float, 400>*,
		FIFOCircularQ<float, 400>*, 
		FIFOCircularQ<float, 400>*,
		FIFOCircularQ<float, 400>*, 
		FIFOCircularQ<float, 400>*
		);
	int featurize(int bucketDistribution[]);
};

#endif