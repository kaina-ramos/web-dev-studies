// Retorna se uma imagem está, ou não, em modo paisagem, com base nas dimensões

function setValue () {
    return Math.floor(Math.random() * (500 - 100) + 100)
}

const ePaisagem = (width, height) => width > height;
const largura = setValue();
const altura = setValue();


console.log(`Largura: ${largura}, Altura: ${altura}`);
console.log(`É paisagem?: ${ePaisagem(largura, altura)}`);