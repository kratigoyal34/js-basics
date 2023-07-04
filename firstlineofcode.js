const prompt = require('prompt-sync')();

console.log("Hello, welcome to our store ");
console.log("We offer coffee for 2$ each and cookkies for 1$ each");

var q1 = prompt("How many cup of coffee you want?");
var q2 = prompt("How many cookies would you like to have?");
var q3 = prompt("how much tip would you like to leave?");

q1 = parseInt(q1);
q2 = parseInt(q2);
q3 = parseInt(q3);

c1 = q1 * 2;
c2 = q2 * 1;

var taxes = (c1 + c2) * 0.1;
var total = c1 + c2 + q3 + taxes;

console.log ("you have ordered " + q1 + " coffees for a total of " + c1 + " $");
console.log ("you have ordered " + q2 + " cookiess for a total of " + c2 + " $");
console.log("You have left " + q3 + " $ as a tip. The total bill is of " + total + " $ with taxes");
