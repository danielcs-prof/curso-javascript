// ESCOPO GLOBAL ARQUIVO

// 1 - Escopo de variaveis globais entre arquivos
var isValided = true
// let isValided = true

function init(){
    console.log('Auto-Invocacao2',isValided)
}

(function (){
    init()
})()