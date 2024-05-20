function getDayText (day) {
    let dayText;
    switch (day) {
        case 0:
            dayText = 'Domingo';
            break;
        case 1:
            dayText = 'Segunda-feira';
            break;
        case 2:
            dayText = 'Terça-feira';
            break;
        case 3:
            dayText = 'Quarta-feira';
            break;
        case 4:
            dayText = 'Quinta-feira';
            break;
        case 5:
            dayText = 'Sexta-feira';
            break;
        case 6:
            dayText = 'Sábado';
            break;
        default:
            dayText = 'Valor Inválido';
            break;
    }  
    return dayText;  
}

function getMonthText (month) {
    let monthText;
    switch (month) {
        case 0:
            monthText = 'de Janeiro de';
            break;
        case 1:
            monthText = 'de Fevereiro de';
            break;
        case 2:
            monthText = 'de Março de';
            break;
        case 3:
            monthText = 'de Abril de';
            break;
        case 4:
            monthText = 'de Maio de';
            break;
        case 5:
            monthText = 'de Junho de';
            break;
        case 6:
            monthText = 'de Julho de';
            break;    
        case 7:
            monthText = 'de Agosto de';
            break;
        case 8:
            monthText = 'de Setembro de';
            break;
        case 9:
            monthText = 'de Outubro de ';
            break;
        case 10:
            monthText = 'de Novembro de';
            break;
        case 11:
            monthText = 'de Dezembro de';
            break;          
        default:
            monthText = 'Valor Inválido';
            break;
    }    
    return monthText;
}

function dateFormat (weekDay, day, month, year, hour, minutes) {
    return `${weekDay}, ${day} ${month} ${year} ${hour}:${minutes}`;
}

const dateVal = new Date();

//Converte valores em textos
const dayText = getDayText(dateVal.getDay());
const monthText = getMonthText(dateVal.getMonth());

//Cria o texto dentro do container da data
const divP = document.querySelector('#contain-date-text');
const paragraph = document.createElement('h2');
paragraph.classList.add('date');
divP.appendChild(paragraph);


paragraph.innerHTML = dateFormat(dayText, dateVal.getDate(),
monthText, dateVal.getFullYear(), dateVal.getHours(), dateVal.getMinutes());



