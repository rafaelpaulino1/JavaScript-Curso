console.log("QUESTÕES AULA 05")

//1
for(let contador = 1; contador <= 5; contador++){
    
    let asterisco = "" //Limpa a variável a cada loop
    
    for(let contador2 = 1; contador2 <= contador; contador2++){
            asterisco += "* " //Adiciona a quantidade de asteriscos baseado no loop
    }
    console.log(asterisco) // Imprime a variável
    
}

//2
let n = 3

for(cont=1;cont<=10;cont++){

    console.log(n+" X "+cont+" = "+ n*cont);
}

//3
let numero=0

for(cont=1; cont<=500; cont++){
    if(cont%2===1){
        numero+=cont
    }
}
console.log(numero)

//4
for(cont=1; cont<=20; cont++){
    if(cont%3===0){
        continue
    }
    console.log(cont)
}

//5
let num = 156547
let invertido = 0

console.log("Entrada: "+num)

while(num > 0) {
    let digito = num % 10 //Pega o ultimo digito
    invertido = invertido * 10 + digito //Insere o ultimo digito no numero final
    num = Math.floor(num/10) //Retira o ultimo digito do numero original (math.floor retira a parte decimal)
}

console.log("Saída: "+invertido)
