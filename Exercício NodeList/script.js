const paragraphs = document.querySelectorAll('p');
const bodyStyles = getComputedStyle(document.body);

for (let i in paragraphs) {
    paragraphs[i].style.backgroundColor = bodyStyles.backgroundColor;
    paragraphs[i].style.color = 'white';
}

