// OPERADORES RELACIONAIS


// 1 - IGUAL
console.log( 1 == 1 ) 
// 2 - DIFERENTE
console.log( 1 != 1 )
// 3 - MAIOR
console.log( 1 > 1 )
// 4 - MENOR
console.log( 1 < 1 )
// 5 - MAIOR OU IGUAL
console.log( 1 >= 1 )
// 6 - MENOR OU IGUAL
console.log( 1 <= 1 )

// ATENÇÃO - Problemas com ==
console.log("1" == 1)
console.log(true == 1)
console.log(null== undefined)

// COMPRARAÇÃO ESTRITA (IDENTICA)
console.log("1" === 1)
console.log(true === 1)
console.log(null=== undefined)

// FALSY
console.log(false ? 'Verdadeiro' : 'Falso')
console.log(0 ? 'Verdadeiro' : 'Falso')
console.log(-0 ? 'Verdadeiro' : 'Falso')
console.log(0n ? 'Verdadeiro' : 'Falso')
console.log("" ? 'Verdadeiro' : 'Falso')
console.log('' ? 'Verdadeiro' : 'Falso')
console.log(`` ? 'Verdadeiro' : 'Falso')

// TRUTHY
console.log(true ? 'Verdadeiro' : 'Falso')
console.log(1 ? 'Verdadeiro' : 'Falso')
console.log(1.2 ? 'Verdadeiro' : 'Falso')
console.log(-1 ? 'Verdadeiro' : 'Falso')
console.log(-1.2 ? 'Verdadeiro' : 'Falso')
console.log({} ? 'Verdadeiro' : 'Falso')
console.log([] ? 'Verdadeiro' : 'Falso')
console.log("0" ? 'Verdadeiro' : 'Falso')
console.log("false" ? 'Verdadeiro' : 'Falso')
console.log(Infinity ? 'Verdadeiro' : 'Falso')
console.log(-Infinity ? 'Verdadeiro' : 'Falso')