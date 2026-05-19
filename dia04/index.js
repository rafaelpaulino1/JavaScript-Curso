console.log("Dia 04 de JavaScript");

const pegar_onibus = false;

if (pegar_onibus === false) {

    console.log("Eu vou chegar em casa na hora!!");

} else {

    console.log("Eu vou chegar tarde em casa!");

}

const idade = 18;

if (idade >= 18) {

    console.log("Voce está APTO para votar!");

} else {

    console.log("Você está INAPTO para votar!");
}

const pontuacao = 84

if (pontuacao >= 90) {
    console.log("Grade A");
} else if (pontuacao >= 80){
    console.log("Grade B");
} else if (pontuacao >= 70) {
    console.log("Grade C");
} else {
    console.log("Falhou");
}

let x = 0;

if (x === 0) {
    console.log(0);
} else if (x >= 0) {
    console.log("Maior do que 0");
} else if (x <= 0) {
    console.log("Menor do que 0");
}

const condicao = true
const condicaoInterna = false

if(condicao) {
    console.log("eu sou um if externo");
    if(condicaoInterna) {
        console.log("Eu sou um if interno");
    }else{
        console.log("eu sou um else interno");
    }
} else{
    console.log("Eu sou um else externo");
}

let posicao = 4

switch (posicao){

    case 1:
        console.log("Posição 1");
        break;
    case 2: 
        console.log("Posição 2");
        break;
    case 3:
        console.log("Posição 3");
        break;
    case 4:
        console.log("Posição 4");
        break;

    default:
        console.log("Posição não encontrada")
}


let dia = 51;

switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;

    default:
        console.log("Dia da semana inválido")
}

let nome = "rafael";

switch(nome){

    case "Rafael":
        console.log("Rafael Paulino")
        break
    case "Eduarda":
        console.log("Maria Eduarda Franco")
        break
    
    default:
        console.log("Não é Rafael nem Eduarda")
}