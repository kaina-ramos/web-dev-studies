// O básico:
// try {
//     console.log('Teste');
//     console.log(a); -> Erro - undefined
// } catch (e) { -> O parâmetro recebe o log padrão de erro
//     console.log('Erro!');
//     console.log(e);
// } finally {
//     console.log('Teste encerrado');
// }

// Aplicando em um cenário mais comum:

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('O dado informado não é do tipo Date.');
    }

    if (!data) { // Se nenhum parâmetro for enviado, inicializa automaticamente uma data
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

try {
    const umaData = new Date();
    console.log(retornaHora(umaData));
} catch (error) {
    console.log(error);
    console.log('Ocorreu um erro, verifique sua inserção.');
} finally {
    console.log('*** Execução sem erro ***');
}

try {
    const umaString = 'Abóbora';
    console.log(retornaHora(umaString));
} catch (error) {
    console.log(error); //Para exibir o LOG do erro ao user
    console.log('Ocorreu um erro, verifique sua inserção.');
} finally {
    console.log('*** Execução com erro ***');
}