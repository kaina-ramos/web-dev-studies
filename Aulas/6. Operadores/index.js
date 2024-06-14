//Operadores - São os padrões: + - / * %. Potenciação é **.
let n1 = 2;
let n2 = 5;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 / n2);
console.log(n1 * n2);
console.log(n1 % n2);
console.log(n1 ** n2);
n1++; // var++ = pós incremento/decremento
console.log(n1); 
console.log(--n1); // ++var = pré incremento/decremento

let n3 = 10;
let v1 = '5';

//Operação envolvendo NaN e número pode resultar em:
console.log(n3 * v1); //Resultado certo - Converte sozinho para Number
console.log(n3 + v1); //Concatenação - Opta por juntar os dois valores

//Para assegurar a realização do cálculo, podemos utilizar:
console.log(n3 + Number(v1)); //Outras funções: parseInt() e parseFloat()