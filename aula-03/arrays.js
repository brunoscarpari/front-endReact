//ARRAYS

const pessoa = ["bruno", 21, 1.80, true]

console.log(pessoa)

// principais metodos "array"

const numeros =[40,50,60,70,80,90]

//slice
//const numeros =[40,50,60,70,80,90]

console.log(numeros.slice(0,2))


//push
//const numeros = [40,50,60,70,80,90]

numeros.push(100)
console.log(numeros)


//unshift
//const numeros = [40,50,60,70,80,90]

numeros.unshift(50)
console.log(numeros)


//pop
//const numeros = [40,50,60,70,80,90]

numeros.pop()

console.log(numeros)

//shift

//const numeros = [40,50,60,70,80,90]

numeros.shift()
console.log(numeros)

//includes

//const numeros =[40,50,60,70,80,90]

console.log(numeros.includes(60))

//index Of

//const numeros =[40,50,60,70,80,90]

console.log(numeros.indexOf(70))

//percorrer arrays com for, for of e for in

//const numeros =[40,50,60,70,80,90]
for (let i=0; i < numeros.length; i++){
    console.log(i,numeros[i])
}

//const numeros =[40,50,60,70,80,90]

for (const elemento of numeros){
    console.log(elemento)
}

