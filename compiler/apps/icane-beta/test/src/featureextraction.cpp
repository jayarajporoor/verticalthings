/*
 * @author: Don Dennis (t-dodenn)
 * featureExtraction.cpp
 */
#include "featureextraction.h"
/**
 * Given a bucket containing BUCKET_WIDTH number of <acc, gyr>
 * instances, or stated otherwise, 2 x BUCKET_WIDTH number of
 * Vector values, this method computes the standard deviation
 * of the 6 raw values <acc.x, acc.y, acc.z, gyr.z, gyr.y, gyr.z>
 * from a predefined mean and stores them in the provided
 * destination.
 *
 * @param bucketBuffer The buffer containing the **normalized** vector
 * 						instances (2 x BUCKET_WIDTH of them). Every even
 *						indexed vector is assumed to be Accelero values
 *					    and odd indexed vector is assumed to be gyro
 * 						values.
 * @param numVectors   The total number of vectors. Every alternate
 *                      vector should be of the same measurement.
 *                      That is, either acceleration or gyro. The
 *                      returned dest, retains the same order.
 * @param dest          The destination where the STD deviation is
 *                      saved. Should be a float array of size 6. 
 *                      The first 3 values stored correspond to the
 *                      the first vector (accel) and the second 3
 *                      values correspond to the second vector(gyro).
 * @returns void
 */
void computeFeaturesForBucket(
	const Vector3D<float> *bucketBuffer,
	const int16_t numVectors,
	const Vector3D<float> *meanAcc,
	const Vector3D<float> *meanGyr,
	float* dest
	){
	const Vector3D<float> *acc, *gyr;

	for(int8_t i = 0; i < 6; i++)
		dest[i] = 0;

	for(int16_t i = 0; i < numVectors - 1; i += 2){
		acc = (&(bucketBuffer[i]));
		gyr = (&(bucketBuffer[i+1]));
		dest[0] += (acc->x - meanAcc->x) * (acc->x - meanAcc->x);
		dest[1] += (acc->y - meanAcc->y) * (acc->y - meanAcc->y);
		dest[2] += (acc->z - meanAcc->z) * (acc->z - meanAcc->z);
		dest[3] += (gyr->x - meanGyr->x) * (gyr->x - meanGyr->x);
		dest[4] += (gyr->y - meanGyr->y) * (gyr->y - meanGyr->y);
		dest[5] += (gyr->z - meanGyr->z) * (gyr->z - meanGyr->z);
	}
	for(int8_t i = 0; i < 6; i++) {
		dest[i] /= (numVectors / 2);
		dest[i] = sqrt(dest[i]);
	}
}


/**
 * Min-max normalization of a measurement. The min and max
 * values have to be provided.
 *
 * @param v The values to normalize. Expected 16bit ints.
 * @param vmax A float vector containing the maximum values of 
 * vector.
 * @param vmin The minimum values for vector 1.
 * @param dst The float destination where the values will be
 * stored.
 * @returns void
 */
void minMaxNormalize(
	const Vector3D<int16_t> *v,
	const Vector3D<int16_t> *vmin, 
	const Vector3D<int16_t> *vmax,
	Vector3D<float>   *dst
	){
	
	dst->x = ((float)(v->x) - (float)(vmin->x));
	dst->x /= ((float)vmax->x - (float)vmin->x);

	dst->y = ((float)(v->y) - (float)(vmin->y));
	dst->y /= ((float)vmax->y - (float)vmin->y);

	dst->z = ((float)(v->z) - (float)(vmin->z));
	dst->z /= ((float)vmax->z - (float)vmin->z);
}
