/**
 * Exempo de uso da estrututa do-while
 * @author Arthur Garcia Volpini
 */

const input = require("readline-sync")
let face
let confirma = "n"
do {
    console.clear()
    console.log("Jogo do Dado")
    input.question("Pressione a tecla [ENTER] para jogar: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face sorteada:  ${face}`)
    confirma = input.question("Deseja jogar novamente(s/n): ")
} while (confirma === "s")
// se a condição for verdadeira, ele volta o codigo do início e executa novamente 