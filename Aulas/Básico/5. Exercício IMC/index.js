const nome = 'Kainã de Melo Ramos';
const idade = 22;
const peso = 60;
const altura = 1.85;
let imc, anoNascimento;

imc = (peso / altura)/altura;
anoNascimento = 2024 - idade;

console.log('Seu IMC é:', imc);
console.log('Seu ano de nascimento é:', anoNascimento);

//Concatenação comum:
console.log(nome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg, e tem ' + 
altura + ' de altura. Seu IMC é ' + imc);

//Template strings:
console.log(`${nome} tem ${idade} anos de idade, pesa ${peso} KG, e tem ${altura} de altura.
Seu IMC é ${imc}.`);