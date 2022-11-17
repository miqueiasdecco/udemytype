let num: number[] = [1,2,3,4,5];

for (let i=0; i<num.length; i++ ) {
    console.log(`Esse é o número do array ${num[i]}`)
}

//aula 4

function soma (a: number,b: number):number {
    return a + b;
}

const somafunc: number = 10;
console.log(soma(10,3) + somafunc);

// aula 6 função anonima


type alunos = number | string;

function alunosdaturma(miqueias: alunos) {
    if (typeof miqueias === 'string'){
        return console.log("É texto");
    }if(typeof miqueias === 'number'){
        return console.log('É numero');
    }else{
        return console.log('Dado não identificado');
    }

}

alunosdaturma("Miqueias");
alunosdaturma(123);