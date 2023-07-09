// TIPOS DE DADOS

// 1 - String
str0 = "String com aspas dupla"
str1 = 'String com aspas simples'
console.log( typeof str0 + ': ' + str0 + ' , ' + str1)

// 2 - Booblean
b0 = true
b1 = false

// 3 - Number
x0 = 1
x1 = 3.14
console.log( typeof x0 + ': '+ x0 + ', ' + x1)

// 4 - NaN
w = str0/5
console.log( typeof w + ': ' + w+' - Not a Number')

// 5 - +/- Infinity 
i = 100/0
console.log(typeof i + ': ' + i)

// 6 - Undefined - valor de variável não atribuida
var x; 
console.log(typeof x + ': ' + x)

// 7 - Object
p = {nome:'daniel correa', idade:29, peso:78.9}
console.log(typeof p + ': ' + JSON.stringify(p))

// 8 - null - ausência de valor
y = null
console.log(typeof y + ': ' + y)

// 9 - Array
a = ['daniel correa',29, 78.9]
console.log(typeof a + ' array: ' + a)

// 10 - Function
f = function soma(x,y){ return x+y }
console.log(typeof f + ': soma = ' + f(2,3))
