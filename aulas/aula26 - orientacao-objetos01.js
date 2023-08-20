//FUNÇÃO CONSTRUTORA
// Utilizando função para definir objetos

// função define os atributos do objeto
function Pessoa(_id, _nome, _cpf, _peso){
    this.id = _id        //this = publico
    this.nome = _nome    //this = publico
    this.cpf = _cpf      //this = publico
    let peso = _peso      // privado: escopo local
    this.massa = function(_peso){
        return peso * 0.8
    }
}
// Tipo function retornando Pessoa
console.log(Pessoa)

// Tipo indefinido
const p0 = new Pessoa(0,'Miguel','999.999.999-99')
console.log(typeof p0)  // retorna o tipo function
console.log(p0)         // retorna o tipo function
console.log(p0.nome)    // retorna o tipo function

// Operador new cria um objeto utilizando a funcao
const p1 = new Pessoa(1,'Daniel','999.999.999-99',79)
console.log(typeof p1)
console.log(p1)  // retorna o tipo function
console.log(p1.id)
console.log(p1.nome)
console.log(p1.cpf)
console.log(p1.peso)
console.log(p1.massa())

// 