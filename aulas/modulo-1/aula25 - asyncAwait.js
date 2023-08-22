// ASYNC E AWAIT

// Funções Promise
const { resolve } = require("path");

function taskPromise01(valor){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(1))},1000)
}
function taskPromise02(valor){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(1))},2000)
}
function taskPromise03(valor){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(1))},3000)
}
function taskPromise04(valor){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(1))},4000)
}

// Invocando as funções promisses
// const processamento = taskPromise01(-1)
// .then(valor => {
//     console.log(1)
//     return taskPromise02(valor)
// })
// .then(valor => {
//     console.log(1)
//     return taskPromise03(valor)
// })
// .then(valor => {
//     console.log(1)
//     return taskPromise04(valor)
// })

// Utilizando funções Async e Awati

async function taskAsync(valor){
    await taskPromise01(1)
    console.log('Promise01: ' + valor +1)
    await taskPromise02(2)
    console.log('Promise02: ' + 2)
    await taskPromise03(3)
    console.log('Promise03: ' + 3)
    await taskPromise04(valor +4)
    console.log('Promise04: ' + 4)
}

taskAsync(0)