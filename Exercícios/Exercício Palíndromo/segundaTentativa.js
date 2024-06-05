// Me propus a fazer o mesmo programa utilizando apenas um for()

let word = 'ABBA'; // <3
const shifted = [];
let aux = 1;

for (let i in word) {
    shifted.unshift(word.charAt(i));
    //Verifica em tempo real se o caracter corresponde ao da posição oposta
    if (shifted[0] !== word.charAt(word.length - aux)) {
        console.log('Não é palíndromo');
        break;
    } else if (shifted.length === word.length) {
        console.log('É palíndromo');
    }
    aux++;
}