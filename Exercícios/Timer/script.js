let data = new Date();


// const exibeTempo = setInterval(function () {
//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false
//     });
// }, 1000);

const timer = document.querySelector('#timer');
timer.innerHTML = '00:00:00';

const iniciaBttn = document.querySelector('#start');
const paraBttn = document.querySelector('#pause');
const zeraBttn = document.querySelector('#reset');

iniciaBttn.addEventListener("click", function() {
    timer.innerHTML = setInterval(function () {
        return data.toLocaleTimeString('pt-BR', {});
    }, 1000);
})

paraBttn.addEventListener("active", function() {
    clearInterval(exibeTempo);
})



