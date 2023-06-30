// ARROW FUNCTION

// CONVERSÃO DE FUNCTION PARA ARROW FUNCTION
const resp0 = function soma(x,y){return x+y}
const resp1 = (x,y) => {x+y}
console.log(`AF0 - Arrow function: ${resp0} = ${resp1}`)

// SEM PARAMETROS
const resp2  = () => {console.log('AF1 - Arrow function sem paramentros')}

// COM PARAMETROS SEM PARENTESES
const resp3 = x => {console.log(`AF2 - Arrow functin com parametros sem parenteses`)}