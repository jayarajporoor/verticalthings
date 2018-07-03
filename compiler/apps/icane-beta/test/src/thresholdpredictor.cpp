#include "thresholdpredictor.h"

ThresholdPredictor::ThresholdPredictor(FIFOCircularQ<float, 400> *ay_, FIFOCircularQ<float, 400> *gy_){
	this->ay = ay_;
	this->gy = gy_;
}

int ThresholdPredictor::getErrorCode(){
	return 0;
}

int ThresholdPredictor::predict(float *rawValues, unsigned length){
	/*
	 * The feature vector is not really used.
	 * the raw ay, gx+gz values are used
	 */
	int bucketAY[6] = {0, 0, 0, 0, 0, 0};
	getBucketAY(bucketAY);
	int gest = checkTap(bucketAY);
	if (gest == GEST_DTAP)
		return gest;
	// if (bucketAY[1] <= 250) {// cannot be twist
	// 	return GEST_SILENCE;
	// }
	int bucketGY[5] = {0, 0, 0, 0, 0};
	getBucketGY(bucketGY);
	gest = checkTwist(bucketGY);
	return gest;
}


int ThresholdPredictor::checkTap(int bucket[]){
	bool bin0, bin1, bin2, bin3, bin4, bin5;
	bin0 = (bucket[0] > 0 && bucket[0] < 100);
	bin1 = (bucket[1] > 150 && bucket[1] < 300);
    bin2 = (bucket[2] > 0 && bucket[2] < 150);
    bin3 = (bucket[3] > 0 && bucket[3] < 50);
    bin4 = (bucket[4] > 0 && bucket[4] < 50);
    bin5 = (bucket[5] > 0 && bucket[5] < 50);
    int tap = bin0 && bin1 && bin2 && bin3 && bin4 && bin5;
    if (tap) return GEST_DTAP;
    return GEST_SILENCE;
}


int ThresholdPredictor::checkTwist(int bucket[]){
	bool bin0, bin1, bin2, bin3, bin4, bin5;
	bin0 = bucket[0] > 20 && bucket[0] < 130;
    bin1 = bucket[1] > 10 && bucket[1] < 80;
    bin2 = bucket[2] > 120 && bucket[2] < 300;
    bin3 = bucket[3] > 3 && bucket[3] < 75;
    bin4 = bucket[4] > 20 && bucket[4] < 150;
    int twist = bin0 && bin2 && bin4;
    if (twist) {
    	int curr_i_0 = -1, curr_l_0 = 0;
    	int curr_i_1 = -1, curr_l_1 = 0;
    	int max_i_0 = -1, max_l_0 = 0;
    	int max_i_1 = -1, max_l_1 = 0;
    	for(int i = 0; i < 400; i++){
    		if (fabs(gyflat[i] - 1.0) <= 0.05) {
    			curr_i_0 = -1;
    			curr_l_0 = 0;
    			curr_l_1 += 1;
    			if (curr_i_1 == -1)
    				curr_i_1 = i;
    			if (curr_l_1 > max_l_1){
    				max_l_1 = curr_l_1;
    				max_i_1 = curr_i_1;
    			}
    		} else if(fabs(gyflat[i] - 0.0) <= 0.05){
    			curr_i_1 = -1;
    			curr_l_1 = 0;
    			curr_l_0 += 1;
    			if (curr_i_0 == -1)
    				curr_i_0 = i;
    			if (curr_l_0 > max_l_0){
    				max_l_0 = curr_l_0;
    				max_i_0 = curr_i_0;
    			}
    		}
    	}

    	bool sufficent = (max_l_0 >= 40) && (max_l_1 >= 40);
    	if (!sufficent){
    		return GEST_SILENCE;
    	} else if (max_i_0 < max_i_1){
    		return GEST_LTWIST;
    	} else if (max_i_0 > max_i_1) {
    		return GEST_RTWIST;
    	}
    }
    return GEST_SILENCE;
}


void ThresholdPredictor::getBucketAY(int bucket[]){
	ay->flatten(ayflat);
	for(int i =0; i < 400; i++){
		float val = ayflat[i];
		if (val < 0.2)
			bucket[0] += 1;
		else if (val >= 0.2 && val < 0.3)
			bucket[1] += 1;
		else if (val >= 0.3 && val < 0.4)
			bucket[2] += 1;
		else if (val >= 0.4 && val < 0.5)
			bucket[3] += 1;
		else if (val >= 0.5 && val < 0.6)
			bucket[4] += 1;
		else if (val >= 0.6)
			bucket[5] += 1;
	}
}



void ThresholdPredictor::getBucketGY(int bucket[]){
	gy->flatten(gyflat);
	for(int i =0; i < 400; i++){
		float val = gyflat[i];
		if (val < 0.1)
			bucket[0] += 1;
		else if (val >= 0.1 && val < 0.4)
			bucket[1] += 1;
		else if (val >= 0.4 && val < 0.6)
			bucket[2] += 1;
		else if (val >= 0.6 && val < 0.9)
			bucket[3] += 1;
		else if (val >= 0.9)
			bucket[4] += 1;
	}
}