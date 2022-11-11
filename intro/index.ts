const firstName = 'Miqueias';
const anotherName = 1;
const x = true;

function greeting (name: string) {
    console.log('Olá ' + name)
}

greeting(firstName);

function sum (n1: number, n2:number) {
   return n1 + n2;
}

console.log(sum(10, 5));
