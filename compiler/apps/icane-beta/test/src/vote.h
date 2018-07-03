#ifndef __VOTE__
#define __VOTE__

#define MAX_LABEL_INDEX 20


class Vote{
public:
	void forcePush(int x); // rename to add
	int result();
	Vote(int maxLabelIndexIP);
	int getInitStatus(); // make sure you check initStatus
private:
	int initStatus;
	int maxLabelIndex;
	int queue[6]; // use existing queue
	// FIFOCircularQueue<int, 6> queue;
	int front, back; // not needed
	int resultScores[MAX_LABEL_INDEX + 1]; // dict ?
	void updateVote(int in, int out);
	

};

Vote::Vote(int maxLabelIndexIP)
{
	initStatus = 0;
	if(maxLabelIndex > MAX_LABEL_INDEX)
	{
		initStatus = -1;
		
	}

	maxLabelIndex = maxLabelIndexIP;
	front = -1;
	back = -1;
	for(int i =0; i< maxLabelIndex; i++)
		resultScores[i] = 0;
}
/*
 * template<rettype, size>
 * void* head(rettype *elem){
	if(front == -1){
		// empty
		return NULL;
	}
	
	elem = queue[back];
	retrun &queue[back];
 }
 */
void Vote::forcePush(int x)
{	
	// out = q.head()
	// q.forcePush(x)
	// in = x
	// updateVote(in, out)
	int out = 0;
	if (front == -1) {
		// Empty
		back = 0;
		front = 0;
	} else if(back == front) {
		// Full
		out = queue[back];
		back += 1;
	}
	
	queue[front++] = x;
	front %= 6; //startstize ==6
	back %= 6;
	updateVote(x , out);
}

void Vote::updateVote(int in, int out)
{
	resultScores[in] = resultScores[in] + 1;
	if(out!=0){
		resultScores[out] = resultScores[out] - 1;	
	}
}

int Vote::result()
{
	int maxCount = -1, maxIndex = 1;
	for(int i=0; i<maxLabelIndex; i ++)
	{
		if(resultScores[i]>maxCount)
		{
			maxCount = resultScores[i];
			maxIndex = i;

		}
	}
	return maxIndex;

}


#endif
