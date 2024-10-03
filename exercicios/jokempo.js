/**
 * jokempo
 * @author Arthur Garcia Volpini
 */

const input = require("readline-sync")

let jogador, computador
console.clear()

console.log("    __ _____ _____ ____ _____ _____ _____ _ _ _")
console.log(" __|  |     |  |  |  __|   | |  _  |     | | | | ")
console.log("|  |  |  |  |    -|  __| | | |   __|  |  | | | |")
console.log("|_____|_____|__|__| ___|_|___|__|  |_____|_____|")

console.log("")
console.log("Jokempow: ")
pedra = console.log("1. Pedra")
papel = console.log("2. Papel")
tesoura = console.log("3. Tesoura")
jogador = Number(input.question("Escolha uma das tres opcoes: "))

//computador

switch (jogador) {
    case 1:
        console.clear()
        console.log(`Jogador escolheu: Pedra`)
        break
    case 2:
        console.clear()
        console.log("Jogador escolheu: Papel")
        break

    case 3:
        console.clear()
        console.log(`Jogador escolheu: Tesoura `)
        break
    default:
        console.clear()
        console.log("Opcao invalida")
}
computador = Math.floor(Math.random() * 3 + 1)
switch (computador) {

    case 1:
        console.log("Computador escolheu: Pedra")
        break
    case 2:

        console.log("Computador escolheu: Papel")
        break

    case 3:
        console.log("Computador escolheu: Tesoura ")
        break
}

if (jogador === computador) {
    console.log("Jogo deu empate")
} else if ((jogador === 1 && computador === 3 ) || (jogador === 2 && computador === 1) || (jogador === 3 && computador ===2 )) {
    console.log("Jogador Venceu")
   
} else {
    console.log("Computador Venceu!!")
}
