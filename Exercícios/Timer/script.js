const relogio = document.querySelector('#timer');
let segundosRelogio = 0;
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
        segundosRelogio++;
        relogio.innerHTML = formataSegundos(segundosRelogio);
    }, 1000)
}

document.addEventListener('click', function(event) {
    const elemento = event.target;
    console.log(elemento);
    if (elemento.classList.contains('start')) {
        clearInterval(timer);  
        relogio.classList.remove('paused');
        iniciaRelogio();
    }

    if (elemento.classList.contains('pause')) {
        relogio.classList.add('paused');
        clearInterval(timer);
    }

    if (elemento.classList.contains('reset')) {
        clearInterval(timer);
        relogio.classList.remove('paused');
        relogio.innerHTML = "00:00:00";
        segundosRelogio = 0;
    }
})