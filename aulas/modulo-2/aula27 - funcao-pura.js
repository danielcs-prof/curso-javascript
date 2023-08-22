// FUNÇÃO PURA E IMPURA
/*  

Evitar funções impuras no JavaScript é uma prática importante para escrever código mais previsível, testável e fácil de entender. 
Aqui estão algumas dicas para evitar funções impuras:



1 - Separação de Responsabilidades: Mantenha as funções focadas em tarefas específicas. Evite misturar operações que causam efeitos colaterais com lógica de negócios. Isso facilita a identificação e isolamento das partes do código que podem ser impuras.

2 - Isolamento de Efeitos Colaterais: Se você precisa realizar operações com efeitos colaterais, como manipulação de DOM, chamadas de rede ou manipulação de arquivos, tente isolar essas operações em funções específicas. Isso torna mais fácil identificar e gerenciar onde os efeitos colaterais ocorrem.

3 - Imutabilidade: Prefira trabalhar com dados imutáveis sempre que possível. Em vez de modificar diretamente variáveis ou objetos externos, crie novos valores com as alterações necessárias. Isso ajuda a evitar efeitos colaterais indesejados.

4 - Parâmetros: Evite modificar os parâmetros passados para a função. Em vez disso, crie cópias dos parâmetros e trabalhe com as cópias para evitar a alteração acidental de dados externos.

5 - Retorno Explícito: Sempre retorne valores explícitos de suas funções em vez de confiar em valores globais ou de escopo superior. Isso torna mais claro o que uma função está produzindo.

6 - Evite Variáveis Globais: Variáveis globais podem ser modificadas de qualquer lugar, o que pode levar a efeitos colaterais inesperados. Tente limitar o uso de variáveis globais e, se necessário, mantenha-as restritas a um escopo específico.

7 - Evite Ações Assíncronas em Funções Impuras: Se uma função impura realizar ações assíncronas, como chamadas de rede, isso pode tornar o comportamento ainda menos previsível. Se possível, mova essas ações para funções separadas ou use abordagens como Promises ou async/await para lidar com elas.

4 - Testes: Crie testes para suas funções para garantir que elas produzam os resultados esperados sem causar efeitos colaterais indesejados. Testar funções impuras pode ser mais complexo, mas é importante verificar se elas estão se comportando conforme o esperado.


Lembrando que, em alguns casos, funções impuras podem ser inevitáveis, especialmente quando se trata de interagir com o mundo externo, como o DOM ou operações de I/O. O objetivo não é eliminar completamente as funções impuras, mas minimizar seu uso e mantê-las isoladas e controladas.

*/

// Função Pura
// O resultado da função depende somentes dos parametros de entrada
function somaPura(a,b){  
    return a + b
}


// Função Impura
// O resultado da função ou variáveis globais sofre alterações inesperadas devido a questões de escopo
let contador = 0
function somaImpura(a,b){
    a = contador++
    return a + b
}
/**
 * As funções que manipula vetores e que gera ou efeitos colaterais:
  
 * 1 - map: não torna a função impura
 * 2 - filter: não torna a função impura
 * 3 - reduce: não torna a função impura
 * 4 - slice: não torna a função impura
 * 5 - sort: torna a função impura
 
 */
// Função Impura - Array
let num1 = [3,5,1,2,8,6,7] // vetor de numeros é alterado com a execução
function ordenaVetor1(array){
    array.sort()        // Altera a variável global num
}

// Solução 1: Função Pura - Array
function ordenaVetor2(array){
    [...array].sort()   // Não altera a variável global num
}

// Solução 2: Congelar a memória do Array
// let num2 = Object.freeze( [3,5,1,2,8,6,7] )     // Congela a memória e não deixa alterar a variavel
const num3 = [3,5,1,2,8,6,7]                    // Torna a variável como uma const
function ordenaVetor2(array){
    [...array].sort()   // Não altera a variável global num
}

console.log( contador )
console.log( somaPura(2,3) )
console.log( somaImpura(2,3) )
console.log( contador )

//ordenaVetor1(num2)    // Função Impura - utilizando a solução Object.freeze
ordenaVetor1(num3)      // Função Impura - utilizando a solução Object.freeze
ordenaVetor1(num1)      // Função Impura - interfere na variavel global num
ordenaVetor2(num2)      // Função Pura - não interfere na variavel global num

console.log( num1 )
console.log( num2 )