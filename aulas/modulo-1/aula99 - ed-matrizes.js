// ARRAY MATRIZES

// 1 - Criando matrizes
let m1 = [[],[]]

m1[0][0] = 1
m1[0][1] = 2
m1[0][2] = 3
m1[1][0] = 4
m1[1][1] = 5
m1[1][2] = 6
console.table(m1)

let m2 = [
    [1,2],
    [3,4],
    [5,6]
]
console.table(m2)

let m3 = [
    ['tarefa-01',20],
    ['tarefa-02',10],
    ['tarefa-03',26],
    ['tarefa-04',6],
]
console.table(m3)

let m4 = []
m4[0] = [1,2,3,4]
m4[1] = [5,6,7,8]
console.table(m4)

let m5 = []
m5[0] = new Array(3)
m5[1] = new Array(3)
m5[2] = new Array(3)
console.table(m5)

// 2 - Percorres Matrizes
// dimensões da matriz
dim = [m1.length, m1[0].length]
console.log('Linha x Coluna: ' + dim)

// Estrutura repetição for
for( let i=0; i < dim[0]; i++){
    for (let j=0; j < dim[1]; j++){
        console.log(m1[i][j])
    }
}

for(let l of m1)
    for (let c of l)
        console.log(c)