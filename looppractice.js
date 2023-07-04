//create an application to create password

const prompt= require('prompt-sync')();
console.log("welcome,to this app");

var pass= prompt("create a password");
console.log("your password have been verified thank you.");

var passtry=prompt("enter your password");

while(passtry!=pass){
    var passtry=prompt("wrong password please try again");
}

console.log("you are in");
