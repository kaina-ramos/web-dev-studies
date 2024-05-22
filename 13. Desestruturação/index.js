// Podemos realizar atribuições de diversos valores simultaneamente usando a desestruturação de objetos e arrays:
const valores = [10, 20, 30, 40, 50];
const valoresDois = [60, 70, 80, 90, 100];
const [a, b, c, d, e] = valores;

//  Dessa forma, o JavaScript entende que estamos atribuindo os valores respectivamente
console.log(a, b, c, d, e); // Output: 10 20 30 40 50

//  Podemos também utilizar os operadores ...rest e ...spread para facilitar ainda mais
const [um, dois, tres, ...resto] = valores;
console.log(resto); // Output: [ 40, 50 ]


// ...spread "dissolve" os objetos em seus respectivos valores
const valoresCombinados = [...valores, ...valoresDois];
console.log(...valoresCombinados); // Output: 10 20 30 40 50 60 70 80 90 100

// Agora com objetos:
const meusDados = {
    nome: 'Fulano',
    sobrenome: 'de Tal',
    idade: '100',
    cpf: '12345678910'
};
const meuEndereco = {
    rua: 'Tal',
    bairro: 'Alameda dos Anjos',
    numero: 999,
    cep: '79000-000'
};

// Com spread:
const { nome, sobrenome, idade, cpf, rua, bairro, numero, cep } = { ...meusDados, ...meuEndereco };
console.log(`Nome: ${nome} ${sobrenome} || Idade: ${idade} || Endereço: Rua ${rua}, ${bairro}, ${numero}`);

// Com rest:
const teste = {
    valorA: 'A',
    valorB: 'B',
    valorC: 'C',
    valorD: 'D'
};

const { valorA: primeiraLetra, ...outrasLetras } = teste;
console.log(primeiraLetra);
console.log(outrasLetras);
