// TEMPLATES LITERAIS
let nome = "Daniel";
let idade = 30;
let peso = 80;
let str1 = "O aluno ";
let str2 = "completou "
let str3 = " anos e pesa "
let str4 = " kg."

// Interpolação de expressões utilizando concatenação
console.log(str1 + nome + str2 + idade + str3 + peso + str4)

// Interpolação de expressões utilizando templates
console.log(`O aluno ${nome} completou ${idade} anos e pesa ${peso} kg.`)

// Tagged template strings
function tag (strings, ...valores){
    const expr = valores[2]>70 ? " está acima do peso.": " está abaixo do peso.";
    return strings[0] + valores[0] + expr;
}
console.log( tag `O aluno ${nome} completou ${idade} anos e pesa ${peso} kg.`)