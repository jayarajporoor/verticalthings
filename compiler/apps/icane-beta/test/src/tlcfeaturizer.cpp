#include "tlcfeaturizer.h"
#include<arduino.h>

TLCFeaturizer::TLCFeaturizer(
	int _bucketWidth, 
	FIFOCircularQ<float, 400> *_ax, 
	FIFOCircularQ<float, 400> *_ay,
	FIFOCircularQ<float, 400> *_az, 
	FIFOCircularQ<float, 400> *_gx,
	FIFOCircularQ<float, 400> *_gy, 
	FIFOCircularQ<float, 400> *_gz
	){
	if(_bucketWidth != 20) 
		Serial.println("ERROR3: BucketWidth not 20 not compatible with current ProtoNN Model");
	this->ax = _ax;
	this->ay = _ay;
	this->az = _az;
	this->gx = _gx;
	this->gy = _gy;
	this->gz = _gz;
}

int TLCFeaturizer::featurize(int bucketDistribution[]){
	/*
	 * The feature vector is not really used.
	 */
	//Ensure Initialize buckets to zero	
	bucketDistribution[0]=-1; 
	bucketDistribution[3]=-1;               
	/*
	* bucket[0]=longestPosIndex, init to -1
	* bucket[1]=longestPosCount, init to 0
	* bucket[2]=longestNegCount, init to 0
	* bucket[3]=longestNegIndex, init tp -1
	*/
	// for(int i = 0; i < this->ax->getSize(); i++){
	// 	Serial.print(this->gy->getNthEarliest(i));
	// 	Serial.print(",");
	// }
	bucketIndex=4;
	// unsigned long startMillisax = millis();
	if((getBucket(this->ax, bucketDistribution))!=1) DEBPRINT("ERROR:1\n");
	// unsigned long startMillisay = millis();
	if((getBucket(this->ay, bucketDistribution))!=1) DEBPRINT("ERROR:1\n");
	// unsigned long startMillisaz = millis();
	if((getBucket(this->az, bucketDistribution))!=1) DEBPRINT("ERROR:1\n");
	// unsigned long startMillisgx = millis();
	if((getBucket(this->gx, bucketDistribution))!=1) DEBPRINT("ERROR:1\n");
	// unsigned long startMillisgy = millis();
	if((getBucket(this->gy, bucketDistribution))!=1) DEBPRINT("ERROR:1\n");
	// unsigned long startMillisgz = millis();
	if((getBucket(this->gz, bucketDistribution))!=1) DEBPRINT("ERROR:1\n");
	// unsigned long endMillis = millis();
	// Serial.println("Time to featurize:"+String((startMillisay - startMillisax))+","
	// 	+String((startMillisaz - startMillisay))+","
	// 	+String((startMillisgx - startMillisaz))+","
	// 	+String((startMillisgy - startMillisgx))+","
	// 	+String((startMillisgz - startMillisgy))+","
	// 	+String((endMillis - startMillisgz))); 
	return 1;
}


int TLCFeaturizer::getBucket(
	FIFOCircularQ<float, 400>*sensorValue1D,
	int bucketDistribution[]
	){
	// Serial.print("length:"+String(sensorValue1D->getSize())+"\n");
	sensorValue1D->flatten(sensorValue1Dflat);
	int imax = 0, imin = 0, maxval = 0,minval = 0, maxcount = 0, mincount = 0, postemp = 0, negtemp = 0, bucketCount;

	bool flagPos = false, flagNeg = false;
	float j,k;
	for(int i =0; i < 400; i++){
		/* This typecasting and all the further values are
		 * scaled to optimize performance
		 */
		int val = (int)100 *sensorValue1Dflat[i];
		

		// Serial.print("Value: "+String(val));
		if(val < 0){
			bucketDistribution[bucketIndex]+=1;
			//break;
		} else if(val > 100){
			bucketDistribution[bucketIndex+19]+=1;
			//break;
		} else {
			// unsigned long innerLoopStart = micros();
			int index=val/5;
			bucketDistribution[bucketIndex+index]+=1;
			// unsigned long innerLoopStop = micros();
			// Serial.print("Time: "+String((innerLoopStop - innerLoopStart))); 
		 
		} 
		

		if(sensorValue1D==this->gy){
			int thresholdCount=3;
			//PosEdgeValues
			if(val>62 && !flagPos){
				maxcount = 1;
				postemp = i;
				flagPos = true;
				flagNeg = false;
			} else if(val>62 && flagPos){
				flagNeg = 0;
				mincount = 0;
				maxcount++;
				if(maxcount>maxval){
					maxval = maxcount;
					if(maxval>thresholdCount) bucketDistribution[1] = maxval;
					imax = postemp;
					if(maxval>thresholdCount) bucketDistribution[0] = imax;
				}
			} else if(val<62 && flagPos && val >32){
				flagPos=false;
				maxcount = 0;
				mincount = 0;
			//NegEdgeBegins
			} else if(val<62 && flagPos && val <32){
				flagPos=false;
				maxcount=0;
				mincount = 1;
				negtemp = i;
				flagNeg = true;
			//NegEdgeValues 		
			} else if(val<32 && !flagNeg){
				mincount =1;
				negtemp = i;
				flagNeg = true;
				flagPos = false;
			} else if(val<32 && flagNeg){
				mincount++;
				if(mincount>minval){
					minval=mincount;
					if(minval>thresholdCount) bucketDistribution[2] = minval;
					imin = negtemp;
					if(minval>thresholdCount) bucketDistribution[3] = imin;
				}

			} else if(val>32 && flagNeg && val<65){
				flagNeg=false;
				mincount = 0;
			} else if(val>32 && flagNeg && val>65){
				flagNeg=false;
				mincount = 0;
				maxcount = 1;
				postemp = i;
				flagPos = true;
				

			} else {
				flagPos = false;
				maxcount = 0;
				flagNeg = false;
				mincount = 0;
			}
			// Serial.println("ValGY:"+String(val));

		}//pos-neg edge count and index loop termination

	}//Iterating over 400 elements
	 
	bucketIndex+=bucketWidth;//Updating Bucket Index
	// Serial.println("End of 1 instance: "+String(bucketIndex));
	if(bucketIndex>124 || bucketIndex<23) return 0;
	return 1;
}
