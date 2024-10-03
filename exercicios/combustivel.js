/**
 * Desconto da loja
 * @author Arthur Garcia Volpini
 */

console.clear()
const input = require('readline-sync')

console.log("Cálculo de combustível")

let gasolina, kilometragem, preco, valor, media, final

preco = Number(input.question('Insira o valor da gasolina: '))
kilometragem = Number(input.question('Insira a distancia ate o local desejado: '))
gasolina = Number(input.question('Insira quantos KM seu carro faz por litro: '))

media = kilometragem / gasolina
final = media * preco
console.log(`Você Gastará R$ ${final.toFixed(2)}`)
