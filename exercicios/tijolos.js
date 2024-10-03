/**
 * Cálculo da quantidade de tijolos baianos de 8 furos por métro quadrado, sabendo que 1 m2 = 28 tijolos
* @author Arthur Garcia Volpini
 */

const input = require('readline-sync')

let m2, tijolos

console.clear()
console.log("Cálculo da quantidade de tijolos por m2 (tijolo baiano 8 furos)")

//entrada
m2 = Number(input.question("Quantos metros quadrados voce precisa:"))

//processamento

tijolos = m2 * 28

//saida
console.log(`Voce precisara de ${tijolos} tijolos`)
