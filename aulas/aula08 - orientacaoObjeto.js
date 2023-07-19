// PARADIGMA ORIENTADO A OBJETOS

// Declaração de classes
class Pessoa{
    constructor(nome, idade, peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    printPessoa(){
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.peso)
    }
}
// Criando Objetos com operador new
let pessoa0 = new Pessoa( "Daniel Corrêa da Silva", 30, 76 );  

// Forma literal: cria ojetos sem utilizar o operador new
let pessoa1 = { nome:"Miguel Correa da Silva", idade:6, peso:24 };

// Forma literal: propriedades como string permite espaços e outros símbolos
let pessoa2 = { "nome Proprio": "Daniel", "idade":30 }

// Tipos de referencia
let pessoa3 = new Pessoa( "João Luis Corrêa da Silva", 30, 76 );  
let fulano = pessoa3; // Pessoa3 e fulano referenciam o mesmo objeto na memória
console.log(pessoa3)
console.log(fulano) 

// Tipos próprios do JavaScript
obj0 = new Object()
obj1 = new Array()
obj2 = new Date()
obj3 = new Error()

// Formas literais
obj4 = {nome: "daniel", idade:30}

// Acessar propriendades
console.log(obj5["nome Proprio"]) // Utilizando colchetes