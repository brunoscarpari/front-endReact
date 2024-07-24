const prompt = require('readline-sync')

let saldo = Number(prompt.question('qual o seu saldo?'))

while(saldo <0){
    saldo = Number(
        prompt.question('saldo invalido, digite novamente: ')
    )
}

console.log(saldo)

//exemplo 02 

let notas = Number(prompt.question('digite uma nota: '))
let somadasnotas = 0
let quantnotas = 0

while (notas >= 0){
    somadasnotas = somadasnotas+notas
    quantnotas = quantnotas + 1

   notas = Number(prompt.question('digite proxima nota: '))
}

console.log(somadasnotas)
console.log(quantnotas)
console.log(somadasnotas/quantnotas)


//exemplo 03

const random = parseInt(Math.random()*10)
let numerousuario = Number(prompt.question('informe um numero entre 0 e 10: '))

while(random !== numerousuario){
    console.log('voce errou o numero, digite novamente')
    numerousuario = Number(prompt.question('informe um numero entre 0 e 10: '))
}
console.log('voce acertou o numero era,', random)