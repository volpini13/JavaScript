/**
 * Sintaxe moderna nas estruturas if if-else
 * @author Arthur Garcia Volpini
 */

const colors = require('colors')
console.clear()

let media = 3

//Na linguage JS podemos omitir o uso de chaves na estrutura if if-else, porém apenas uma linha de código é permitida

if (media < 5)
    console.log("Reprovado".red)
else
    console.log("Aprovado".green)
console.log("Emitir certificado")

// Dica: Sempre usar chaves nas estruturas if if-else