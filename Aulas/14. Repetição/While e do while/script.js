// Programa que gera números aleatórios até encontrar o número 10:
function randomNumber (min, max) {
    const res = Math.random() * (max - min) + min;
    return Math.floor(res);
}

const max = 50;
const min = 1;
let result;
let aux = 0;

// [Do while] executa o trecho ao menos uma vez, pois faz a verificação posteriormente
do {
    result = randomNumber(min, max);
    aux++;
    console.log(result);
} while (result !== 10)
    console.log(`Número de execuções ${aux}`);