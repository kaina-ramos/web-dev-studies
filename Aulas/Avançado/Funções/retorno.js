// Usamos o return para mais do que apenas retornar resultados em si
// Ex: Retornar outra função

function criaMultiplicador(mult) {
    return function multiplica(n) {
        // Exemplo de 'closure': uma função acessando o escopo de uma função externa
        return n * mult;
    }
}

const duplica = criaMultiplicador(2); // Basicamente: 'const duplica = n * 2;'
const triplica = criaMultiplicador(3);
const quintuplica = criaMultiplicador(5);

console.log(duplica(3)); // Output: 6
console.log(triplica(12)); // Output: 36
console.log(quintuplica(6)); // Output: 30

// Também podemos retornar arrays, objetos, etc.