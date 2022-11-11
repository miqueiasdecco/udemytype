let x: number = 10;
let y: number = 15.9874098;
console.log(x);
console.log(typeof x);
function sun (n1: number,n2: number){
    return n1 + n2;
}
console.log(sun(x,y).toPrecision(4));

//string

let firstName: string = 'Miqueias';
let lastName: string = 'Decco';
let fullName: string = firstName + ' ' + lastName;
console.log(fullName);
console.log(typeof fullName)

//boolean

let a: boolean = true;
let b: boolean = false;

function boo (a: boolean) {
    console.log('Verdadeiro');
}

boo(a);