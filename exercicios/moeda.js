/**
 * converter real para euro
 * @author Arthur Garcia Volpini
 */

console.clear()
const input = require('readline-sync')

console.log("converta real para euro")
let real, euro, valor

real = Number(input.question('Digite a quantidade de reais a serem convertidos: '))
euro = Number(input.question("Digite o valor atual do Euro: "))
valor = real / euro

console.log(`${valor.toFixed(2)} Euros`)