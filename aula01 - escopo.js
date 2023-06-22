/* ESCOPO DE FUNÇÃO */

// Escopo Pai
var x = 5;
hosting =5      // Hostign: definindo valor antes de declarar

function fn(){
    // Escopo função
    var hosting =6;    // Declarando a variavel depois
    var y = 10;
    console.log('Escopo função: ',x)  // Imprime 5
    console.log('Escopo pai acessa escopo filho: ',y)  // Imprime 10
    console.log('Hosting: ',hosting)  // Imprime 6
}

fn()             // Chamando a função fn
console.log('Escopo pai: ',x)   // Imprime 5
console.log('Variavel hosting: ', hosting) // Imprime 5
console.log(y)   // Erro - escopo filho não acessa escopo pai

