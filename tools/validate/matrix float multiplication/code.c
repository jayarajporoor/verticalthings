#define POI 1
#define POIROW 1
#define STOPOI 1
#define MSIZE 50
float first[MSIZE][MSIZE];
float second[MSIZE][MSIZE];
float res[MSIZE][MSIZE];
void initialize(){
    for(int i=0; i<MSIZE; i++) {
        for(int j=0; j<MSIZE; j++) {
			float k = (rand()%10);
			k = k/10;
            first[i][j] = i + j + k;
            second[i][j] = i + j + k;
        }
    }
}
int main(void) {
	initialize();
	int m, n, p, q, c, d, k;
	float sum = 0;
	m = MSIZE;
	n = MSIZE;
	p = MSIZE;
	q = MSIZE;
	float* resi = &res[0][0];
	float* fp;
	float* sp1 = &second[0][0];
	float* sp;
	float* po;
	float* fp1 = &first[0][0];
	for (c = 0; c < m; c++) {
		sp = sp1;
		for (d = 0; d < n; d++) {
			po = sp;
			fp = fp1;
			sp = sp + MSIZE;    
			sum = 0;
			for (k = 0; k < q; k++) {
				sum = sum + *fp * *po;
				fp++;
				po = po + 1;      
			}
			*(resi+d) = sum;
		}
		fp1 = fp;
		resi += d;
	}
}
