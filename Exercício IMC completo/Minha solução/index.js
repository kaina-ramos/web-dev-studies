// Minha solução
const peso = document.querySelector('#weight_input');
const altura = document.querySelector('#height_input');
const divResultado = document.querySelector('#resultado');
const form = document.querySelector('#formulario_imc');
function cancelaAtt (evento){
    evento.preventDefault();
    console.log(peso.value, altura.value);
    const resultado = (peso.value / altura.value)/altura.value;

   if (isNaN(peso.value) === true && isNaN(altura.value) === true) {
    divResultado.innerHTML = `<p id="invalid">Valores inválidos</p>`;  
   } else if (isNaN(peso.value) === true){
    divResultado.innerHTML = `<p id="invalid">Peso inválido</p>`; 
   } else if (isNaN(altura.value) === true){
    divResultado.innerHTML = `<p id="invalid">Altura inválida</p>`;  
   } else if (resultado < 18.5) {
    divResultado.innerHTML = `<p id="results">Abaixo do peso. (IMC: ${resultado.toFixed(1)})</p>`; 
   } else if (resultado >= 18.5 && resultado <= 24.9) {
    divResultado.innerHTML = `<p id="results">Peso normal. (IMC: ${resultado.toFixed(1)})</p>`; 
   } else if (resultado >= 25 && resultado <= 29.9) {
    divResultado.innerHTML = `<p id="results">Sobrepeso. (IMC: ${resultado.toFixed(1)})</p>`; 
   } else if (resultado >= 30 && resultado <= 34.9) {
    divResultado.innerHTML = `<p id="results">Obesidade grau I. (IMC: ${resultado.toFixed(1)})</p>`; 
   } else if (resultado >= 35 && resultado <= 39.9) {
    divResultado.innerHTML = `<p id="results">Obesidade grau II. (IMC: ${resultado.toFixed(1)})</p>`; 
   } else if (resultado >= 40) {
    divResultado.innerHTML = `<p id="results">Obesidade grau III. (IMC: ${resultado.toFixed(1)})</p>`; 
   }
};
form.addEventListener ('submit', cancelaAtt);
imprimeResultado.innerHTML = ` <p id="results"> Seu IMC é: ${resultado.toFixed(1)} </p>`;