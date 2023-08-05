// FILTER 

let v1 = [1,2,3,4,5,6,7,8,9]
let v2 = ['Ana', 'Bruna', 'Carla', 'Danilo']
let compras = [
    {produto:'Produto-01',qt:1,precoUnit:1.4,subtotal:0},
    {produto:'Produto-02',qt:2,precoUnit:2.4,subtotal:0},
    {produto:'Produto-03',qt:3,precoUnit:3.4,subtotal:0},
    {produto:'Produto-04',qt:4,precoUnit:4.4,subtotal:0},
    {produto:'Produto-05',qt:5,precoUnit:5.4,subtotal:0},
]

// Funções CallBack para Filtros
const fn1 = (e) => e < 5
const fn2 = (e) => e >= 5  // elemento, posicao, tamanho-vetor
const fn3 = (e) => e.subtotal < 10.5 
const fn4 = (e) => e.qt > 4
const fn5 = (e) => {
    const carrinhoCompras = {}
    carrinhoCompras.produto = e.produto
    carrinhoCompras.qt = e.qt
    carrinhoCompras.precoUnit = e.precoUnit
    carrinhoCompras.subtotal = e.qt * e.precoUnit

    return carrinhoCompras
}
const fn6 = (e) => e.qt >5

// Filtrar os dados do vetor de números
console.log(`Valores < 5 = {${v1.filter(fn1)}}`)
console.log(`Valores >= 5 = {${v1.filter(fn2)}}`)


// Filtrar os dados do veotr de objetos
console.log("\nFilter-Map:  \n" + JSON.stringify( compras.filter(fn4).map(fn3) ))
console.log("\nMap-Filter:  \n" + JSON.stringify( compras.map(fn5).filter(fn3) ))

// Criando seu próprio Filter utilizando prototype
compras = compras.map(fn5)
Array.prototype.meuFilter = function(fn){
    const vetorResultado = []

    for (let i = 0; i < this.length; i++) {
        
        if (fn(this[i],i,this))
            vetorResultado.push( JSON.stringify( this[i] )) 
    }
    return vetorResultado
}
console.log("\nPrototype-filter:\n" + compras.meuFilter(fn3))
