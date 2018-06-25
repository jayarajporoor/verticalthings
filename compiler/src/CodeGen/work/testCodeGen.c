enum __nandu{__m1, __m2} __state = __m1;
void __m1lol()
{
int a=0;
{
a=(a+1);
__state = __m2;
}
}
int __m1main()
{
int c=0;
{
c=(c+1);
__state = __m2;
}
}
void __m2hol()
{
int b=0;
{
b=(b+1);
}
}
int main()
{
switch(__state)
{
case __m1:
__state = __m1;
__m1lol();
break;
case __m2:
__state = __m1;
__m2hol();
break;
default :
__state = __m1;
}
}
