//Referente a aula 23

let varA = 'A', varB = 'B', varC = 'C';
let aux;

console.log(`varA = ${varA}, varB = ${varB}, varC = ${varC}`);
/*
aux = varA;
varA = varB;
varB = varC;
varC = aux;
*/

[varA, varB, varC] = [varB, varC, varA];
console.log(`varA = ${varA}, varB = ${varB}, varC = ${varC}`);