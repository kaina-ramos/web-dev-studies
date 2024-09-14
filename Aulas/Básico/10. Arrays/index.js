const alunos = ['Luiz', 'Maria', 'João'];

/*Para adicionar a última posição
alunos[alunos.length] = 'Caio'; */

//Ou podemos utilizar a função push()
alunos.push('Diniz');
let alunoNovo = alunos[alunos.length - 1];

console.log(`Aluno adicionado: ${alunoNovo}`);
console.log(alunos);

//Função unshift() para adicionar à primeira posição do array:
alunos.unshift('Zezé');
alunoNovo = alunos[0];

console.log(`Aluno adicionado: ${alunoNovo}`);
console.log(alunos);

//Função pop() para remover da última posição do array:
let alunoRemovido = alunos.pop();

console.log(`Aluno removido: ${alunoRemovido}`);
console.log(alunos);

//Função shift() para remover da primeira posição do array:
alunoRemovido = alunos.shift();

console.log(`Aluno removido: ${alunoRemovido}`);
console.log(alunos);