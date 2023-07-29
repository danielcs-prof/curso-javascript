// ARROW FUNCTION

// Convertendo uma função em um arrow function
const fn1 = function(x,y){ return x+y };
const fn2 = (x,y) => x+y;
console.log(`AF1 - Soma = ${fn1(2,3)}`);
console.log(`AF2 - Soma = ${fn1(2,3)}`);

// Arrow Function sem argumentos
const fn3 = () => console.log("AF3 - Sem parametros");
fn3();

// Arrow Function com um único argumento e única linha
const fn4 = str => console.log(`AF4 - Com um parametro = ${str}`);
const fn5 = (str) => console.log(`AF5 - Com um parametro = ${str}`);

//Arrow Function com multiplas linhas e parametros
const fn6 = (str1,str2) => {
    console.log(`AF6 - Primeira linha do arrow function: ${str1}`);
    console.log(`AF6 - Segunda linha do arrow function: ${str2}`);
}
fn6('paramentro1','parametro2');

// Arrow Function com ou sem a palavra-reservada return
const fn7 = (x,y) => { return x * y };
const fn8 = (x,y) => x * y;
console.log(`AF7 -  ${ fn7(2,3) }`);
console.log(`AF8 -  ${ fn8(2,3) }`);

// Arrow Function com o corpo de uma única linha e quebrada em várias linhas
const fn9 = (vetorNum) => vetorNum.filter(n => n>5).map(n => n-1).every(n => n<10);
const fn10 = (vetorNum) => (
    vetorNum.filter(n => n>5)
    .map(n => n-1)
    .every(n => n<10)
    );
console.log(`AF9 - ${ fn9([1,2,3,4,5]) }` );
console.log(`AF10 - ${ fn10([1,2,3,4,5]) }` );

// Arrow Function com um objeto JS no corpo
const fn11 = (nome, idade) => ({prop1:nome, prop2:idade})
console.log( `AF11 - propriedade dos objetos = ${fn11('daniel',30).prop1 } e ${fn11('daniel',30).prop2}` )
