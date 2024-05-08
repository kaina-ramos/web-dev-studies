//Funciona como em qualquer outra linguagem:

const hora = 23;

if (hora >= 1 && hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde');
} else if (hora >= 19 && hora < 24) {
    console.log('Boa noite');
} else {
    console.log('Insira um número entre 0 e 24');
}