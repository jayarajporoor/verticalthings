res_vector[i] = matrix[i,.] * vector;

res = res_vector * model_vec;

for i in 0 .. matrix.x_max {
    sum=0;
	for j in 0 .. matrix.y_max {
	      sum+= matrix[i][j] * vector[j]
	}
	res_vector[i] = sum;
}

res = 0;
for i in 0..res_vector.x_max {
  res += res_vector[i] * model_vec[i];
}


=> 

for i in 0 .. N {
    sum=0;
	for j in 0 .. M {
	      sum+= matrix[i][j] * vector[j]
	}
	res_vector[i] = sum;
}

res = 0;
for i in 0..N {
  res += res_vector[i] * model_vec[i];
}

=>

res = 0;
for i in 0 .. N {
    sum=0;
	for j in 0 .. M {
	      sum+= matrix[i][j] * vector[j]
	}
	res_vector[i] = sum;
  	res += res_vector[i] * model_vec[i];
}


for i in 0..N { => REMOVE EMPTY

}

=>

res = 0;
for i in 0 .. N {
    sum=0;
	for j in 0 .. M {
	      sum+= matrix[i][j] * vector[j]
	}
  	res += sum * model_vec[i];
}


res = 0;

for i in 0 .. matrix.x_max {
    sum=0;
	for j in 0 .. matrix.y_max {
	      sum+= matrix[i][j] * vector[j]
	}
	res += sum * model_vec[i];
}


