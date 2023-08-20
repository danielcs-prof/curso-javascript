// PROMISES UTILIZANDO ARQUIVO

const { rejects } = require('assert');
const fs = require('fs')    // manipulador de arquivo
const path = require('path')    // Path do arquivo

console.log('PROMISES - ARQUIVO')

const caminho = path.join(__dirname,'db-persons.json')

function lerArquivo(caminho){
    return new Promise((resolve,reject) => {
        fs.readFile(caminho,'utf-8',(erro,dados) =>{
        erro ? reject(erro) : resolve( JSON.parse(dados) )
        })
    });
}

const arquivo = lerArquivo(caminho)
.then(dados => {console.log(dados)})
.catch(erro =>{
    console.error(erro)
})
