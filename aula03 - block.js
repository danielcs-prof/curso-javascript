/* ESCOPO DE BLOCO */

// ESCOPO DE NÍVEL SUPERIOR
var y = 0;
let x = 0;
const w =0;

function fn(param ){
    // ESCOPO BLOCO 1
    var y = 1;
    let x = 1;
    const w =1;

    for(let cont = 0; cont<1; cont++){
        // ESCOPO BLOCO 2
        var y = 2;
        let x = 2;
        const w = 2;
        console.log(`FOR =>\t\t\t\t VAR = ${y}, LET = ${x}, CONST = ${w}`); // Imprime 0
    }
    if(true){
        // ESCOPO BLOCO 3
        var y = 3;
        let x = 3;
        const w = 3;
        console.log(`IF =>\t\t\t\t VAR = ${y}, LET = ${x}, CONST = ${w}`); // Imprime 0
    }
    else{
        // ESCOPO BLOCO 4
        var y = 4;
        let x = 4;
        const w = 4;
        console.log(`ELSE =>\t\t\t VAR = ${y}, LET = ${x}, CONST = ${w}`); // Imprime 0
    }
    // ESCOPO BLOCO1
    console.log(`FUNCTION =>\t\t\t VAR = ${y}, LET = ${x}, CONST = ${w}`); // Imprime 0
}

// ESCOPO DE NÍVEL SUPERIOR
fn();
console.log(`ESCOPO SUPERIOR =>\t VAR = ${y}, LET = ${x}, CONST = ${w}`); // Imprime 0