/** 
 * POO Fundamentos da programação orientada a objetos
 * @author Arthur Garcia Volpini
*/

//Classe modelo (abstração)
console.clear()
class Bloco {
    //atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia //this  esta falando que é uma variável
        this.textura = textura
    }
    //métodos
    criarBloco() {
        console.log("------------------------------------")
        console.log("┍━┑")
        console.log("┕━┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    construir() {
        console.log(`Bloco de ${this.textura} colocado.`)
    }
    minerar() {
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}
//Classe modelo com herança(extends)
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura) // super é da classe superior
        this.conquista = conquista
    }
    //métodos
    criarEnxada() {
        console.log("------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    arar() {
        console.log("._._._. Terra arada!")
        if (this.conquista === true) {
            console.log("*** Conquista Obtida! ***")
        }
    }
    //polimorfismo (sobrescrita de um método existente)
    minerar() {
        console.log("XxX Dano atribuído!")
    }
}
// Criação do Mundo
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | | ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")
console.log("")
//Criando um objeto (Bloco de terra)
const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()
//Criando um bloco de madeira   
const bloco2 = new Bloco(2, "Madeira")
bloco2.criarBloco()
bloco2.construir()
//Criando bloco de pedra
const bloco3 = new Bloco(5, "Pedra")
bloco3.criarBloco()
bloco3.minerar()
//Criando uma enxada de madeira
const enxada1 = new Enxada(10, "Madeira", false)
enxada1.criarEnxada()
enxada1.arar()
//Criando enxada de ferro
const enxada2 = new Enxada(20, "Ferro", true)
enxada2.criarEnxada()
enxada2.arar()
//Criando uma enxada de diamante (polimorfismo)
const enxada3 = new Enxada(40, "Diamante", false)
enxada3.criarEnxada()
enxada3.minerar()