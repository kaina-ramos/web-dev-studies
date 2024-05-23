let word = 'ABBA';
const shiftedWord = [];
const spreadedWord = [...word];
let verify = true;

for (let i = 0; i < word.length; i ++) {
    shiftedWord.unshift(word.charAt(i));
}

console.log(shiftedWord);
console.log(spreadedWord);

for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== shiftedWord[i]) {
        verify = false;
    }
}

verify === true ? console.log('É palíndromo') : console.log('Não é palíndromo');