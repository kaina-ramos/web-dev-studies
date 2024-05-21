// Referente a aula 23

let varA = 'A', varB = 'B', varC = 'C';
let aux;

console.log(`varA = ${varA}, varB = ${varB}, varC = ${varC}`);

// Sem usar array:
// aux = varA;
// varA = varB;
// varB = varC;
// varC = aux;

// Usando array:
[varA, varB, varC] = [varB, varC, varA];
console.log(`varA = ${varA}, varB = ${varB}, varC = ${varC}`);