/**
 * Exempo de uso de uma função simples
 * @author Arthur Garcia Volpini
 */

const input = require("readline-sync")
let face
let confirma = "n"

function jogarDado() {
    console.clear()
    console.log("Jogo do Dado")
    input.question("Pressione a tecla [ENTER] para jogar: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face sorteada:  ${face}`)
    // se a condição for verdadeira, ele volta o codigo do início e executa novamente 
}

jogarDado()

confirma = input.question("Deseja jogar novamente(s/n): ")
if(confirma === "s") {
    jogarDado()
}