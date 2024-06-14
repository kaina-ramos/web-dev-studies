// Ao invés de usarmos if else para verificações curtas, podemos usar:
// var/const x > 10 ? y (valor se verdadeiro) : z (valor se falso) || EX: 


function createUser (nome, pontos) {
    return {
        nome : nome,
        pontos : Number(pontos),
        nivel : setUserLevel(pontos)
    }
}

function setUserLevel (pontuacao) {
    const nivelUser = pontuacao > 999 ? 'VIP' : 'Comum'; //Função ternária / IF ternário
    return nivelUser;
}

let userA = createUser('Danilo', 999);
let userB = createUser('Titi', 1200);

console.log(`User: ${userA.nome} || Nível da conta: ${userA.nivel} || Pontos: ${userA.pontos}`);
console.log(`User: ${userB.nome} || Nível da conta: ${userB.nivel} || Pontos: ${userB.pontos}`);



