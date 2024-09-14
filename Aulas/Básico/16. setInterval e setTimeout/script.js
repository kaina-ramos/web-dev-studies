function mostraHora () {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval (function() {
    console.log(mostraHora());
}, 1000);

setTimeout (function () {
    clearInterval(timer);
    console.log('Contagem interrompida');
}, 5500);