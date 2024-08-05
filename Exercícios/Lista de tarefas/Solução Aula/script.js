// Constantes

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Functions

function criaItem(){
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(inputText){
    const novoItem = criaItem();
    novoItem.innerText = inputText;
    tarefas.appendChild(novoItem);
    criaBotao(novoItem);
    limpaInput();
    armazenaTarefas();
}

function criaBotao(li){
    li.innerText += ' ';
    const botaoFeito = document.createElement('button');
    botaoFeito.innerText = 'OK';
    botaoFeito.setAttribute('class', 'apagar') //Define um atributo para o elemento em questão
    li.appendChild(botaoFeito);
}

function armazenaTarefas(){
    const listaElementos = tarefas.querySelectorAll('li');
    const listaItens = [];

    for(let item of listaElementos){
        let textoDoItem = item.innerText;
        textoDoItem = textoDoItem.replace('Feito', '').trim(); //Retira o texto do button e o espaço
        listaItens.push(textoDoItem);
    }
    const listaJSON = JSON.stringify(listaItens);
    localStorage.setItem('itensLista', listaJSON);
}

function salvarTarefas(){
    const tarefasArmazenadas = localStorage.getItem('itensLista');
    const listaTarefas = JSON.parse(tarefasArmazenadas);

    for(let tarefa of listaTarefas){
        criaTarefa(tarefa);
    }
    
}

salvarTarefas();
// Event Listeners

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) {
        alert('Insira uma tarefa válida');
        return;
    }
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if(!inputTarefa.value) {
            alert('Insira uma tarefa válida');
            return;
        }
        criaTarefa(inputTarefa.value)
    };
});

document.addEventListener('click', function(e){
    const clicado = e.target;
   
    if(clicado.classList.contains('apagar')){
        clicado.parentElement.remove();
        armazenaTarefas();
    }
});