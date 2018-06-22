res_vector[i] = matrix[i,.] * vector;

for i in  {
    sum=0;
	loop(j)
	      sum+= matrix[i][j] * vector[j]
	res_vector[i] = sum;
}

loop(i) {
  res += res_vector[i] * model_vec[i];
}
