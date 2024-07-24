// Refatorar para segmentar as funções ao longo do código
// Assistir aula 67 a partir de 32' para aprender a salvar dados em JSON!!!

const listaTarefa = document.getElementById('lista-tarefas');
const formTarefa = document.querySelector('.form-tarefa');

formTarefa.addEventListener('submit', function(event){
    event.preventDefault();
    const inputTarefa = event.target.querySelector('.insercao-tarefa');
    const tarefa = inputTarefa.value;
    
    if(inputTarefa.value === ''){
        alert('Insira uma tarefa.');
    } else {
        // Implementar: Remover placeholder ao inserir tarefa válida
        const itemLista = document.createElement('li');
        const pListItem = document.createElement('span');
        const botaoApagar = document.createElement('button')
        
        botaoApagar.innerHTML = 'OK'
        botaoApagar.classList.add('botao-concluir')
        pListItem.classList.add('tarefa');
        pListItem.innerHTML = tarefa;

        itemLista.appendChild(pListItem)
        itemLista.appendChild(botaoApagar)
        listaTarefa.appendChild(itemLista)
        
        formTarefa.reset();
        document.querySelector('.placeholder').innerHTML = '';
    }  
})
