/*
 * @author: Don Dennis (t-dodenn)
 * predictionfilter.h
 */
#ifndef __PREDICTION_FILTER__
#define __PREDICTION_FILTER__

#include "../config.h"
#include "protoNN.h"
#include "thresholdpredictor.h"

/**
 * The model that was trained includes only data from
 * when we are standing still holding the stick vertical
 * and tapping. There is no information of non-vertical
 * postures or walking/other postures. Untill we get around
 * to getting a proper dataset for the stick, we will use
 * some filtering on top of the prediction output.
 * 
 * This class works on some state machine info and some
 * heuristics.
 *
 * @todo If you keep the stick vertical for too long, you'll
 * come back to gesture mode after exiting it. This is bad because
 * if the stick has been kept vertical for the sake of it, like
 * when placed near a wall, you'd keep on continuously getting
 * notifications. Add ANOTHER(!) state to handle this.
 *
 * Its better not to use physical time in the state machine. Physical time
 * depends on other parts of the code; specifically things like
 * how long WiFi took to send// or even if it has sent something.
 * It is better that the we use a logical clock and keep small
 * state transition times rather than deal with a physical clock.
 *
 * @todo THe still will be in a still state for a very long time
 * How do you plan to handle overflows of the counter variables?
 */
class PredictionFilter {
	enum States{
		NON_PREDICTION_MODE,
		PREDICTION_MODE,
		VERTICAL_NON_PREDICTION_MODE,
		WAIT_MODE,
	} currState;
	// @todo These most certainly will overflow. How to handle?
	unsigned long int tapCount;
	unsigned long int twistCount;
	unsigned long int silenceCount;
	unsigned long int waitCount;
	unsigned long int verticalCount;
	unsigned long int nonVerticalCount;
	// Move to `PREDICTION_MODE` after stick is vertical for
	// `reqVerticalCount` (x(15 + 23) ~= 39ms) times
	const int reqVerticalCount = 15; //~1s
	// A tap outputed after `reqTapCount` continuous
	// tap predictions 
	const int reqTapCount = 3;
	// A twist outputed after `reqTwistCount` continuous
	// twist predictions
	const int reqTwistCount = 1;
	// Move to NON_PREDICTION_MODE after `maxAllowedSilenceCount` 
	// (x(15 + 23) ~= 39ms) continuous silence
	const int maxAllowedSilenceCount = 100; //~3.3s
	// Move out of WAIT_MODE after 'reqWaitCount' 
	// (x(15 + 23) ~= 39ms) has been hit
	const int reqWaitCount = 100; //~3s
	// Sometimes the stick is rest at vertical mode. In such
	// situations, it will be back to gesture recognition mode
	// iff you take it to non-vertical state for 
	// `reqNonVerticalCount` (x(15 + 23)) count and bring it
	// back to vertical posture.
	const int reqNonVerticalCount = 30; // 1s
	void resetGestCountAll();
	void resetGestCountExcept(int gesture);
	void updateVerticalCount(float* featVec, int length);

	int nonPredModeTransition(float* featVec, int length);
	int vertNonPredModeTransition(float* featVec, int length);
	int predModeTransition(float* featVec, int length, int predOutput);
	int waitModeTransition();
public:
	PredictionFilter();
	int predict(float* featVec, int length,
		ThresholdPredictor* predictor);
};


PredictionFilter::PredictionFilter(){
	currState = States::VERTICAL_NON_PREDICTION_MODE;
	resetGestCountAll();
	waitCount = 0;
	verticalCount = 0;
	nonVerticalCount = 0;
}

void PredictionFilter::resetGestCountAll(){
	tapCount = 0;
	twistCount = 0;
	silenceCount = 0;
}

void PredictionFilter::resetGestCountExcept(int gesture){
	if (gesture == GEST_NOTA ||
		gesture == GEST_SILENCE){
		tapCount = 0;
		twistCount = 0;
	} else if(gesture == GEST_TAP ||
		gesture == GEST_DTAP){
		twistCount = 0;
		silenceCount = 0;
	} else if(gesture == GEST_LTWIST ||
		gesture == GEST_RTWIST){
		tapCount = 0;
		silenceCount = 0;
	}
}


int PredictionFilter::nonPredModeTransition(
	float* featVec,
	int length){

	int outputGest;
	resetGestCountAll();
	updateVerticalCount(featVec, length);
	outputGest = GEST_SILENCE;
	if(verticalCount >= reqVerticalCount){
		verticalCount = 0;
		currState = States::PREDICTION_MODE;
		// @todo FIX THIS. For now, consider GEST_RTWIST
		// as us entering the gesture mode and use this
		// in the App.
		outputGest = GEST_RTWIST;
	}
	return outputGest;
}

int PredictionFilter::vertNonPredModeTransition(
	float* featVec,
	int length){
	int oldVerticalCount = verticalCount;
	updateVerticalCount(featVec, length);
	if(verticalCount == oldVerticalCount){
		// we are not vertical anymore
		nonVerticalCount++;
		verticalCount = 0;
	} else{
		nonVerticalCount = 0;
	}
	if (nonVerticalCount >= reqNonVerticalCount){
		currState = States::NON_PREDICTION_MODE;
		nonVerticalCount = 0;
	}
	return GEST_SILENCE;
}

int PredictionFilter::predModeTransition(
	float* featVec,
	int length,
	int predGest){

	int outputGest = GEST_SILENCE;
	switch (predGest) {
		case GEST_SILENCE:
			resetGestCountExcept(predGest);
			silenceCount++;
			outputGest = GEST_SILENCE;
			if(silenceCount >= maxAllowedSilenceCount){
				currState = States::VERTICAL_NON_PREDICTION_MODE;
				resetGestCountAll();
			}
			break;

		case GEST_DTAP:
			resetGestCountExcept(predGest);
			tapCount++;
			if(tapCount >= reqTapCount){
				outputGest = GEST_DTAP;
				currState = States::WAIT_MODE;
				resetGestCountAll();
			}
			break;

		case GEST_LTWIST:
			resetGestCountExcept(predGest);
			twistCount++;
			if(twistCount >= reqTwistCount){
				outputGest = GEST_LTWIST;
				currState = States::WAIT_MODE;
				resetGestCountAll();
			}
			break;

		default:
			// Something is terribly wrong!
			Serial.println("Internal error!");
			break;
	}
	return outputGest;
}


int PredictionFilter::waitModeTransition(){
	int outputGest = GEST_SILENCE;
	resetGestCountAll();
	waitCount++;
	// @todo: Check if we are veritical and if not m
	// move to non-prediction mode
	if(waitCount >= reqWaitCount){
		// I've waited long enough!
		waitCount = 0;
		currState = States::PREDICTION_MODE;
	}
	return outputGest;
}

/**
 * @todo Document
 */
int PredictionFilter::predict(
	float* featVec, int length,
	ThresholdPredictor* predictor){

	int outputGest;
	int predGest = predictor->predict(featVec, length);
	return predGest;

	if(predGest == GEST_NOTA || predGest == GEST_SILENCE)
		predGest = GEST_SILENCE;
	else if(predGest == GEST_TAP || predGest == GEST_DTAP)
		predGest = GEST_DTAP;
	else if(predGest == GEST_LTWIST || predGest == GEST_RTWIST)
		predGest = GEST_LTWIST;

	predGest = GEST_SILENCE;
	int originalState = currState;
	switch (currState) {
		case States::NON_PREDICTION_MODE:
			outputGest = nonPredModeTransition(featVec, length);
			break;
		case States::VERTICAL_NON_PREDICTION_MODE:
			outputGest = vertNonPredModeTransition(featVec, length);
			break;
		case States::PREDICTION_MODE:
			outputGest = predModeTransition(featVec, length, predGest);
			break;
		case States::WAIT_MODE:
			outputGest = waitModeTransition();
			break;
	}
	if(currState != originalState){
		#ifdef _DEBUG_
		String line = "";
		if(currState == States::NON_PREDICTION_MODE)
			line += "NON_PREDICTION_MODE";
		else if(currState == States::PREDICTION_MODE)
			line += "PREDICTION_MODE";
		else if(currState == States::WAIT_MODE)
			line += "WAIT_MODE";
		else if(currState == States::VERTICAL_NON_PREDICTION_MODE)
			line += "VERTICAL_NON_PREDICTION_MODE";
		DEBPRINTLN(line);
		#endif
	}
	return outputGest;
}


void PredictionFilter::updateVerticalCount(float* featVec, int length){
	float ax = 0.0, ay = 0.0, az = 0.0, gx = 0.0, gy = 0.0, gz = 0.0;
	for(int i = 0; i < length - 6; i += 6){
		ax += featVec[i];
		ay += featVec[i+1];
		az += featVec[i+2];
		gx += featVec[i+3];
		gy += featVec[i+4];
		gz += featVec[i+5];
	}
	ax /= length;
	ay /= length;
	az /= length;
	gx /= length;
	gy /= length;
	gz /= length;
	// @todo really you only need ay (ay==g)
	bool ayStable = (fabs(ay - 0.0005) <= 0.0010);
	bool gxStable = (fabs(gx - 0.0002) <= 0.0500);
	bool gyStable = (fabs(gy - 0.0002) <= 0.0100);
	bool gzStable = (fabs(gz - 0.0002) <= 0.0100);
	if(ayStable && gxStable && gyStable && gzStable)
		verticalCount++;
}

#endif