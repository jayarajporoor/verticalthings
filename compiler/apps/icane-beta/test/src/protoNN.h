/*
 * @author: Don Dennis (t-dodenn)
 * protoNN.h
 */

#ifndef __PROTONN__
#define __PROTONN__

#include "../config.h"
#include <avr/pgmspace.h>
#include <cmath>
#include <float.h>
#include "data.h"

/**
 * ProtoNN predictor with floating point
 * support and using dense matrices.
 * ProtoNN parameters are assumed to be in the data.h file.
 *
 * 
 * @todo The predict method can be further optimized to
 * do online calculations with both the prototype matrix
 * at the cost of some time; explored.and the prototype
 * label matrix.
 */
class ProtoNNF {
	int8_t errorCode;
	unsigned featDim, ldDim, numPrototypes, numLabels;
	float gamma;
private:
	int8_t getInitErrorCode();
	int8_t denseLDProjection(float* x, float* x_cap);
	float gaussian(const float *x, const float *y, unsigned length, float gamma);
	int8_t scalarVectorMul(float *vec, unsigned length, float scalar);
	int8_t vectorVectorAdd(float *dstVec, float *srcVec, unsigned length);
	int8_t getPrototype(unsigned i, float *prototype);
	int8_t getPrototypeLabel(unsigned i, float *prototypeLabel);
	float getProjectionComponent(unsigned i, unsigned j);
	float rho(float* labelScores, unsigned length);

public:
	ProtoNNF();
	ProtoNNF(unsigned d, unsigned d_cap, unsigned m, unsigned L, float gamma);
	float predict(float *x, unsigned length, int *scores);

	/* Getters */
	int8_t getErrorCode();
	#ifdef __TEST_PROTONN__
		unsigned runProtoNNTests();
	#endif
};
#endif // __PROTONN__