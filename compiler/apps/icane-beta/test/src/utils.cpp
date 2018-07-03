/*
 * @author Don Dennis (t-dodenn)
 * utils.cpp
 */
/** @file 
 * Helper methods used in various parts.
 */
#include "utils.h"

#ifdef _DEBUG_
/**
 * Busy waits until a input from serial is received.
 * Once a character is available, reads and returns it. 
 */
char waitForSerialInput(){
	while(!(Serial.available() > 0));
	return Serial.read();
	
}

/**
 * Busy waits until a start tag from serial is received.
 * The start tag that is searched for is `_START_\n`.
 * Returns once the start tag is found in serial.
 */
void waitForStartTag(){
	char lookingFor = 0;
	char startTag[] = "_START_\n";
	while(true) {
		if (!Serial.available()) continue;
		char c = Serial.read();
		if(c == startTag[lookingFor]) lookingFor += 1;
		else lookingFor = 0;
		if (lookingFor == 7) return;
	}
}

TimeProfiler::TimeProfiler (){
	numExamples = 0;
	totalTime = 0;
	startTime = 0;
}
void TimeProfiler::start(){
	startTime = millis();
}
void TimeProfiler::end(){
	if (startTime ==0) return;
	totalTime += millis() - startTime;
	numExamples += 1;
}

double TimeProfiler::getAverage(){
	if (numExamples == 0) return 0.0;
	return (totalTime/numExamples);
}

long TimeProfiler::getNumExamples(){
	return numExamples;
}

long TimeProfiler::getTotalTime() {
	return totalTime;
}

#endif // _DEBUG_