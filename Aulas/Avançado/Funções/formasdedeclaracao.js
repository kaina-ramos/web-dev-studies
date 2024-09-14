// Hoisting (Içar): A engine compila variáveis (var) e funções primeiramente, não importando
// a ordem de declaração no documento. Só se aplica a funções declaradas na forma comum.
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects: Funções podem ser abordadas como dados, podendo ser passadas como
// valores para variáveis, parâmetros de outras funções, etc.
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaOutraFuncao(funcao) {
    souUmDado();
}
executaOutraFuncao();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();


// Declarando dentro de um objeto. Forma 1:
const obj = {
    falar: function() {
        console.log('Estou dentro de um objeto');
    }
};
obj.falar();
// Forma 2:
const objDois = {
    falar() {
        console.log('Estou dentro de outro objeto');
    }
};
objDois.falar();