// IIFE - Immediatly Invoked Function Expression: Função que se invoca automaticamente ao
// executar o código, e protege o código de escopos externos. Ex:

(function (idade, peso, altura) {
    const sobrenome = 'Ramos';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(criaNome('Kainã'));
    }

    falaNome();
    console.log(idade,peso,altura);
})(21, 60, 1.85);