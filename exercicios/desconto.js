/**
 * Desconto da loja
 * @author Arthur Garcia Volpini
 */

console.clear()
const input = require('readline-sync')

console.log("Cálculo de valor de desconto")
console.log("X% de Y = Valor do desconto")

let total, desconto, totalDesconto, valor

//entrada
total = Number(input.question('Digite o valor do Produto:'))
desconto = Number(input.question('Digite o valor do desconto em porcentagem:'))
console.log("___________________")

//processamento
valor = (total * desconto) / 100
console.log(`desconto de R$ ${valor}`)

//saída
totalDesconto = total - valor
console.log(`${total} reais o valor total com ${desconto}% de desconto fica no de valor final de: ${totalDesconto.toFixed(2)}`)