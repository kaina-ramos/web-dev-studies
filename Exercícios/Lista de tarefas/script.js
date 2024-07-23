/* <li><p class="tarefa"></p></li> */

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
        let itemLista = document.createElement('li');
        let pListItem = document.createElement('p');
        pListItem.classList.add('tarefa');
        pListItem.innerHTML = tarefa;
        itemLista.appendChild(pListItem)
        listaTarefa.appendChild(itemLista)
    }  
})