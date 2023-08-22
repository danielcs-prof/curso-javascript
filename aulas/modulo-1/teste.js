const fs = require('fs')
const path = require('path')
const { json } = require('stream/consumers')

const pathArquivo = path.join(__dirname,'db-persons.json')
const pathEscrita = path.join(__dirname,'dados.json')
console.log(pathEscrita)

function taskReadFile(caminho){

    return new Promise( (resolve,reject) => {
            let dados = fs.readFile(caminho,'utf-8', (erro,dados) => {
            erro ? reject( new Error(erro) ) : resolve( dados)
        })
    })
}
function taskWriteFile(caminho,dadosParaGravar){

    return new Promise( (resolve,reject) => {
        fs.writeFile(caminho, dadosParaGravar, (erro) => {
        if (erro) 
            throw new Error('Falha - erro durane a gravação do arquivo')
        })
    })
}

const p1 = taskReadFile(pathArquivo)
.then(dados => {
    vetor = []
    dados = JSON.parse(dados)
    for(let i in dados){
        vetor.push({"id":dados[i].id,"nome":dados[i].name})
    }
    return vetor
})
.then( dados => {
    dados = JSON.stringify(dados)
    fs.writeFile(pathEscrita, dados, (erro) => {
    if (erro) 
        throw new Error('Falha - erro durane a gravação do arquivo')
    })
})
.catch(erro => console.log(erro) )
