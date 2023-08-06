// DADOS 


// Vetor de numeros
export let vetor1 = [0,1,2,3,4,5,6,7,8,9]
export let vetor2 = [10,11,12,13,14,15,16,17,18,19]
export let str0 = ['Ana', 'Bruno', 'Carolina','Daniel','Eliane']

// Vetor de objetos
export const statusPedido = ['concluido','cancelado']
export let totalizadoresEstatistica = []    // Total Receita | Total Pedidos | Total Clientes

export let clientes = [
    {id:1,nome:'Ana Flavia', cpf:'001.999.999-99',email:'usuario-1@dominio.com'},
    {id:2,nome:'Bruno Pedrosa', cpf:'002.999.999-99',email:'usuario-2@dominio.com'},
    {id:3,nome:'Caroline Maia', cpf:'003.999.999-99',email:'usuario-3@dominio.com'},
    {id:4,nome:'Daniel Corrêa da Silva', cpf:'004.999.999-99',email:'usuario-4@dominio.com'}
]

export let produto = [
    {id:1,nome:'Leite', descricao: 'leite Piracanjuba',  precoUnit: 5.89},
    {id:2,nome:'Pão', descricao: 'pão frances',  precoUnit: 0.90},
    {id:3,nome:'Requeijao', descricao: 'requeijão tradicional Itambé', precoUnit: 10.90},
    {id:4,nome:'Refrigerante', descricao: 'coca-cola tradicional de 2L', precoUnit: 8.00},
    {id:5,nome:'Queijo', descricao: 'queijo mussarela Pirancanjuba',  precoUnit: 23.89}
]

export let item = [
    {id:1,codigoProduto:0,quantidade: 1,subtotal:0},
    {id:2,codigoProduto:3,quantidade: 2,subtotal:0},
    {id:3,codigoProduto:2,quantidade: 2,subtotal:0},
    {id:4,codigoProduto:1,quantidade: 3,subtotal:0},
    {id:5,codigoProduto:4,quantidade: 3,subtotal:0},
    {id:6,codigoProduto:2,quantidade: 2,subtotal:0},
    {id:7,codigoProduto:1,quantidade: 1,subtotal:0},
    {id:8,codigoProduto:5,quantidade: 5,subtotal:0},
]
export let pedido = [
    {id:1,codigoItem:1, codigoCliente:1,dataPedido: Date, toatal:0.00, statusPedido: statusPedido[0]},
    {id:2,codigoItem:1, codigoCliente:1,dataPedido: Date, toatal:0.00, statusPedido: statusPedido[0]},
    {id:3,codigoItem:1, codigoCliente:1,dataPedido: Date, toatal:0.00, statusPedido: statusPedido[0]},
    {id:4,codigoItem:1, codigoCliente:1,dataPedido: Date, toatal:0.00, statusPedido: statusPedido[0]}
]