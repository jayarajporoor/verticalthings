/*
 * @author: Don Dennis (t-dodenn)
 * config.h
 */
#ifndef __CONFIG__
#define __CONFIG__
/**
 * @file
 * Configuration options X
 */
/** Define the _DEBUG_ derivative to obtain 
 * verbose debugging information.
 */
#define _DEBUG_
/**
 * Baud rate for serial communication.
 */
#define BAUD_RATE 				115200
/**
 * The LED Pin.
 */
#define LED_PIN 				LED_BUILTIN
/**
 * ## Tests for ProtoNN
 * To have a quick test of all the methods
 * used, define the __TEST_PROTONN__ preprocessor
 * derivative through command line or here.
 * If defining in this file, make sure
 * the definition occurs before all includes and other
 * lines.
 *
 * After defining __TEST_PROTONN__ call the runProtoNNTests()
 * method to run very basic sanity checks on the defined
 * methods. If the returned value is zero, all is well. If
 * the non zero values are returned, please inspect the
 * runProtoNNTests to figure out what the errors are. Each
 * bit in the returned unsigned int corresponds to one particular
 * test failure. 
 *
 * @see runProtoNNTests().
 * 
 */
#undef __TEST_PROTONN__
/**
 * @todo DOCUMENT
 */
#undef __TEST_CIRCULARQ__
/**
 * The number of buckets that are in one feature
 * vector
 */
#define NUM_BUCKETS 			20
/**
 * The stride in terms of number of
 * measurements (instances) that is used for featurization.
 */
#define STRIDE			20
/**
 * The width of the internal buffer that retains
 * a subwindow worth of measurements. 2 x because
 * we have to keep track of acceleration and gyro
 * values. (Accel and Gyro values are of type Vector16).
 */
#define BUCKET_BUFF_WIDTH 		(2 * BUCKET_WIDTH)
#define BUCKET_WIDTH 			20
#define FEATURE_LENGTH			(6 * BUCKET_WIDTH + 4)
/**
 * For the current set of features, we have 6 features
 * per bucket - the standard deviations for the 6 raw
 * values. Hence the feature vector dimension is 
 * `6 x NUM_BUCKETS`.
 */
#define FEAT_VEC_DIM 			((6 * NUM_BUCKETS) + 4)
#define GEST_NOTA					0
#define GEST_SILENCE				1
#define GEST_TAP 					2
#define GEST_DTAP 					3
#define GEST_LTWIST					4
#define GEST_RTWIST					5
#define GEST_Slow_LTWIST			7
#define GEST_Slow_RTWIST			8
#endif // __CONFIG__