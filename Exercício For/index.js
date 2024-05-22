const elements = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];

const mainSection =  document.getElementById('main-section');
const newDiv = document.createElement('div');

newDiv.classList.add('added-text');
mainSection.appendChild(newDiv);

for (let i = 0; i < elements.length; i++) {
    // const aux = document.createElement(elements[i].tag);
    // aux.innerHTML = elements[i].texto;
    // newDiv.appendChild(aux);

    // Utilizando atribuição por desestruturação:
    let { tag, texto } = elements[i]; // igual à let { x: tag, y: texto }/[x = tag, y = texto] = array[i];
    let aux = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    
    aux.appendChild(textoCriado);
    newDiv.appendChild(aux);
}