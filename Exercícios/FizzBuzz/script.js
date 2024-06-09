function isNumber (val) {
    return isNaN(val) ? val : true;
}

function fizzBuzz (value) {
    if (isNumber(value) !== true) {
        console.log(`'${value}' não é um número.`);
    } else {
        if (value % 3 === 0 && value % 5 === 0) {
            return 'FizzBuzz';
        } else if (value % 3 === 0 && value % 5 !== 0) {
            return 'Fizz';
        } else if (value % 3 !== 0 && value % 5 === 0) {
            return 'Buzz';
        } else {
            return  value;//Não é divisível nem por 3, nem por 5.
        }
    } 
}

let aux = [];
for (let i = 0; i <= 100; i++) {
    let res = fizzBuzz(i);
    console.log(res);
    res === 'FizzBuzz' ? aux.push(i) : undefined;
}

console.log();
console.log(`FizzBuzz's: [${aux}] Qntd.: ${aux.length}`);