/**
 * Estudo das Variáveis - tipagem dinâmica
 * @author Arthur Garcia Volpini
 */

console.clear()
console.log("strings______________")
let nome = "Volpini"
console.log(typeof(nome))
console.log(nome)
//concatenação (unir um texto com o conteúdo de uma variável)
console.log("Arthur " + nome) //evitar concatenar dessa forma
console.log(`Professor ${nome}`) //jeito certo de concatenar
console.log("numeros________________")
let peso = 63
let altura = 1.80
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(imc)
console.log(`IMC: ${imc.toFixed(2)}`) //toFixed(2) arredondar 2 casas decimais
//Atenção !!!
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3X" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos______________________")
let chave = true
console.log(typeof (chave))
let lampada = false
console.log(typeof(lampada))
console.log(`chave: ${chave} Lâmpada: ${lampada}`)


