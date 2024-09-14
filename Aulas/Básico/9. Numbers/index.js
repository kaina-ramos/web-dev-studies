let num1 = 10, num2 = 2.57975; //Ambos tipo Number

console.log(num1.toString() + num2); //Concatena ao invés de calcular
console.log(num1.toString(2)); //Retorna em número binário
console.log(num2.toFixed(2)); //Fixa a quantidade de casas decimais e arredonda
console.log(Number.isInteger(num2));

const aux = num1 * 'num2';
console.log(Number.isNaN(aux)); //Verifica se o valor é 'Not a Number'

//Math method
let num3 = 8.49;
console.log(Math.floor(num3)); //Arredonda pra baixo
console.log(Math.ceil(num3)); //Arredonda pra cima
console.log(Math.round(num3)); //Arredonda pra mais se > que X.50 e pra menos se < X.50
console.log(Math.max(1,2,15,200,54,-89,356,7,37,83,24,55)); 
console.log(Math.min(1,2,15,200,54,-89,356,7,37,83,24,55));

let num4 = Math.random(); //Gera um número entre 0 e 1, sendo o 1 nunca incluso
console.log(num4); 
console.log(Math.round(Math.random() * (9-6) + 6)); //Gera um número aleatorio entre 9 e 6
console.log(Math.pow(2, 5)); //Potenciação, mas pode ser feita com operador **
console.log(16 ** 0.5); //Raíz quadrada