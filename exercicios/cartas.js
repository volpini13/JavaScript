/**
 * Jogo de cartas
 *  Exemplo de uso de um array (vetor)
 * @author Arthur Garcia Volpini
 */

const input = require('readline-sync')
console.clear()
console.log("Sorteio de uma Carta")
input.question("Pressione a tecla [ENTER] para sortear uma carta!!")
//            0   1   2   3
let nipes = ["♥","♠","♦","♣"]
//            0    1   2   3   4   5   6   7   8   9    10  11  12
let faces = ["A", "2","3","4","5","6","7","8","9","10","J","Q","K"]

//Apoio a lógica
//Az de ouros
//console.log(`${faces[0]}${nipes[2]}`)
//Dama de Copas
//console.log(`${faces[11]}${nipes[0]}`)

//Lógica para sorteio de uma carta
let nipe = nipes[Math.floor(Math.random()*4)]
let face = faces[Math.floor(Math.random()*13)]
console.log(`${face}${nipe}`)