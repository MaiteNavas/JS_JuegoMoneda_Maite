let head = 1;
let tail = 1;
let printHead = document.getElementById('print-head')
    printHead.textContent = "0";
let printTail = document.getElementById('print-tail')
    printTail.textContent = "0";
let animationCoinDiv = document.getElementById('coins-div')

function randomNumber() {
    let randomCoin = Math.floor(Math.random()* 2);
    animationCoinDiv.style.animation= "none";

    if(randomCoin === 0){
        animationCoinDiv.style.animation= "flip-coin-tail 3s forwards";
        setTimeout(function(){
            printHead.textContent = (`${head++}`);   
        },3250)}

    else if(randomCoin === 1){
        animationCoinDiv.style.animation= "flip-coin-head 3s forwards";
        setTimeout(function(){
            printTail.textContent = (`${tail++}`);
        },3250)}
}

function resetGame() {
    tail = 0;
    head = 0;
    printHead.textContent = (`${head}`);
    printTail.textContent = (`${tail}`);
}

