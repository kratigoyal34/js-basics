const prompt= require('prompt-sync')();
console.log(" It's an operation")

var q1= prompt("write a number");
var q2= prompt("write another number");

function operation(num1,num2){
    console.log("addition of the numbers: " +num1+num2);
    console.log("substraction of the numbers: " +num1-num2);
    console.log("multipication of the numbers: " +num1*num2);
    console.log("division of the numbers: " +num1/num2);
}

operation(q1,q2);



