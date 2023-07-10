// FUNÇÕES

// Declaração padrão de funções
function nomeFn1() { console.log("Fn1 - padrão")}
nomeFn1();

// Declaração usando a forma literal
function nomeFn0(value) {return value}  // Declaração padrão
let nomeFn0 = new Function("value", "return value") // Declaração na forma literal

// Função sem parâmetros
function nomeFn2() { console.log("Fn2 - sem parâmetros")}
nomeFn2();

// Função com parâmetros
function nomeFn3(a,b) { console.log(`Fn3 - Função com parâmetros: A = ${a} e  B = ${b}`)}
nomeFn3(2,3);

// Função com inicialização de parâmetros, definindo valores padrões para o mesmo
function nomeFn4(a=1,b=2){console.log(`Fn4 - Função com inicialização de parâmetros: A = ${a} e  B = ${b}`)}
nomeFn4();
nomeFn4(5,6);

// FUNÇÃO PADRÃO - COM PARÂMETROS A MAIS
function nomeFn5(a,b){console.log(`Fn5 - Função com parâmetros a mais: A = ${a} e  B = ${b}`)}
nomeFn5(1,2,3)

// FUNÇÃO PADRÃO - COM PARÂMETROS A MENOS
function nomeFn6(a,b){console.log(`Fn6 - Função com parâmetros a mais: A = ${a} e  B = ${b}`)}
nomeFn6(1)

// FUNÇÃO PADRÃO - COM RETORNO DE VALORES
function nomeFn7(a,b){ return `Fn7 - Função com retorno de valores: ${a} + ${b} = ${a+b}`}
console.log(nomeFn7(2,3));

// FUNÇÃO PADRÃO - COM RETORNO DE FUNÇÃO
function nomeFn8(a){return function(b,c){return `Fn8 - Uma função retornando outra função: ${a} + ${b} + ${c} = ${a+b+c}`}}
console.log(nomeFn8(2));
console.log(nomeFn8(2)(3,4));

// EXPRESSÃO DE FUNÇÃO / FUNÇÃO ANÔNIMA

let nomeFn9 = function(a,b){ return `Fn expressão de função / função anônima - Soma: ${a} + ${b} = ${a+b}`}
console.log( nomeFn9(2,3) );
console.log(typeof nomeFn9)