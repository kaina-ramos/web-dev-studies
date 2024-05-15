// Solução aula
const form = document.querySelector('#formulario_imc');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#weight_input');
    const inputAltura = event.target.querySelector('#height_input');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    };

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    };

    const imc = getImc (peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} || ${nivelImc}`;
    setResultado(msg, true);
});


function getImc (peso, altura) {
    const imc = peso/ altura ** 2; //Fórmula IMC
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivelImc = ['Abaixo do peso', 'Peso ideal', 'Sobrepeso',
    'Obesidade I', 'Obesidade II', 'Obesidade III'];

    if (imc >= 39.9) {return nivelImc[5]};
    if (imc >= 34.9) {return nivelImc[4]};
    if (imc >= 29.9) {return nivelImc[3]};
    if (imc >= 24.9) {return nivelImc[2]};
    if (imc >= 18.5) {return nivelImc[1]};
    if (imc < 18.5) {return nivelImc[0]};
}

function criaParagrafo () {
    const paragraph = document.createElement('p'); // Cria um elemento no documento HTML
    paragraph.classList.add('results'); //Adiciona a classe ao elemento

    return paragraph;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    const p = criaParagrafo();

    if (isValid === false) {
        p.classList.add('invalid');
    };

    p.innerHTML = msg;
    resultado.appendChild(p);
};