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
        throw new TypeError('Esperando instância de Date.');
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
    const data = new Date();
    console.log(retornaHora());
} catch (error) {
    console.log(error);
} finally {
    console.log('Tenha um bom dia!');
}