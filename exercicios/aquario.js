/**
 * Cálculo de um volume do aquário
 * @author Arthur Garcia Volpini
 */

console.clear()
const input = require('readline-sync')

let altura, largura, comprimento, litros

console.log("Calcule o volume de um aquário")

//entrada
comprimento = Number(input.question("Insira o comprimento em centimetros do aquario: "))
largura = Number(input.question("Insira a largura do aquario em centimetros: "))
altura = Number(input.question("Insira a altura do aquario em centimetros: "))

//procesamento

litros = (comprimento * largura * altura) / 1000

console.log (`No aquario cabem ${litros.toFixed(1)} litros`)