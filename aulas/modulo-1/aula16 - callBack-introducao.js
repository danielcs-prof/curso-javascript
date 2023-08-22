// CALLBACK

// Definição das funções Callback
// Função callback sum
function sum (dados){
    resp = 0;
    for (e of dados){
        resp +=e
        // console.log(e)
    }
    return resp
}
// Função callback sub
function sub (dados){
    resp = 0;
    for (e of dados){
        resp -=e
    }
    return resp
}

// Função que invoca a função Callback
function opVector(dados,callback){
    return callback(dados)
}
// Chama a função Callback
resp = opVector([-1,2,3,4,5],sum)
console.log(resp)

resp = opVector([-1,2,3,4,5],sub)
console.log(resp)

// CALLBACK - setimeout e setinterval

// setInterval(()=>{ console.log("Executa de 1 em 1 seg: "), 1000})
setTimeout(() => { console.log("Executa após 1 seg: ")}, 1000);


