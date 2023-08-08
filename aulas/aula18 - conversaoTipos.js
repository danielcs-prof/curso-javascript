// CONVERSÃO DE TIPOS
// type casting = conversao pelo usuario
// type coersion = conversao pela VM do JavaScript

// 1 - Conversão Type Coersion
console.log("2" + 1)  // converte para string e concatena com operador +

// 2 - Conversão Type Casting
console.log('\n* - String <=> Numeber')
console.log(typeof Number('2'))     //converte de string para numero
console.log(typeof Number('3.14'))     //converte de string para numero
console.log(typeof String(2))     //converte de string para numero

// 1 - Conversão String <=> Boolean
console.log('\n* - String <=> Boolean')
console.log( Boolean(""))
console.log( Boolean("abc"))
console.log( Boolean(0))
console.log( Boolean(1))
console.log( Number(true))      // Numero 1 - não é o tipo nativo Boolean
console.log( Number(false))     // Numero 0 - não é o tipo nativo Boolean
console.log( String(true))      // String true - não é o tipo nativo Boolean
console.log( String(false))     // String false - não é o tipo nativo Boolean

// 2 - Tipo String <=> Data
console.log('\n* - String <=> Datas')
console.log(new Date())                 // retorna hora do sistema local
console.log( new Date('04/30/2022'))    // mes/dia/ano utilizando /
console.log( new Date('04-30-2022'))    // mes/dia/ano utilizando -
console.log( new Date('04 30 2022'))    // mes/dia/ano utilizando espaço em branco

console.log( new Date('04/30/2022').toDateString())    // mes/dia/ano utilizando espaço em branco
console.log( new Date('04-30-2022').toDateString())    // mes/dia/ano utilizando espaço em branco
console.log( new Date('04 30 2022').toDateString())    // mes/dia/ano utilizando espaço em branco

console.log( new Date('04/30/2022').toISOString())    // mes/dia/ano utilizando espaço em branco
console.log( new Date('04-30-2022').toISOString())    // mes/dia/ano utilizando espaço em branco
console.log( new Date('04 30 2022').toISOString())    // mes/dia/ano utilizando espaço em branco

// 3 - String <=> Array
let num0 = 'Daniel Correa'
let valores = [0,1,2,3,4,5,6,7,8,9]

// String como vetor
console.log('\n* - Manipulação de Strings e Arrays')
for(let c of num0)
    console.log(c)
console.log(num0.length)

// Convertendo vetor de numeros para string
console.log(valores.join())        // padrão: separa por virgula
console.log(valores.join(" "))     // separa por espaço em branco
console.log(valores.join(";"))     // separa por ponto-vírgula

// Desmembrando String em elementos de Array
console.log(num0.split())
console.log(num0.split(" "))                 // quebra a cada espaço em branco
console.log(num0.split(' ').join('.'))       // quebre e depois unifica com .
console.log(valores.join(';').split(';'))   // unifca os valores dos vetores e depois separa
console.log(num0.toLowerCase())              // transforma todos caracteres em minusculo
// toUpperCase é muito utilizado para homogenização do banco de dados
console.log(num0.toUpperCase())              // transforma todos caracteres em Maiúscula
console.log(num0.includes('daniel'))         // Retorna ture/false se encontrar o padrão
console.log(num0.toLowerCase().includes('daniel'))         // Retorna ture/false se encontrar o padrão
console.log(num0.toUpperCase().includes('DANIEL'))         // Retorna ture/false se encontrar o padrão
console.log(num0.replace('Daniel', 'Miguel'))        // substitui Daniel por Miguel
// Casas decimais e arredondamentos
let numero = 3.1489
console.log( numero.toFixed(2))   // fixar casas decimais e arredonda 0.5 para cima
console.log( Math.ceil(numero))   // arredondamento para cima - numero inteiro
console.log( Math.floor(numero))  // arredondamento para baixo - numero inteiro
console.log(numero.toFixed(2).replace('.',','))

// Internacionalização de números
console.log( new Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(numero))
console.log( new Intl.NumberFormat('pt-BR').format(numero))

// Contando a quantidade de digitos de um numero
let numInt = 10289
console.log(numero.toString().length)   //Numero fracionario considera o ponto
console.log(numInt.toString().length)   //Numero fracionario considera o ponto

// Convertendo JSON
// Array de objetos clientes
let clientes = [
    {id:1,nome:'Ana Flavia', cpf:'001.999.999-99',email:'usuario-1@dominio.com'},
    {id:2,nome:'Bruno Pedrosa', cpf:'002.999.999-99',email:'usuario-2@dominio.com'},
    {id:3,nome:'Caroline Maia', cpf:'003.999.999-99',email:'usuario-3@dominio.com'},
    {id:4,nome:'Daniel Corrêa da Silva', cpf:'004.999.999-99',email:'usuario-4@dominio.com'}
]

// Convertendo JSON => String
json = JSON.stringify(clientes)     // Converte Ojetos JavaScript para Strings
console.log(typeof json)
console.log(json)

// Convertendo JSON => String
ArrayObj = JSON.parse(json)         // Converte Strings para Ojetos JavaScript
console.log(typeof ArrayObj)
console.log(ArrayObj)