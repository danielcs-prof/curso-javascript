// FUCAO MAP COM CALLBACK

let v1 = [1,2,3,4,5,6,7,8,9]
let v2 = ['Ana', 'Bruna', 'Carla', 'Danilo']
let compras = [
    {produto:'Produto-01',qt:1,precoUnit:1.4,subtotal:0},
    {produto:'Produto-02',qt:2,precoUnit:2.4,subtotal:0},
    {produto:'Produto-03',qt:3,precoUnit:3.4,subtotal:0},
    {produto:'Produto-04',qt:4,precoUnit:4.4,subtotal:0},
    {produto:'Produto-05',qt:5,precoUnit:5.4,subtotal:0},
]

// Funções CallBack para operações com vetores
const fn1 = (e) => e * 2 
const fn2 = (e,i,vetor) => e + i * vetor.length  // elemento, posicao, tamanho-vetor
const fn3 = (texto) => texto[0] 
const fn4 = (e) => e.produto
const fn5 = (e) => {
    carrinhoCompras = {}

    carrinhoCompras.produto = e.produto
    carrinhoCompras.qt = e.qt
    carrinhoCompras.precoUnit = e.precoUnit
    carrinhoCompras.subtotal = e.qt * e.precoUnit

    return carrinhoCompras
}

// Manipulando vetor com numeros
console.log( v1.map( fn1 ) );
console.log( v1.map( fn2 ) );
console.log( v2.map( fn3 ))

// Manipulando vetor com objetos
// Lista de Objetos
console.log( compras.map( fn4 ))
console.log('\nObjetos sem idade\n')
console.log( JSON.stringify(compras))
console.log('\nObjetos com idade\n')
console.log( JSON.stringify(compras.map( fn5 )))

// Criando seu próprio Map utilizando prototype
Array.prototype.meuMap = function(fn){
    const vetorResultado = []
    for (let i = 0; i < this.length; i++) { // this referecia ao proprio vetor
        const resultado = JSON.stringify(fn(this[i],i,this))
        vetorResultado.push(` * ${resultado}`)
    }
    return vetorResultado
}

console.log( compras.meuMap(fn5))

// Conversao de temperaturas
const tempF = [300,303,302]
const conversaoFC = (tempFa) => Math.round( ( (tempFa - 32)* 5 )/9)
const tempC = tempF.map(conversaoFC)
const tbTemp = [[tempF],[tempC]]
console.table(tbTemp)

// Convertendo nomes de clientes para maiúscula
let clientes = [
    {nome:'Ana Flavia', sexo:'F', idade: 30 },
    {nome:'Bruno Pedrosa', sexo:'M', idade: 21 },
    {nome:'Caroline Maia', sexo:'F', idade: 17 },
    {nome:'Daniel Corrêa da Silva', sexo:'M', idade: 40 }
]
const processaNome = (cliente) => cliente.nome.toUpperCase()
const resp = clientes.map(processaNome)
console.log(resp)
