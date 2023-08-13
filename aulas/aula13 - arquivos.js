// MANIPULAÇÃO DE ARQUIVO

const fs = require('fs')
const path = require('path')

//Obter o path do diretório onde está o arquivo
const pathArqTxT = path.join(__dirname,'dados.txt')
const pathArqJSON = path.join(__dirname,'db-persons.json')
const pathArqJSONW = path.join(__dirname,'dados.json')

// Lendo dados de um arquivo texto
function lerArquivo(caminho) { 
    
    return new Promise( (resolve,reject) =>{
    fs.readFile(caminho,'utf-8',(dados,erro) => {
        erro ? reject(erro) : resolve(dados)
    })
});
}

// Gravando dados no arquivo texto
 function gravarArquivo(caminho,dados){
    
    return new Promise( (resolve,reject) => {
        
        fs.writeFile(caminho,dados,(erro,dados) =>{  // fs.appendFile - mantém os dados do arquivos
            erro ? reject(erro) : resolve(dados)
        })
    });
}

// Executando a leitura e gravação de arquivo texto
// const gravarTxT =  gravarArquivo(pathArqTxT,'Nova-linha\n')
//                 .then(dados => console.log('Dados gravados com sucesso!!'))
//                 .catch(erro => console.error(erro))

// const lerTxT =  lerArquivo(pathArqTxT)
//                 .then(dados => console.log('Dados lidos com sucesso!!'))
//                 .catch(erro => console.error(erro))

//Executando a leitura e gravação de arquivo JSON                
// const dados = fs.readFileSync(pathArqJSON,'utf-8',(erro,dados)=> {
//     if(erro)
//         throw console.error(erro)
// })
// fs.writeFileSync(pathArqJSONW,dados)

// Leitura e gravação em arquivos utilizando Promise com Async e Await

async function processarArquivo(caminhoLeitura,caminhoGravacao){
    
    await lerArquivo(caminhoLeitura)
    
    await gravarArquivo(caminhoGravacao, dados)
    
    
}

processarArquivo(pathArqJSON,pathArqJSONW)


