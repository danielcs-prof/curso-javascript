// ESTRUTURA CONDICIONAL
// 1 - Estrutura condicional simples
let y = 10
if(true)
    console.log('Bloco if -  somente um comando')
if(y>5){
    console.log('Somente bloco if')
}

// 2 - Estrutura condicional composta
let x = 5
if (x > 2)
    console.log('Bloco if - somente um comando')
else
    console.log('Bloco else - somente um comando')
if(3 > 5){
    console.log('Bloco if')
}
else { 
    console.log('Bloco else')
}

// 3 - Estrutura condicional aninhada
if(true){
    console.log('Bloco if')
    if(true){
        console.log('Bloco if com if dentro')
    }
}
if(true){
    console.log('Bloco if')
}
else if(true){ 
    console.log('Bloco else if aninhado')
}
else{
    console.log('Bloco else')
    if(true){
        console.log('Bloco else com if')
    }
}

// Switch case
let opcao = 5

switch(opcao){
    case 1:
        console.log('Case 1')
        break;
    case 2:
        console.log('Case 2')
        break;
    case 'a':
        console.log('Case a')
        break;
    default:
        console.log('Caso contrario - default')
        break;
}

// Ternário
1 > 2? console.log('Ternario - verdadeiro'): console.log('Ternario - falso')

1 > 2? 
    console.log('Ternario - verdadeiro')
: 2>1? 
    console.log('Ternario aninhado if - verdadeiro')
    : console.log('Ternario aninhado if - verdadeiro')

valor = 1 < 10? 10: 1 // atribuicão com condição
console.log(valor)