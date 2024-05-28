const playerChoice = document.getElementById('your-choice');
const computerChoice = document.getElementById('pc-choice');
const resultDisplay = document.getElementById('result');
const options = document.querySelectorAll('button');
let pcAux;
let playerAux;
playerChoice.innerHTML =  '';
computerChoice.innerHTML = '';

options.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    playerAux = e.target.id;
    playerChoice.innerHTML = playerAux;  
    setComputerChoice();
    resultDisplay.classList.remove('win', 'lose', 'draw');
    setResult(playerAux, pcAux);
}))

function setComputerChoice () {
    const randomNumber = Math.floor(Math.random() * options.length);
    
    switch (randomNumber) {
        case 0:
            pcAux = 'rock';
            break;
        case 1 :
            pcAux = 'paper';
            break;
        case 2 :
            pcAux = 'scissors';
            break;
    }
    computerChoice.innerHTML = pcAux;
}

function setResult (playerChoice, computerChoice) {
    console.log(playerChoice, computerChoice);
    //Player choose rock
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        resultDisplay.innerHTML = 'You win!';
        resultDisplay.classList.add('win');
    }
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        resultDisplay.innerHTML = 'You lose!';
        resultDisplay.classList.add('lose');
    }
    if (playerChoice === 'rock' && computerChoice === 'rock') {
        resultDisplay.innerHTML = 'Draw';
        resultDisplay.classList.add('draw');
    } 

    //Player choose paper
    if (playerChoice === 'paper' && computerChoice === 'rock') {
        resultDisplay.innerHTML = 'You win!';
        resultDisplay.classList.add('win');
    }
    if (playerChoice === 'paper' && computerChoice === 'scissors') {
        resultDisplay.innerHTML = 'You lose!';
        resultDisplay.classList.add('lose');
    }
    if (playerChoice === 'paper' && computerChoice === 'paper') {
        resultDisplay.innerHTML = 'Draw';
        resultDisplay.classList.add('draw');
    }

    //Player choose scissors
    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        resultDisplay.innerHTML = 'You win!';
        resultDisplay.classList.add('win');
    }
    if (playerChoice === 'scissors' && computerChoice === 'rock') {
        resultDisplay.innerHTML = 'You lose!';
        resultDisplay.classList.add('lose');
    }
    if (playerChoice === 'scissors' && computerChoice === 'scissors') {
        resultDisplay.innerHTML = 'Draw';
        resultDisplay.classList.add('draw');
    }
}