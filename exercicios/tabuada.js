/**
 * Tabuada
 * @author Arthur Garcia Volpini
 */

const input = require('readline-sync')

let valor
console.clear()
console.log("Tabuada")
valor = Number(input.question("Digite o valor da Tabuada: "))
console.log("")

for (let i = 1; i < 11; i++) {
    console.log(`${valor} X ${i} = ${valor * i}`)
}