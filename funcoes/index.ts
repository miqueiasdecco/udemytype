// void

function whathoutReturn(): void{
    console.log('Função sem retorno')
}

whathoutReturn()

//2 callback como retorno

function greeting (name: string):string {
   return `Olá ${name}`
}

function preGreeeting (f: (name: string) => string, userName: string) {
    console.log('Preparando a função')
    const greet = f(userName)
    console.log(greet)
}

preGreeeting(greeting,'Miqueias') // no Pregreenting envio qual função irá usar e o paramêtro SEPARADOS