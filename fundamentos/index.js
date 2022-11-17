"use strict";
let x = 10;
let y = 15.9874098;
console.log(x);
console.log(typeof x);
function sun(n1, n2) {
    return n1 + n2;
}
console.log(sun(x, y).toPrecision(4));
//string
let firstName = 'Miqueias';
let lastName = 'Decco';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(typeof fullName);
//boolean
let a = true;
let b = false;
function boo(a) {
    if (a) {
        console.log('Verdadeiro');
    }
    else {
        console.log('Falso');
    }
}
boo(b);
let m = 10;
let c = '';
c = m.toString();
console.log(`O número é o ${c}`);
