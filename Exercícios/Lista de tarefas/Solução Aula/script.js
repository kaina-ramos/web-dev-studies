// Refatorar para segmentar as funções ao longo do código
// Assistir aula 67 a partir de 32' para aprender a salvar dados em JSON!!!

// const listaTarefa = document.getElementById('lista-tarefas');
const formTarefa = document.querySelector('.form-tarefa');
const inputTarefa = document.querySelector('.insercao-tarefa');
const botaoAdicionar = document.querySelector('.adiciona-tarefa')



botaoAdicionar.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    console.log(inputTarefa.value);
})