/**
 * App Flex
 * @author Arthur Garcia Volpini
 */

//inportação de pacotes
  const colors = require('colors')
const input = require('readline-sync')

console.clear()

let gasolina, etanol

console.log("Cálculo de Gasolina ou Etanol")

gasolina = Number(input.question("Digite o valor da Gasolina: "))
etanol = Number(input.question("Digite o valor do Etanol: "))

if(etanol < 0.7 * gasolina) {
    console.log("abastecer com etanol".green)
  } else {
    console.log("abastecer com gasolina".red)
  }
