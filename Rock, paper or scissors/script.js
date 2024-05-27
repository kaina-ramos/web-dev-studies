const playerChoice = document.getElementById('your-choice');
const computerChoice = document.getElementById('pc-choice');
const resultDisplay = document.getElementById('result');
const options = document.querySelectorAll('button');

options.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    playerChoice.innerHTML =  e.target.id;
    setComputerChoice();
}))

function setComputerChoice () {
    const randomNumber = Math.floor(Math.random() * options.length) + 1;
    
}