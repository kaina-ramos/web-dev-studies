const paragraph = document.querySelector('.date');
const data = new Date();
const options = {
    dateStyle: 'full',
}

function leftZero (value) {
    return value >= 10 ? value : `0${value}`;
}

paragraph.innerHTML = `${data.toLocaleDateString('pt-BR', options)} 
${leftZero(data.getHours())}:${leftZero(data.getMinutes())}`;