const data = new Date();
const dataString = new Date('2019-04-20 20:20:59'); //Parâmetro tem que seguir este modelo
console.log(data.toLocaleString()); //Formata para padrão brasileiro/local
const dataFormatada = formataData(data);


console.log('Dia:', data.getDate());
console.log('Mês:', zeroEsquerda(data.getMonth() + 1));
console.log('Ano:', data.getFullYear());
console.log('Horas:', data.getHours());
console.log('Minutos:', data.getMinutes());
console.log('Segundos:', zeroEsquerda(data.getSeconds()));
console.log('Milisegundos:', data.getMilliseconds());
console.log('Dia da Semana:', zeroEsquerda(data.getDay()));

function formataData (date) {
    const dia = zeroEsquerda(date.getDate());
    const mes = zeroEsquerda(date.getMonth() + 1);
    const ano = zeroEsquerda(date.getFullYear());
    const hora = zeroEsquerda(date.getHours());
    const min = zeroEsquerda(date.getMinutes());
    const seg = zeroEsquerda(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroEsquerda (num) { //Adiciona o zero à esquerda
    return num >= 10 ? num : `0${num}`;
}

console.log(dataFormatada);