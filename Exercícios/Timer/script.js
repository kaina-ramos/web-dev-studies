const relogio = document.querySelector('#timer');
const iniciar = document.querySelector('#start');
const pausar = document.querySelector('#pause');
const reiniciar = document.querySelector('#reset');

let tempoRelogio = 0;
let timer;

function formataSegundos(segundos){
    const data = new Date(segundos * 1000); // Converte o valor recebido em mílisegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' // ou UTC (Ponto de referência / HORA ZERO)
    });
}

function iniciaRelogio(){
    timer = setInterval(function() {
        tempoRelogio++;
        relogio.innerHTML = formataSegundos(tempoRelogio);
    }, 1000)
}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
});

reiniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    tempoRelogio = 0;
});