/**
 * Sorteio
 * @author Arthur Garcia Volpini
 */

const input = require('readline-sync')
let sorteio
console.clear()
input.question("Pressione a tecla [Enter] para fazer o sorteio de um numero ")

sorteio = Math.floor(Math.random() * 16 + 1) 
console.log(sorteio)