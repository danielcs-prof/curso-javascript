// ESTRUTURA DE REPETIÇÃO

let cont = 0,  max=10
let nomes = ['Daniel','Miguel', 'Monica', 'Jordana']
const publico  =  [
    {nome: 'Daniel', idade: 35 },
    {nome: 'Miguel', idade: 6 },
    {nome: 'Monica', idade: 36 }
]

// 1- While
while( cont< max){
    console.log(cont++)
}
// 2 - Do-While
cont = max
do{
    cont--
    console.log(cont)
}while(cont >= 0)

// 3- For

for (cont = 0; cont < nomes.length; cont++){
    console.log(nomes[cont])
}

// 4 - For-of
for( e of nomes){
    console.log(e)
}
for (e of publico){
    console.log(e)
}
// 5 - For-in
const persons  =  {nome: 'Daniel', idade: 35 }
for (e in persons){
    console.log( persons[e])
}

for(e in publico){
    console.log(publico[e])
}