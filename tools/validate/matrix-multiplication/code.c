#define POI 1
#define POIROW 1
#define STOPOI 1
#define MSIZE 50
int first[MSIZE][MSIZE];
int second[MSIZE][MSIZE];
int res[MSIZE][MSIZE];
void initialize(){
    for(int i=0; i<MSIZE; i++) {
        for(int j=0; j<MSIZE; j++) {
            first[i][j] = i + j;
            second[i][j] = i + j;
        }
    }
}
int main(void) {
	initialize();
	int m, n, p, q, c, d, k, sum = 0;
	m = MSIZE;
	n = MSIZE;
	p = MSIZE;
	q = MSIZE;
	int* resi = &res[0][0];
	int* fp;
	int* sp1 = &second[0][0];
	int* sp;
	int* po;
	int* fp1 = &first[0][0];
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
