// objct.splice(indice, qnt_deletada, elmnt1, elmnt2, elmnt3...)
// retorna um array com elementos removidos
// aceita índices negativos para navegação

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Para adicionar no início:
var aux = nomes.splice(0, 0, 'Tales', 'Miletto');
console.log(`Nomes: ${nomes.join(', ')} || Removidos: ${aux.join(', ')}`);
// Para adicionar no final:
aux = nomes.splice(nomes.length, 0, 'Aristóteles');
console.log(`Nomes: ${nomes.join(', ')} || Removidos: ${aux.join(', ')}`);
// Para remover do início:
aux = nomes.splice(0, 2); 
console.log(`Nomes: ${nomes.join(', ')} || Removidos: ${aux.join(', ')}`);
// Para remover do final:
aux = nomes.splice(nomes.length-3, 3);
console.log(`Nomes: ${nomes.join(', ')} || Removidos: ${aux.join(', ')}`);
// Para substituir um elemento:
aux = nomes.splice(-1, 1, 'Zé Maria', 'Dario', 'Mussum'); // '-1' equivale a 'nomes.length - 1';
console.log(`Nomes: ${nomes.join(', ')} || Removidos: ${aux.join(', ')}`);

// Considere usar os métodos pop, push, shift e unshift quando for mais prático.