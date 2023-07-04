//take a order

function food(food){
    console.log("I love to eat " +food);
}

food("pizza");

function order(quantity,price){
    console.log("you are having " +quantity+ " pizza");
    console.log("each slice cost " +price+ " $");
    console.log("total of your bill was " +quantity*price+ " $");
}

order(3,2);