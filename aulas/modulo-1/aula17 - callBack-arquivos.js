// CALLBACK ARQUIVOS

let file =  require('fs')
let path = require('path')
caminho = path.join(__dirname,'dados.txt')

// Callback Assíncrono
let imprimirArquivo = (erro,dados)=>{
    if(erro) 
    throw console.error(erro)
    console.log(dados.toString())
}
console.log('Inicio - Assincrono') // Primeira impressao
file.readFile(caminho,null, imprimirArquivo );  // Terceira impressao - CallBack com Function
file.readFile(caminho,null, (erro,dados)=>{     // Quarta impressao - CallBack Arrow Function
    if(erro) 
    throw console.error(erro)
    console.log(dados.toString())
} ); // Quarta impressão
console.log('Fim - Assincrono' )  // Segunda impressao


// Callback Síncrono
console.log('Inicio - Sincrono')
dados = file.readFileSync(caminho)
console.log(dados.toString())
console.log('Fim - Sincrono')