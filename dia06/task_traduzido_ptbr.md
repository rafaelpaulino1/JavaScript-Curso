# Tarefas
Por favor, conclua as tarefas abaixo e publique-as no Discord do tapaScript em "40 Days of JavaScript".

> **NÃO USE IA para ENCONTRAR RESPOSTAS**. Se você estiver com dificuldades, vamos discutir isso no DISCORD e aprender. Além disso, observe que nenhuma das respostas exige que você crie qualquer interface gráfica. Apenas foque na construção da lógica e imprima a saída no console do navegador.

## 1. Escreva uma Função para Converter Celsius em Fahrenheit
Crie uma função celsiusToFahrenheit(celsius) que converta uma temperatura de Celsius para Fahrenheit.
Fórmula: (Celsius * 9/5) + 32 = Fahrenheit

## 2. Crie uma Função para Encontrar o Maior entre Dois Números
Escreva uma função findMax(num1, num2) que retorne o maior dos dois números. Ela também deve funcionar para números negativos.

## 3. Função para Verificar se uma String é um Palíndromo
Crie uma função isPalindrome(str) que verifique se uma determinada string é um palíndromo (lê-se da mesma forma de frente para trás e de trás para frente). Você não pode usar nenhuma função de string que ainda não aprendemos na série até agora.

## 4. Escreva uma Função para Encontrar o Fatorial de um Número
Crie uma função factorial(n) que retorne o fatorial de n.
Exemplo: 5! = 5 * 4 * 3 * 2 * 1

## 5. Escreva uma função para Contar Vogais em uma String
Escreva uma função countVowels(str) que conte o número de vogais (a, e, i, o, u) em uma determinada string.

## 6. Escreva uma Função para Colocar a Primeira Letra de Cada Palavra em Maiúscula em uma Frase
Escreva uma função capitalizeWords(sentence) que receba uma frase e coloque a primeira letra de cada palavra em maiúscula. Você pode usar o método toUpperCase() da string para converter letras minúsculas em maiúsculas.

## 7. Use uma IIFE para Imprimir “Hello, JavaScript!”
Escreva uma IIFE que imprima "Hello, JavaScript!" no console. Aqui a segunda palavra deve ser fornecida usando parâmetro e argumento.

## 8. Crie uma Função Callback Simples
Escreva uma função greet(name, callback), onde callback imprime uma mensagem usando o parâmetro name.

## 9. Crie um Diagrama de Execução da Call Stack para este fluxo

```js
function f1() {}
function f2() {
    f1();
}
f2();
```

## 10. Crie um Diagrama de Execução da Call Stack para este fluxo

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```
