/*

*/

console.log("--QUESTÃO 01--");

let num = prompt("Digite um número:");

num % 2 === 0  

    ? console.log("Este número é par")  
    : console.log("Este número é ímpar");

console.log("-------------------------------");

console.log("--QUESTÃO 02--");

let idade = prompt("Digite sua idade:");

idade >= 18 

    ? console.log("Você está apto para tirar sua carteira de motorista.")  
    : console.log("Você não está apto para tirar sua carteira de motorista.");

console.log("-------------------------------");

console.log("--QUESTÃO 03--");

let salario = 12000;

bonus = salario + (salario * 0.2);

console.log(bonus);

console.log("-------------------------------");

console.log("--QUESTÃO 04--");

let cor = prompt("Digite 'VERMELHO' ou 'VERDE' para definir a cor da luz: ");

cor === "VERMELHO" 
    ? console.log("Pare o carro!")
    : console.log("Pode seguir!");

console.log("-------------------------------");

console.log("--QUESTÃO 05--");

let unid = prompt("Informe quantos unidades de energia você gasta por dia:");

let calc_unid = unid*150;
let valor_mes = calc_unid*30;

console.log("O valor a ser pago no final do mês será: " + valor_mes);

let calc_anual = valor_mes * 12;
let calc_desc = calc_anual - (calc_anual * 0.2);

console.log("O valor do gasto anual mais o desconto de 20% é: " + calc_desc);

console.log("-------------------------------");

console.log("--QUESTÃO 06--");

let ano = prompt("Digite o ano desejado: ");

ano % 4 === 0

    ? console.log("Esse ano é Bissexto")
    : console.log("Esse ano não é Bissexto");

console.log("-------------------------------");

console.log("--QUESTÃO 07--");

let p = prompt("Digite um número: ");
let q = prompt("Digite outro número: ");
let r = prompt("Digite outro número: ");

(p > q && p > r) ? console.log(p + " é o maior número") :
(q > r && q > p) ? console.log(q + " é o maior número") :
console.log(r + " é o maior número");
     
console.log("-------------------------------");

console.log("--QUESTÃO 08--");

let count = 5;

console.log(count<<1);
     
console.log("-------------------------------");

