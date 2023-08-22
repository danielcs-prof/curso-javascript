// DEFININDO CLASSES COM class

class Produto{

    // Metodo construtor
    constructor(id,nome,preco,desconto = 0.5){
        
        this._id = id
        this._nome = nome
        this._preco = preco
        this._precoDesc = desconto
    }

    // Metodos sem a palavra reservada function
    // get para chamar como atributo e não como função
    get nome(){
        return this._nome
    }
    // Altera o valor do atributo com o novo valor
    // Converte todas para maiúscula
    set nome(newNome){
        this._nome = newNome.toUpperCase()      //Pre-processando a entrada
    }
    // Metodos sem a palavra reservada function
    // get para chamar como atributo e não como função
    get preco(){
        return this._preco
    }
    // Metod set
    set preco(newPreco){
        if(newPreco >= 0)
            this._preco = newPreco      //Validação da entrada
    }
    // Metodos sem a palavra reservada function
    // get para chamar como atributo e não como função
    get nome(){
        return this._nome
    }
    // Metodos sem a palavra reservada function
    // get para chamar como atributo e não como função
    get precoFinal(){
        return this._preco * (1-this._precoDesc)
    }
}

// Instanciando objetos
const p1 = new Produto(1,'Sorvete',20.25,0.12)
console.log(p1)
console.log(p1.id)

console.log(p1.nome)
p1.nome = 'Cerveja'
console.log(p1.nome)

console.log(p1.preco)
console.log(p1.precoFinal)