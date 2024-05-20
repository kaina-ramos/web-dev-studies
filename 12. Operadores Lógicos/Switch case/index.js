//Mostra o dia da semana atual da execução
const data = new Date();
const diaSemana = data.getDay();
const diaSemanaText = getDiaSemanaText(diaSemana);

function getDiaSemanaText (diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break;
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break; //Dentro de uma function, o break pode ser substituído por um return
        default:
            diaSemanaTexto = 'Valor Inválido';
            break;
    }    
}


console.log(diaSemana, diaSemanaTexto);