//ordering a coffee or tea

const prompt= require("prompt-sync")();
console.log("welcome,to your shop");

var q1 = prompt("would you like to order a coffee or tea ");

if(q1=="coffee"){
    var q2= prompt("would you like to have cookies with your coffee ");

    if(q2=="yes"){
        console.log("you have order coffee and cookies");
    }
    else if(q2!="yes"){
        console.log("you have ordered coffee only");
    }
}

else if(q1=="tea"){
    var q3= prompt("would you like to have cookies with your tea ");

    if(q3=="yes"){
        console.log("you have order tea and cookies");
    }
    else{
        console.log("you have ordered tea only");
    }
}

else{
    console.log("Okay,have a good day");
}

