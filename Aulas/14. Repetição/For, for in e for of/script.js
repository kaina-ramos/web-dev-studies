// O programa deve retornar os valores de um array e suas posições
const cores = ['azul', 'vermelho', 'verde', 'roxo'];

console.log('Com [FOR]:');
for (let i = 0; i < cores.length; i++) {
    console.log(`Cor: ${cores[i]} || Posição: ${i}`);
}

// For in: percorre um objeto automaticamente com base em seu tamanho
console.log('Com [FOR IN]:');
for (let i in cores) {
    console.log(`Cor: ${cores[i]} || Posição: ${i}`);
}

// For of: percorre o objeto retornando os valores ao invés das posições
console.log('Com [FOR OF]:');
for (let i of cores) {
    console.log(`Cor: ${i} || Posição: ${cores.indexOf(i)}`);
}