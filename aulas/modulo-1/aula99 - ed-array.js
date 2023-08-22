// ARRAY EM JAVASCRIPT

// 1 - Criação de Arrays
let a01 = new Array()   // Cria um vetor vazio
let a02 = new Array(7)  // Cria um vetor com 7 elementos
let a03 = new Array('e1','e2','e3','e4','e5',)   // Cria e einiciazliza um vetor com 5 elementos

let a04 = []  // Cria um vetor vazio - Boa prática
let a05 = ['e1','e2','e3','e4',]  // Cria um vetor vazio - Boa prática

// 2 - Inserir elementos
console.log(a04)
a04.push('e5')              // inserir no final do array
a04.push('e6','e8','e9')    // inserir no final do array
console.log(a04)

a04.unshift('e4')               // inserir no inicio
a04.unshift('e1','e2','e3')     // inserir no inicio
console.log(a04)
a04.splice(6,0,'e7','e7.1')     // 0, para iserir 1 ou mais elementos na posição 6
console.log(a04)

// 3 -  buscar elementos do Array
console.log( a04[a04.indexOf('e3')] )
console.log( a04.slice(1) )
console.log( a04.slice(0,1) )

// 4 - Remover elementos
a04.shift()         // Exclui o primeiro elemento do Array
console.log(a04)
a04.pop()         // Exclui o ultimo elemento do Array
console.log(a04)
a04.splice(3,2 )    // Excluir dois elementos a partir da posição 2
console.log(a04)
delete a04[3]       // Excluir o elemento da posição 3
console.log(a04[3])

// 5 - Lista de Objetos
let clientes = []
// inserindo objetos no array
clientes.push({nome:'daniel',idade:30})
clientes.unshift({nome:'monica',idade:35})
clientes.splice(1,0,{nome:'miguel',idade:6})
console.log(clientes)

// buscar elementos do Array
console.log(JSON.stringify(clientes[0]))
console.log( clientes.slice(1))     // retorna o elemento de posição 1
console.log( clientes.slice(1,2))   // retorna todos os elementos entre 1 e 2

// removendo objetos do array
clientes.splice(1,1)
clientes.pop()
clientes.shift()
console.log(clientes)

// Convertendo array de numeros para string
let num0 =[0,1,2,3,4]
let num1 =[5,6,7,8,9]
let num2 =[10,11,12,13,14,15]
let str = 'daniel correa da silva'
console.log(num0.join())        // padrão: separa por virgula
console.log(num0.join(" "))     // separa por espaço em branco
console.log(num0.join(";"))     // separa por ponto-vírgula

// Desmembrando String em elementos de array
console.log(num0.join(';').split(';'))   // unifca os valores dos vetores e depois separa

// Concatenamo dois arrays
console.log(num0.concat(num1))
console.log(num0.concat(num1).concat(num2))

// Concatena e transforma em string
console.log(num0 + num1)    // Cuidado - os elementos das extremidades não ficam separados por ,

// transformando dois arrays de mesmo tambanho em matrizes
let mat = [num0,num1]
console.table(mat)
console.log(mat.length)
console.log(mat[0].length)
console.log(mat[1].length)

// Desestruturação do array
let [n1,n2] = num0
console.log(`Tipo: ${typeof num0} - valor = ${num0}`)
console.log(`Tipo: ${typeof n1} - valor = ${n1}`)
console.log(`Tipo: ${typeof n2} - valor = ${n2}`)
