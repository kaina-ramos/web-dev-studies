function registraPessoa (nome, sobrenome, peso, altura) {
    let pessoa = {
        nome,
        sobrenome,
        peso,
        altura
    }
    return pessoa;
}

let registros = [];

const nome = document.getElementById('name');
console.log(nome)
const sobrenome = document.getElementById('last_name');
const peso = document.getElementById('weight');
const altura = document.getElementById('height');

registros.push(registraPessoa(nome, sobrenome, peso, altura));

console.log(registros);
console.log(registros.length);