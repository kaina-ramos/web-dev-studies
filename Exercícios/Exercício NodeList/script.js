// Retorna um NodeList, objeto nativo do navegador que se comporta como array, e que contém todos os nós(elementos) do DOM que atendem à busca
const paragraphs = document.querySelectorAll('p');
const bodyStyles = getComputedStyle(document.body);

// Define a cor de fundo e da fonte dos parágrafos
for (let i in paragraphs) {
    paragraphs[i].style.backgroundColor = bodyStyles.backgroundColor;
    paragraphs[i].style.color = 'var(--secondary)';
}

