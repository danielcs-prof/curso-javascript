
/**
 *  Retornando função:
 * 
 *  1 - Callback e Promises - processamento assíncrono
 *  2 - Map, Filter e Reduce - processamento assíncrono
 */


// Operação matemática
function opMat(fn, num1,num2){      // passando função como parâmetros
    return fn(num1,num2)            // retornando função como parâmetros
}

// Funções que serão passadas como parâmetro para a função opMat
const sum = (a,b) => { return a + b }
const sub = (a,b) => { return a - b }
const mul = (a,b) => { return a * b }
const div = (a,b) => { return a / b }

// Chamando a função
console.log( opMat(sum,9,3))    // CallBack: passando funções como paraâmetro
console.log( opMat(sub,9,3))    // CallBack: passando funções como paraâmetro
console.log( opMat(mul,9,3))    // CallBack: passando funções como paraâmetro
console.log( opMat(div,9,3))    // CallBack: passando funções como paraâmetro

// Exemplo de função que retorna outra função
const multiplicador = (fator) => { 
    return function(numero){
        return numero * fator} 
}

const duplicador = multiplicador(2)
const triplicador = multiplicador(3)
console.log( duplicador(5) )
console.log( triplicador(5) )

// Exemplo: Utilizando Promisses para implementar funções de alta ordem

const p1 = new Promise(
    (resolve,reject) => {
      let valor = 1
      setTimeout(() => {console.log('Promisse P1-then: ',valor++)},1)
        if (false)
            throw reject(new Error('Falha no processamento da Promises 1')) 
        resolve(valor)
    }
)
p1
.then( (valor) => { setTimeout(() => {console.log('Processando - ')},valor); console.log( 'Promisse P1-then: ',valor++ );  return(valor) })
.then( (valor) => { setTimeout(() => {console.log('Processando - ')},valor); console.log( 'Promisse P1-then: ',valor++ );  return(valor) })
.then( (valor) => { setTimeout(() => {console.log('Processando - ')},valor); console.log( 'Promisse P1-then: ',valor++ );  return(valor) })
.then( (valor) => { setTimeout(() => {console.log('Processando - ')},valor); console.log( 'Promisse P1-then: ',valor++ );   })
.catch(
    (erro) => { console.error(erro) }
)