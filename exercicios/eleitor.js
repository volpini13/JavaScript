/**
 * Exemplo da estrutura else if
 * @author Arthur Garcia Volpini
 */

const input = require('readline-sync')
const colors = require('colors')
console.clear()

let idade
console.log("idade apto a votar")
idade = Number(input.question("Digite a sua idade: "))

if (idade <= 15) {
    console.log("não pode votar".red)
} else if (idade >= 18 && idade <= 70){
    console.log("Voto obrigatório".green)
} else {
    console.log("Voto facultativo".yellow)
}

