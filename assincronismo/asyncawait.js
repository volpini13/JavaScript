/**
 * Assincronismo 
 * Async - Await
 * @author Arthur Garcia Volpini
 */

//biblioteca interna do JS para lidar com arquivos
const fs = require('fs') 

async function criarArquivo() {
    let conteudo = "Arthur Garcia Volpini\nExemplo de uso dos recursos async - await"
    await gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso.")
    } catch (error) {
        console.log(error)
    }
} 
console.clear()
criarArquivo()