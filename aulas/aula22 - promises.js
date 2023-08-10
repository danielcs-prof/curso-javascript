/* PROMISES
 Estados da promises:

    - pendente (pending): não foi inicializada e nem rejeitada
    - realizada (fulfilled): sucesso na operaçao
    - rejeitada (rejected): falha na operação
*/

const promise = new Promise( (resolve,reject) => {
    let dados =[]
    setTimeout(()=> {
        console.log('\nCriou-se outro fluxo paralelo de processamento: \n')
        for (let i = 0; i < 5; i++) {
            dados.push(i+1)
            console.log(i+'s de processamento assincrono')
        }
        false ? resolve(dados): reject(new Error('Falha no processamento dos dados!!'))
        
    }
        ,1000)
});
promise.then((resultado) =>{ 
    console.log('\nProcessamento concluído com sucesso!\n')
    console.table(resultado)
})
       .catch((erro) => {console.error('\nERRO 100:',erro);})

// Varias promises encadeadas
// primeira promises
const p1 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        console.log('P1 - promises one')
        true ? resolve(1): reject(new Error('Erro1 - promises 1'));},1000);
});

//segunda promises
const p2 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        console.log('P2 - promises two')
        true ? resolve(2): reject(new Error('Erro2 - promises 2'));},1000);
});

// terceira promisses
const p3 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        console.log('P3 - promises three')
        true ? resolve(3): reject(new Error('Erro3 - promises 3'));},1000);
});

Promise.all([p1,p2,p3])
.then( (values) => { console.log('Processamento, concluido com sucesso:',values)})
.catch((erro) => { console.error(erro)});

