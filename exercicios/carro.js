/** 
 * POO Fundamentos da programação orientada a objetos
 * Exercício de POO
 * @author Arthur Garcia Volpini
*/

//Classe modelo (abstração)
const colors = require(`colors`)
console.clear()
class Carro {
    //atributos
    constructor(ano, cor, modelo) {
        this.ano = ano//this  esta falando que é uma variável
        this.cor = cor
        this.modelo = modelo
    }
    criarCarro() {
        console.log("___________________________________")
        console.log(`O carro é da cor: ${this.cor}`.bold)
        console.log(`o ano do carro é: ${this.ano}`.bold)
        console.log(`O modelo é um: ${this.modelo}`)
    }
    ligarCarro() {
        console.log("O carro está ligado".grey)
    }
    desligarCarro() {
        console.log("O carro está desligado!!".red)
    }
    acelerar() {
        console.log("O carro está acelerando: Vrummmm!!".cyan)
    }
}
console.clear()
class Aviao extends Carro {
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura
    }
    criarAviao() {
        console.log("___________________________________")
        console.log(`o avião é da cor: ${this.cor}`.bold)
        console.log(`o Avião é do ano de: ${this.ano}`.bold)
        console.log(`o Avião tem envergadura de: ${this.envergadura} Metros`)
    }
    pousarAviao() {
        console.log("o Avião está pousando!!".blue)
    }
    decolarAviao() {
        console.log("o Avião está decolando!!".yellow)
    }
    acelerar() {
        console.log("O Avião está acelerando: Inhauuummmm".magenta)
    }
}
console.clear()

console.log(" _______  _______  ______    ______    _______    _______    _______  __   __  ___   _______  _______ ".bold)
console.log("|       ||   _   ||    _ |  |    _ |  |       |  |       |  |   _   ||  | |  ||   | |   _   ||       |".bold)
console.log("|       ||  |_|  ||   | ||  |   | ||  |   _   |  |    ___|  |  |_|  ||  |_|  ||   | |  |_|  ||   _   |".bold)
console.log("|       ||       ||   |_||_ |   |_||_ |  | |  |  |   |___   |       ||       ||   | |       ||  | |  |".bold)
console.log("|      _||       ||    __  ||    __  ||  |_|  |  |    ___|  |       ||       ||   | |       ||  |_|  |".bold)
console.log("|     |_ |   _   ||   |  | ||   |  | ||       |  |   |___   |   _   | |     | |   | |   _   ||       |".bold)
console.log("|_______||__| |__||___|  |_||___|  |_||_______|  |_______|  |__| |__|  |___|  |___| |__| |__||_______|".bold)
console.log("")

const carro1 = new Carro(2020, "Verde", "Fusca".green)
carro1.criarCarro()
carro1.desligarCarro()
carro1.ligarCarro()
carro1.acelerar()
//------------------------------------------------
const carro2 = new Carro(1999, "cinza", "Corsa".gray)
carro2.criarCarro()
carro2.desligarCarro()
carro2.ligarCarro()
carro2.acelerar()
//------------------------------------------------
const aviao1 = new Aviao(2015, "Branco", 12)
aviao1.criarAviao()
aviao1.acelerar()
aviao1.decolarAviao()
aviao1.pousarAviao()