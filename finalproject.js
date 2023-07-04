const prompt= require('prompt-sync')();
console.log("Let's,create an account")

var user= prompt("create a username ");
var pass= prompt("create a password ");

console.log("your password and username have been verified");

var usertry= prompt("Enter your username ");
var passtry= prompt("Enter your password ");

while(usertry!=user && passtry!=pass){
    usertry= prompt("Enter wrong username try again ");
    passtry= prompt("Enter wrong password try again ");
}

console.log("welcome to our app");

//balance 

var balance=10;
console.log("your current balance is " +balance);
var q1= prompt("would you like to add money to your balance ");
if(q1=="yes"){
    var q2= prompt("how much money you want to add ");
    balance= balance+Number(q2);
    console.log("total balance is: " +balance+ "$");
}

else{
    console.log("great");
}

//order of burger
var q3= prompt("would you like you have a burger: ");

if(q3== "yes"){
    console.log("please choose what burger you want");
    var type=["veg burger","chicken burder","overload burger"];
    var price=[2,3,4];

    console.log("choice1: " +type[0]+ " " +price[0]+ "$");
    console.log("choice2: " +type[1]+ " " +price[1]+ "$");
    console.log("choice3: " +type[2]+ " " +price[2]+ "$");

    var q4= prompt("what is your choice ");

    if(q4== "choice1"){
        console.log("you have ordered " +type[0]+ " " +price[0]+ "$");
        var total1= balance-price[0];
        console.log("you have leave " +total1+ "$ in our balance");
    }

    else if(q4== "choice2"){
        console.log("you have ordered " +type[1]+ " " +price[1]+ "$");
        var total2= balance-price[1];
        console.log("you have leave " +total2+ "$ in our balance");
    }

    if(q4== "choice3"){
        console.log("you have ordered " +type[2]+ " " +price[2]+ "$");
        var total3= balance-price[2];
        console.log("you have leave " +total3+ "$ in our balance");
    }
}

else{
    console.log("have a good day😊");
}