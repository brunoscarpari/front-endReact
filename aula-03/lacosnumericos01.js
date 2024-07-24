const prompt = require('readline-sync')


//let i;

//for(i=0; i<5; i++){
//    console.log(i)
//}

//exemplo 02

let maiornumero=0
let numeroinformado=0

for(i=0; i<5; i++){
    numeroinformado= Number(prompt.question('digite um numero'))
    if(numeroinformado>maiornumero){
        maiornumero=numeroinformado
    }
}
console.log(maiornumero)