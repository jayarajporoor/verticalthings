/*
 * @author: Don Dennis (t-dodenn)
 * featureextraction.h
 */
#ifndef __FEATUREEXTRACTION__
#define __FEATUREEXTRACTION__

#include "utils.h"

void computeFeaturesForBucket(
	const Vector3D<float> *bucketBuffer,
	const int16_t numVectors,
	const Vector3D<float> *meanAcc,
	const Vector3D<float> *meanGyr,
	float* dest
	);

void minMaxNormalize(
	const Vector3D<int16_t> *v,
	const Vector3D<int16_t> *vmin, 
	const Vector3D<int16_t> *vmax,
	Vector3D<float>   *dst
	);

#endif // __FEATUREXTRACTION__

