/* TEMPORAL DEAD ZONE */

let x;
console.warn(x)     // Imprime undefined
x = 5;              // Até o intante de atricuição x estava na TDZ
console.log(x)      // Imprime 5

