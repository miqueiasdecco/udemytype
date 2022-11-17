"use strict";
// void
function whathoutReturn() {
    console.log('Função sem retorno');
}
whathoutReturn();
//2 callback como retorno
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeeting(f, userName) {
    console.log('Preparando a função');
    const greet = f(userName);
    console.log(greet);
}
preGreeeting(greeting, 'Miqueias'); // no Pregreenting envio qual função irá usar e o paramêtro SEPARADOS
