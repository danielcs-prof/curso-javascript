// ARITMÉTICA E PRECEDENCIA

// 1 - Operadores aritméticos
x = 8, y = 5, d = 2
console.log(`Soma x + y = ${x} + ${y} = `,x+y)
console.log(`Subtração x - y = ${x} - ${y} = `,x-y)
console.log(`Multiplicação x * y = ${x} * ${y} = `,x*y)
console.log(`Divisão x / d = ${x} / ${d} = `,x/d)
console.log(`Resto y % d = ${y} % ${d} = `,y%d)

// 2 - Precedência de operadores matemáticos
console.log(`Erro de Precedência: Média = ${x} + ${y} + ${d} / 3 = `, x + y + d/3 )
console.log(`Precedência com (): Média = (${x} + ${y} + ${d})/ 3 = `, (x + y + d)/3 )

// 3 - Funções matemáticas
console.log(`Constante PI = `, Math.PI)
console.log(`Constante de Euler = `, Math.E)
console.log(`Potencia = ${y} ^ ${d} = `, Math.pow(y,d))
console.log(`Raiz cubica de ${x} = `, Math.pow(x,1/3))
console.log(`Raiz quadrada: sqrt(x) = `, Math.sqrt(x))
console.log(`Seno(PI)`, Math.sin(Math.PI))
console.log(`Cos(PI)`, Math.cos(Math.PI))
console.log(`Tan(PI)`, Math.tan(Math.PI))
console.log(`ArcTan(PI)`, Math.atan(1))
console.log(`Exp`, Math.exp(1))
console.log(`Log`, Math.log(1))
console.log(`Log10`, Math.log10(1))