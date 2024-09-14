//Mostra o dia da semana atual da execução
const data = new Date();
const diaSemanaText = getDiaSemanaText(data.getDay());

function getDiaSemanaText (diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return 'Valor Inválido';
    }    
}

data.getDate() >= 10 ? console.log(`${data.getDate()}, ${diaSemanaText}`) : console.log(`0${data.getDate()}, ${diaSemanaText}`);