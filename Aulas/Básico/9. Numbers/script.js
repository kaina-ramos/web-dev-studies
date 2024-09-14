const seu_numero = Number(prompt('Informe seu número:'));
const numeroTitulo = document.getElementById('numberTitle');

numeroTitulo.innerHTML = seu_numero;

let aux = document.getElementById('sqrRoot');
aux.innerHTML = seu_numero ** 0.5;

aux = document.getElementById('intVerify');
aux.innerHTML = Number.isInteger(seu_numero);

aux = document.getElementById('nanVerify');
aux.innerHTML = Number.isNaN(seu_numero);

aux = document.getElementById('roundUp');
aux.innerHTML = Math.ceil(seu_numero);

aux = document.getElementById('roundDown');
aux.innerHTML = Math.floor(seu_numero);

aux = document.getElementById('decimal');
aux.innerHTML = seu_numero.toFixed(2);

aux = document.getElementById('trocaTudo');
aux.innerHTML = `Este parágrafo foi trocado por completo usando Template Strings. Este é seu número: ${seu_numero}`;