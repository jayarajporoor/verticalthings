/*
 * @author: Don Dennis (t-dodenn)
 * helper.h
 * Helper functions. This is a header only file.
 */
#ifndef _HELPER_
#define _HELPER_

#include "MPUWrapper.h"

#ifdef __DEBUG__
  #define DEB(x) x
#else
  #define DEB(x)
#endif

#ifdef __VERBOSE__
	#define VER(x) x
#else
	#define VER(x)
#endif

String labelToText(Labels l){
	switch(l){
		case LEFT_TWIST:
			return "LEFT_TWIST";
		case RIGHT_TWIST:
			return "RIGHT_TWIST";
		case VERTICAL_UP:
			return "VERTICAL_UP";
		case STILL:
			return "STILL";
		case UNCLASSIFIED:
			return "UNCLASSIFIED";
		default:
			return "ERROR!";
	}
}
void waitForSerial(){
	while(!(Serial.available() > 0));
	while((Serial.available() > 0)){
		int8_t x = Serial.read();
	}
}
void printCSV(unsigned int timeNow, MPUWrapper *mpu1,
	MPUWrapper *mpu2, int8_t gesture){
	String line(timeNow);
	line.concat(",");
	line.concat(mpu1->getCSVString());
	line.concat(",");
	line.concat(mpu2->getCSVString());
	line.concat(',');
	line.concat(String(gesture));
	Serial.println(line);
}

/*
 * Circular queue for holding previous
 * measurements to be used for various classification
 * methodologies. The queue has a notion of temporal
 * ordering.
 */
template<class Typ, int16_t START_SIZE>
class TemporalCQ {
private:
	Typ queue[START_SIZE];
	int16_t front;
	int16_t back;
public:
	TemporalCQ(){
		front = -1;
		back = -1;
	}

	/*
	 * Adds an element to the circular queue. 
	 * If the queue is full, the oldest element is removed
	 */
	void forceAdd(Typ obj){
		if (front == -1) {
			// Empty
			back = 0;
			front = 0;
		} else if(back == front) {
			// Full
			back += 1;
		}
		queue[front++] = obj;
		front %= START_SIZE;
		back %= START_SIZE;
	}

	/*
	 * Returns the correct temporally ordered measurement.
	 * 0 represents the earliest, 1 represents the one queued
	 * just before that and so forth.
	 *
	 * If an index is requested for that is not present
	 * in the queue, the returned value is junk. Check for
	 * size of queue before returning
	 */
	Typ getNthEarliest(int i) {
		int16_t index = front - (i+1);
		if(index < 0)
			index = START_SIZE + index;
		return queue[index];
	}

	int16_t getSize(){
		if(front == -1)
			return 0;
		else if (front == back)
			return START_SIZE;
		else if (front > back)
			return front - back;
		else
			return front + (START_SIZE - back);
	}

	int16_t getFront(){
		return front;
	}

	int16_t getBack(){
		return back;
	}
};

#endif