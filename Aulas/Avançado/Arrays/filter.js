// Filter: retorna um array filtrado com base na função passada como parâmetro.
// 'array.filter(function*(currentValue*, index, array))' ('*' indica obrigatoriedade)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomesGrandes = pessoas.filter(obj => obj.nome.length >= 7);
console.log(nomesGrandes);

// A arrow function acima equivale à seguinte função:
function filtraNomesGrandes(pessoa) {
    if (pessoa.nome.length >= 7) {
        return true;
    } else {
        return false
    }
}
// .filter() irá iterar sobre o array que o invoca, e passará automaticamente o valor de
// 'currentValue' nos argumentos.

// Outros exemplos:
const meiaIdade = pessoas.filter(obj => obj.idade >= 45);
console.log(meiaIdade);

const terminadosEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(terminadosEmA);

const nomesComL = pessoas.filter(obj => obj.nome.toLowerCase().includes('l'));
console.log(nomesComL);