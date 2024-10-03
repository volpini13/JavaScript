/**
 * Uso de operador condicional ternário no lugar do if-else
 * @author Arthur Garcia Volpini
 */

const colors = require('colors')
console.clear()
let media = 5

//sintaxe do operador ternário: condição ? true : false
media < 5 ? console.log("Reprovado".red) : console.log("aprovado".green)