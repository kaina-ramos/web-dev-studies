function meuEscopo () {
    const form = document.querySelector('.main_form');
    const cadastros = [];
    const logRegistros = document.querySelector('#register_log');

    //O objeto poderia ser passado diretamente no push, a função aqui por organização
    function cadastraPessoa (nome, sobrenome, peso, altura) {
        return { nome, sobrenome, peso, altura };
    }

    function recebeEventoForm (evento) {
        evento.preventDefault(); //Impede a página de atualizar por padrão

        const nome = form.querySelector('#name');
        const sobrenome = form.querySelector('#last_name');
        const peso = form.querySelector('#weight');
        const altura = form.querySelector('#height');

        cadastros.push(cadastraPessoa(nome.value, sobrenome.value, peso.value, altura.value));

        console.log(cadastros[cadastros.length - 1]);
        console.log(cadastros.length);

        logRegistros.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();