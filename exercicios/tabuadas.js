/**
 * Tabuadas (exemplo de encadeamento do laço for)
 * @author Arthur Garcia Volpini
 */

console.clear()

for (let i = 1; i < 11; i++) {
    console.log("")
    console.log(`Tabuada do ${i}:`)
    for (let j = 1; j < 11; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
}