let palavra = 'MATHLETE';
let tamanhoPal = palavra.length;
let totalString;

for (let i = 0; tamanhoPal < 2010; i++) {
    totalString += palavra;
    tamanhoPal = totalString.length;
}

console.log(totalString.charAt(2010));