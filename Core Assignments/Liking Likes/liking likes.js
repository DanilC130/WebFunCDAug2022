var topcount = 9
var topcountElement = document.querySelector("#topcount");

console.log(topcountElement);

function addtopLike() {
    topcount++;
    topcountElement.innerText = + topcount;
    console.log(topcount);
}


var medcount = 12
var medcountElement = document.querySelector("#medcount");

console.log(medcountElement);

function addmedLike() {
    medcount++;
    medcountElement.innerText = + medcount;
    console.log(medcount);
}


var botcount = 9
var botcountElement = document.querySelector("#botcount");

console.log(botcountElement);

function addbotLike() {
    botcount++;
    botcountElement.innerText = + botcount;
    console.log(botcount);
}

