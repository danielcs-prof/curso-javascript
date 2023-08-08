// Convertendo JSON
// Array de objetos clientes
let clientes = [
    {id:1,nome:'Ana Flavia', cpf:'001.999.999-99',email:'usuario-1@dominio.com'},
    {id:2,nome:'Bruno Pedrosa', cpf:'002.999.999-99',email:'usuario-2@dominio.com'},
    {id:3,nome:'Caroline Maia', cpf:'003.999.999-99',email:'usuario-3@dominio.com'},
    {id:4,nome:'Daniel Corrêa da Silva', cpf:'004.999.999-99',email:'usuario-4@dominio.com'}
]

// Convertendo JSON => String
json = JSON.stringify(clientes)
console.log(typeof json)
console.log(json)

// Convertendo JSON => String
ArrayObj = JSON.parse(json)
console.log(typeof ArrayObj)
console.log(ArrayObj)