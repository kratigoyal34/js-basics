const prompt = require('prompt-sync')();
console.log("Let's,create a sentence");

var q1 = prompt("what is your good name?");
var q2 = prompt("what is your favourite destination to visit?");

function sentence(name,destination){
    console.log("Your name is " +name+ " Your favourite destination is " +destination);
}

sentence(q1,q2);