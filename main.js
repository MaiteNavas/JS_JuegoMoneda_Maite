//ANIMACION MONEDA
function animationCoin() {
    let animationHead = document.getElementById('head-coin');
    animationHead.classList.add('flip-coin-head');
    let animationTail = document.getElementById('tail-coin');
    animationTail.classList.add('flip-coin-tail');
 
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
    let randomCoin = Math.floor(Math.random() * 2);
    if(randomCoin === 0){
        printHead.textContent = (`${head++}`);
        console.log(head);    
    }
    else if(randomCoin === 1){
        printTail.textContent = (`${tail++}`);
        console.log(tail);
        }  
}


//RESETEAR CONTADOR
function resetGame() {
    tail = 0;
    head = 0;
        printHead.textContent = (`${head}`);
        printTail.textContent = (`${tail}`);
        console.log(tail + head)
};

