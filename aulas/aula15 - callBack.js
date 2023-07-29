/*


*/

function sum (dados){
    resp = 0;
    for (e of dados){
        resp +=e
        // console.log(e)
    }
    return resp
}

function sub (dados){
    resp = 0;
    for (e of dados){
        resp -=e
    }
    return resp
}

// FUNÇÃO CALLBAKC
function opVector(dados,callback){
    return callback(dados)
}



resp = opVector([-1,2,3,4,5],sum)
console.log(resp)

resp = opVector([-1,2,3,4,5],sub)
console.log(resp)