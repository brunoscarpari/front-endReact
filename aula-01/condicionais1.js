const prompt = require('readline-sync')
const idade= Number(prompt.question('qual sua idade?'))

if(idade >= 18){
    console.log('voce é maior de idade')
}else{
    console.log('voce é menor de idade')
}

const mediaaluno = 4

if(mediaaluno >= 7){
    console.log('parabens aprovado')
}else if(mediaaluno >= 5){
    console.log('prova final')
}else{
    console.log('REPROVADo')
}