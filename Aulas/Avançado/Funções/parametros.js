// É possível passar mais parâmetros do que uma função pede, assim como é possível receber
// menos parâmetros do que o declarado. Ex:
function soma (a, b){
    b = b || 1; // Se o valor passado for falsy, recebe 1.
    const total = a + b;
    console.log(total);
}
soma(5); // Output: 6

function somaTudo (){
    let total = 0;
    for (let valor of arguments){ // arguments: array de todos os parâmetros não atribuídos
        total += valor;
    }
    console.log(total);
}
somaTudo(2, 2, 6); // Output: 10

// Além disso podemos passar objetos e arrays como parâmetros.
function recebeObjeto ({nome, idade, altura}){
    console.log(nome, idade, altura);
}
recebeObjeto({nome: 'João', idade: 12, altura: 1.85});

// Podemos trocar arguments pelo operador rest(...) e obter o mesmo resultado.
function somaComRest (a, b, ...resto) { // Operador rest deve ser o último na declaração
    let total = a + b;
    for (let valor of resto){
        total += valor;
    }
    console.log(total);
}
somaComRest(1, 2, 3, 4, 5); // Output: 15