//               0123456789
let umaString = 'Texto comum'

//Funções de impressão
console.log(umaString[0], umaString[1], umaString[2])
console.log("Isto é um \"texto\" com aspas") // \" \" permite que as aspas sejam impressas no output
console.log(umaString.concat(' utilizando', ' função concat()'))

//Funções de Indexação
console.log(`A quinta letra do alfabeto é: ${umaString.charAt(1)}`)
console.log(umaString.indexOf('e'))
console.log(umaString.indexOf('comum', 3)) //define a casa de onde a busca vai se iniciar
console.log(umaString.lastIndexOf(' ')) //realiza a busca de trás pra frente

//Expressões regulares(RegExp) e funções de string
console.log(`Lista de caractéres entre P e U: ${umaString.match(/[p-u]/gi)}`) //g = lista todos; i = torna case insensitive
console.log(`Index do caractér entre W e Y: ${umaString.search(/[w-y]/g)}`)
console.log(umaString.replace(/['x''c']/g, '#')) //ou sem RegExp: var.replace('a', 'b')
console.log(umaString.length)
console.log(umaString.slice(8, 11)) //o conteúdo do último index não é impresso
console.log(umaString.slice(-5, -2))
console.log(umaString.split(' '))