/**
 * Estudo das estruturas While
 * @author Arthur Garcia Volpini
 */
console.clear()
const input = require('readline-sync')

//modificar os valores para testar a diferença entre while e do-while
let x = 15
let y = 15

while (x < 11) {
    console.log("teste da estrutura while")
    x++
}
input.question("Pressione a tecla [Enter] para continuar")
console.clear()
do {
    console.log("teste da estrutura do-while")
    y++
} while (y < 11)
