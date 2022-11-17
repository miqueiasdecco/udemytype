"use strict";
const a = '10';
const b = '5';
const c = 10;
const d = 19;
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return console.log(a + b);
    }
}
sum(a, b);
sum(c, d);
// checando se valor existe
function operation(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            console.log(arr.reduce((i, total) => i + total));
        }
        else if (operation === 'multiply') {
            console.log(arr.reduce((i, total) => i * total));
        }
    }
    else {
        console.log('Por favor, defina uma operação');
    }
}
operation([1, 2, 3]);
operation([1, 2, 3], 'sum');
operation([2, 4, 2], 'multiply');
//instace of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const Paul = new User('Paul');
const John = new SuperUser('John');
console.log(Paul);
console.log(John);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Obrigado ${user.name}, vc deseja acessar os dados?`);
    }
    else if (user instanceof User) {
        console.log(`Obrigado ${user.name}.`);
    }
}
userGreeting(Paul);
userGreeting(John);
// operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('Turca');
const zig = new Dog('Zig', 'York');
console.log(`Meu cachorro é o ${zig.name} e é da raça ${zig.breed}, o outro cachorro ${turca.name} não tem raça`);
function showDogDetails(dog) {
    if (dog.breed) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log('O cachorro é da raça SRD');
    }
}
showDogDetails(turca);
showDogDetails(zig);
// exercício
function reviewUser(nota) {
    if (typeof nota === 'number' || typeof nota === 'boolean' && nota) {
        if (nota === 5) {
            console.log('excelente nota');
        }
        else if (nota === 4) {
            console.log('Boa nota');
        }
        else if (nota === 3) {
            console.log('Nota regular');
        }
        else if (nota === 2) {
            console.log('Nota ruim');
        }
        else if (nota === 1) {
            console.log('Nota muito ruim');
        }
        else {
            console.log('Informe uma nota entre 5 e 1');
        }
    }
    else {
        console.log('Por gentileza envie uma nota');
    }
}
reviewUser();
