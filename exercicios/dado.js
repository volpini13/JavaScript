/**
 * jogo do dado
 * @author Arthur Garcia Volpini
 */

const input = require("readline-sync")
let face

console.clear()
console.log("Jogo do Dado")
//sorteio da face de um  dado
//Math classe matemática
//floor conversão pra numeros inteiros
//random () * (gerador de numeros aleatorios)
face = Math.floor(Math.random() * 6)
console.log(`Face do dado:  ${face}`)
switch (face) {
case 1:
        console.clear()
        console.log("⚀")
        break 
case 2:
        console.clear()
        console.log("⚁")
        break             
    
case 3:
        console.clear()
        console.log("⚂")
        break    
case 4:
        console.clear()
        console.log("⚃")
        break 
        
case 5:
        console.clear()
        console.log("⚄")
        break 

 case 1:
        console.clear()
        console.log("⚅")
        break 
    }