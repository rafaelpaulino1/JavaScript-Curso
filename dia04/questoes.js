//2

let saldoConta = 500
let valorSaque = 98;
if(valorSaque>saldoConta){

    console.log("Saldo insuficiente!")

}else{
switch (valorSaque){

    case 100:
        console.log("Saque realizado com sucesso!")
        break
    case 200:
        console.log("Saque realizado com sucesso!")
        break
    case 300:
        console.log("Saque realizado com sucesso!")
        break
    case 400:
        console.log("Saque realizado com sucesso!")
        break
    case 500:
        console.log("Saque realizado com sucesso!")
        break

    default: 
        console.log("Valor inválido!")
}
}

//3

let operador = "%"
let valor1 = 10
let valor2 = 5

switch(operador) {

    case "+":
        console.log(valor1 + valor2)
        break
    case "-":
        console.log(valor1 - valor2)
        break
    case "*":
        console.log(valor1 * valor2)
        break
    case "/":
        console.log(valor1 / valor2)
        break
    case "%":
        console.log(valor1 % valor2)
        break

    default:
        console.log("Operdador inválido")
}

//4

let idade = 61;

if(idade < 18){
    console.log("O valor do ingresso é 3 reais")
}else if(idade>= 18 && idade<=60){
    console.log("O valor do ingresso é 10 reais")
}else{
    console.log("O valor do ingresso é 8 reais")
}

//5

let signo = "Gêmeos";

switch(signo){

    case "Áries":
        console.log("Nascido entre Março e Abril")
        break
    case "Touro":
        console.log("Nascido entre Abril e Maio")
        break
    case "Gêmeos":
        console.log("Nascido entre Maio e Junho")
        break
    case "Câncer":
        console.log("Nascido entre Junho e Julho")
        break
    case "Leão":
        console.log("Nascido entre Julho e Agosto")
        break
    case "Virgem":
        console.log("Nascido entre Agosto e Setembro")
        break
    case "Libra":
        console.log("Nascido entre Setembro e Outubro")
        break
    case "Escorpião":
        console.log("Nascido entre Outubro e Novembro")
        break
    case "Sagitário":
        console.log("Nascido entre Novembro e Dezembro")
        break
    case "Capricórnio":
        console.log("Nascido entre Dezembro e Janeiro")
        break
    case "Aquário":
        console.log("Nascido entre Janeiro e Fevereiro")
        break
    case "Peixes":
        console.log("Nascido entre Fevereiro e Março")
        break
    
    default:
        console.log("Signo inválido")
}

//6

let ladoA = 10
let ladoB = 8
let ladoC = 9

if(ladoA===ladoB && ladoB===ladoC){
    console.log("Triângulo Equilátero")
}else if(ladoA!==ladoB && ladoB!==ladoC && ladoC!==ladoA){
    console.log("Triângulo Escaleno")
}else{
    console.log("Triângulo Isósceles")
}