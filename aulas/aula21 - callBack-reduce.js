// CALLBACK REDUCE

let v1 = [1,2,3,4,5,6,7,8,9]
let v2 = ['Ana', 'Bruna', 'Carla', 'Danilo']
let compras = [
    {produto:'Produto-01',qt:1,precoUnit:1.4,subtotal:0,fragil:true},
    {produto:'Produto-02',qt:2,precoUnit:2.4,subtotal:0,fragil:false},
    {produto:'Produto-03',qt:3,precoUnit:3.4,subtotal:0,fragil:true},
    {produto:'Produto-04',qt:4,precoUnit:4.4,subtotal:0,fragil:true},
    {produto:'Produto-05',qt:5,precoUnit:5.4,subtotal:0,fragil:true},
]

// Funções CallBack para Filtros
const fn6 = (acc,e) =>  acc + e.qt          // total quantidades
const fn7 = (acc,e) =>  acc + e.precoUnit   // total preço unitario
const fn8 = (acc,e) =>  acc + e.subtotal    // total subtotal

const filtFagil = (e) => e.fragil == true
const filtProduto = (e) => { // Filtra produto e calcula subtotal
    const resp = {}

    resp.qt = e.qt
    resp.precoUnit = e.precoUnit
    resp.subtotal = e.qt * e.precoUnit
    
    return resp
}

// Manipulaçao do vetor utilizando reduce
console.log('Filtro de produtos:\n')
console.log( compras.map(filtProduto) ) // retorna qt, precoUnit e subtotal
console.log('Totalizadores:\n')
console.log( compras.map(filtProduto).reduce(fn6,0) )   // total de qt
console.log( compras.map(filtProduto).reduce(fn7,0) )   // total de precoUnit 
console.log( compras.map(filtProduto).reduce(fn8,0) )   // total subtotal
console.log('Totalizadores:\n')
