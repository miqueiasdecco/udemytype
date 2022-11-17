"use strict";
let num = [1, 2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {
    console.log(`Esse é o número do array ${num[i]}`);
}
//aula 4
function soma(a, b) {
    return a + b;
}
const somafunc = 10;
console.log(soma(10, 3) + somafunc);
function alunosdaturma(miqueias) {
    if (typeof miqueias === 'string') {
        return console.log("É texto");
    }
    if (typeof miqueias === 'number') {
        return console.log('É numero');
    }
    else {
        return console.log('Dado não identificado');
    }
}
alunosdaturma("Miqueias");
alunosdaturma(123);
