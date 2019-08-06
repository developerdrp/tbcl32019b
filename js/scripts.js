//alert("hello");

//declaring variables
a=10;
b=20;
var c=a+b;
document.write("The sum of "+a+ "and "+b + " is " +c);

//program to dispaly 1 to 10 on each line by using for loop

for(i=1; i<=10; i++)
{
	document.write(i + "<br>");
}

//multiplication table by user choice number using while loop
var num=parseInt(prompt("Enter the number"))
i=1;
while(i<=10)
{
	mul=num*i;
	document.write(num + " x " + i + " = " + mul + "<br>");
	i++
}