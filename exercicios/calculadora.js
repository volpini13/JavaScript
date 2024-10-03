/**
 * calculadora usando função
 * Funções simples
 * @author Arthur Garcia Volpini
 */

const input = require("readline-sync")
console.clear
let num1, num2, final
console.clear()
console.log("Calculadora")
num1 = Number(input.question("Digite o numero 1: "))
num2 = Number(input.question("Digite o numero 2: "))
console.log("")
console.log("1: somar")
console.log("2: subtrair")
console.log("3: multipicar")
console.log("4: dividir")
console.log("5: calcular a porcentagem")
final = Number(input.question("Escolha uma das opcoes: "))

let somar = (num1, num2) => {
    return (console.log(` ${num1} + ${num2} = ${num1 + num2}`))
}
let subtrair = (num1, num2) => {
    return console.log((` ${num1} - ${num2} = ${num1 - num2}`))
}
let multiplicar = (num1, num2) => {
    return (console.log(` ${num1} X ${num2} = ${num1 * num2}`))
}
let dividir = (num1, num2) => {
    return (console.log(` ${num1} / ${num2} = ${num1 / num2}`))
}
let porcentagem = (num1, num2) => {
    return (console.log(` ${num1} % ${num2} = ${(num1 * num2) / 100} %`))
}
switch (final) {
    case 1:
        somar(num1, num2)
        break
}
switch (final) {
    case 2:
        subtrair(num1, num2)
        break
}
switch (final) {
    case 3:
        multiplicar(num1, num2)
        break
}
switch (final) {
    case 4:
        dividir(num1, num2)
        break
}
switch (final) {
    case 5:
        porcentagem(num1, num2)
        break
}