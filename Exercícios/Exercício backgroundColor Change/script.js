const cores = ['blue', 'green', 'red', 'teal', 'orange', 'purple', 'skyblue', 'white',
               'black', 'pink'];

function trocaCor (color) {
    if (color === 'random') {
        document.body.style.backgroundColor = corAleatoria(cores);
    } else {
        document.body.style.backgroundColor = color;
    }
    temaEscuro();
}

function temaEscuro () {
    if (document.body.style.backgroundColor === 'black') {
        document.querySelector('h2').style.color = 'white';
        for (let i in document.querySelectorAll('button')) {
            document.querySelectorAll('button')[i].style.borderColor = 'white';
        }
    } else {
        document.querySelector('h2').style.color = 'black';
        for (let i in document.querySelectorAll('button')) {
            document.querySelectorAll('button')[i].style.borderColor = 'black';
        }
    }
}

function corAleatoria (colors) {
    let index = Math.random() * 9;
    return colors[index.toFixed()];
}
