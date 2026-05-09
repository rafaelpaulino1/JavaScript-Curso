console.log("Dia 03");

console.log("--OPERADORES ARITMÉTICOS--");

let a=10;
let b=20;

let dontPanic=42;
let p_nome="Rafael";
let sobrenome="Paulino";

console.log(a+b);
console.log(a-b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(b/a);

console.log("Rafa"+dontPanic); // VALOR NUMÉRICO COM UMA STRING
console.log(p_nome+sobrenome); // STRING COM STRING

let c = 5;
let d = 2;

console.log(c**d);
console.log(c%d);

let contador=5;
let contador2=5;

//CONTADORES
console.log(contador++);
console.log(contador);
console.log(++contador);

console.log(contador2--);
console.log(contador2);
console.log(--contador2);

console.log("--OPERADORES DE ATRIBUIÇÃO--");

let x = 10;

console.log(x+=5);
console.log(x-=3);
console.log(x*=2);
console.log(x/=4);

console.log("--OPERADORES DE COMPARAÇÃO--");

console.log(4==5);
console.log(3=='3');
console.log(undefined==null);

console.log(3==='3');

console.log(null===null);
console.log(undefined===null);

let obj1= {'nome': 'Rafael'}
let obj2= {'nome': 'Rafael'}

console.log(obj1===obj2);

console.log(4>3);
console.log(1>7);
console.log(2>=2);

console.log(4<3);
console.log(2<7);
console.log(3<=9);

console.log("--OPERADORES LÓGIOCOS--");

console.log(false && false); 
console.log(true && false); 
console.log(true && true); 
console.log(false && true); 

console.log("Vaca" && "Cavalo");

console.log(4 > 5 && 4 === 6);

console.log(false || false); 
console.log(true || false); 
console.log(true || true); 
console.log(false || true); 

console.log("Vaca" || "Cavalo");

console.log(!false);

console.log(null ?? 1);
console.log(undefined ?? 3); 
console.log(false ?? "Rafael");
console.log(0 ?? "Eduarda");

console.log("--OPERADORES CONDICIONAIS--");

let idade = 23;
console.log(idade >= 60 ? "Cidadão idoso" : "Não é um cidadão idoso");

console.log("--OPERADORES BIT A BIT--");

//15 & 9 = 9;
//1111 & 1001 = 1001
console.log(9 & 15);

//15 | 9 = 15;
//1111 | 1001 = 1111
console.log(9 | 15);

//15 ^ 9 = 6;
//1111 ^ 1001 = 0110
console.log(9 ^ 15);

//9 << 2 = 36
//1001 << 2 = 100100
console.log(9<<2);

//9 >> 2 = 2
//1001 >> 2 = 0010
console.log(9>>2);

console.log("--GROUPPING--");

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);

console.log("--TYPEOF-");

console.log(typeof 'Rafael')
console.log(typeof 42)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])
console.log(typeof function(){})

console.log("--INSTANCEOF-");

const data = new Date();
console.log(data instanceof Date);

const nome = "Rafael";
console.log(nome instanceof Array);
