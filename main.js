//ANIMACION MONEDA
let animationHead = document.getElementById('head-coin');
let animationTail = document.getElementById('tail-coin');
let coinContainer = document.getElementById('coins-div');

function animationCoin() {
    coinContainer.classList.add('flip-coin-tail');
    coinContainer.classList.add('flip-coin-tail');
    setTimeout(function() { 
        animationHead.classList.remove('flip-coin-head');
        animationTail.classList.remove('flip-coin-tail');
      }, 4000)
}

//VARIABLES
let head = 1;
let tail = 1;
let printHead = document.getElementById('printHead')
    printHead.textContent = "0";
let printTail = document.getElementById('printTail')
    printTail.textContent = "0";


//RANDOM CARA O CRUZ
function randomNumber() {
    let randomCoin = Math.floor(Math.random()* 2);
    coinContainer.style.animation= "none";
    if(randomCoin === 0){
        setTimeout(function(){
            printHead.textContent = (`${head++}`);
            coinContainer.style.animation= "flip-coin-head 3s forwards";
            console.log(`Cara ${head}`);    
        },500)}
    else if(randomCoin === 1){
        setTimeout(function(){
            printTail.textContent = (`${tail++}`);
            coinContainer.style.animation= "flip-coin-tail 3s forwards";
            console.log(`Cruz ${tail}`);
        },500)}
}

//RESETEAR CONTADOR
function resetGame() {
    tail = 0;
    head = 0;
    printHead.textContent = (`${head}`);
    printTail.textContent = (`${tail}`);
    console.log(`${tail} + ${head}`);
}

