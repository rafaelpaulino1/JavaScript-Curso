console.log("--AULA 06--");

//1
/*
function celsiusParaFarenheint(celsius){

    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

console.log("Celsius convertido para Fahrenheit:", celsiusParaFarenheint(30))
*/

//2
/*
function encontreMaior(num1, num2){
    if(num1 > num2){
        console.log("o número", num1,"é maior que", num2)
    }else{
        console.log("o número", num2,"é maior que", num1)
    }
    return
}

encontreMaior(0, -5)
*/

//3
/*
function palindromo(palavra=""){

    let novaString = ""
    let inicio = 0
    let fim = palavra.length -1 // lenght conta quantas letras tem

    while (inicio < fim) {
    
            if (palavra[inicio] !== palavra[fim]) { // verifica se a primeira letra é igual a última
        
            return console.log("não é um palindrmo");
        }

        inicio++; //avança a contagem da primeira letra 
        fim--; // diminui a contagem da ultima letra
    }

    return console.log("é um palindromo")
}

palindromo("arara")
encontreMaior(0, -5)
*/

//4
/*
function fatorial(n){

    let conta = 1

    for (let i = 1; i <= n; i++){
        conta *= i
    }

    return console.log("O !"+n,"é:",conta)
}

console.log(fatorial(4))
*/

//5
/*
function conteVogais(sentenca){

    let vogais = sentenca.match(/[aeiouáéíóúãõâêîôû]/gi)

    return vogais ?  console.log("O número de vogais é:", vogais.length) : console.log("não possui nenhuma vogal")                      
}

conteVogais("hgjtlkjs")
*/

//6
/*
function deixarMaiusculo(sentenca){
   
    let final = ""
    let novaPalavra = true //variavel para saber se esta em uma nova palavra
   
    for (let i = 0; i < sentenca.length; i++){
        
        let caractere = sentenca[i] //seleciona o caractere a ser examinado

        if (novaPalavra && caractere!==" "){ //verifica se o caractere é diferente de um espaço
            final += caractere.toUpperCase(); //transforma esse caractere em Maiuscula
            novaPalavra = false //definir que a nova palavra ja teve sua inicial modificada
        }else{
            final += caractere //segue os caracteres originais
        }

        if(caractere === " "){
            novaPalavra = true //definindo que esta iniciando uma nova palavra
        }
    }
    return final
}
console.log(deixarMaiusculo("a eduarda é maravilhosa"))
*/

//7
/*
(function (str) {
    console.log("Hello,",str);
})("JavaScript!")
*/

//8
/*
function greet(name, callback) {
    callback(name);
}

function mostrarMensagem(nome) {
    console.log(`Olá, ${nome}!`);
}

greet("Rafael", mostrarMensagem);
*/