/**
 * Calculo da média de 2 notas 
 * 
 * @author Arthur Garcia Volpini
 */

//importar po pacote readline-sync 
const input = require('readline-sync')
const colors = require(`colors`) //pacote de cor


//Variáveis
let nota1, nota2, media

console.clear()
console.log("calculo da media")
// captura da nota pelo pacote readline-sync
//entrada
nota1 = Number(input.question("Digite a nota 1: "))
nota2 = Number(input.question("Digite a nota 2: "))
//Processamneto
media = (nota1 + nota2) / 2
//saida 
console.log(`Média: ${media.toFixed(2)}`)
//exemplo da estrututa if - else if
if (media < 2){
    console.log("Reprovado".red)
} else if (media >= 2 && media < 5 ) {
console.log("RECUPERAÇÃO".yellow)
} else {
    console.log("Aprovado".green)
}