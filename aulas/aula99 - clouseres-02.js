// ESCOPO GLOBAL ARQUIVO

var isValided = false
// let isValided = false

function init(){
    console.log('Auto-Invocacao1',isValided)
}

(function (){
    init()
})()