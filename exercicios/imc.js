/**
 * Cálculo do IMC
 * @author Arthur Garcia Volpini
 */

const input = require('readline-sync')
const colors = require(`colors`) //pacote de cor
console.clear()

let nome, peso, altura, imc

console.log("  ___ __  __  ___ ")
console.log(" |_ _|  \\/  |/ __|")
console.log("  | ||||\\/| | (__ ")
console.log(" |___|_|  |_|\\___|")
console.log("")

nome = input.question("Digite o seu nome: ")
idade = input.question("Digite a sua idade: ")
peso = (input.question("Digite o seu peso em kilogramas: ").replace(",", ".")) //replace trocará vírgula pelo ponto
altura = (input.question("Digite sua altura em centimetros: ").replace(",", "."))
console.clear()
imc = peso / ((altura / 100) * (altura / 100))
console.log("Ficha do aluno".italic.bold)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)

console.log(`IMC: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log("Baixo Peso".red)

} else if (imc > 18.5 && imc < 25) {
    console.log("Normal".green)
}
else if (imc <= 29.99 && imc >= 25) {
    console.log("sobrepeso".yellow)
} else {
    console.log("Obeso".red)
}
