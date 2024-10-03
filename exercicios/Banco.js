/**
 * Exercício de fixação de conceitos POO
 * Agência Bancária
 * @author Arthur Garcia Volpini
 */
const colors = require('colors')
//classe modelo
class Conta {
    //atributos ENCAPSULADOS
    constructor(numero, titular, saldo) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo

        //MÉTODOS   
    }
    getNumero() {
        return this._numero
    }
    getTitular() {
        return this._titular
    }
    getSaldo() {
        return this._saldo
    }
    exibirSaldo() {
        console.log(`O saldo da conta de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`)
    }
    depositar(valor) {
        this._saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed()}`.green)
    }
    sacar(valor) {
        if (valor > this._saldo) {
            console.log("Saldo Insuficiente")

        } else {
            this._saldo -= valor
            console.log(`Sacou R$ ${valor.toFixed(2)}`.red)
        }
    }
    pix(valor, destino) {
        if (valor > this._saldo) {
            console.log(`Pix de R$ ${valor.toFixed(2)} nap realizado. Saldo insuficiente`)
        } else {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`Pix de R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso`.red.bold)
        }
    }
}
class ContaPoupanca extends Conta {
    //atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    //metodo
    exibirSaldoPoupanca() {
        console.log(`O saldo da conta Poupanca de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`)
    }
}

console.clear()
console.log("██████   █████  ███    ██  ██████  ██████  ".green)
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ".green)
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ".cyan)
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ".blue)
console.log("██████  ██   ██ ██   ████  ██████  ██████  ".blue)
console.log("")

console.log("")
let cc1 = new Conta(1, "Robson Vaamonde", 3000)
console.log(`Cliente: ${cc1.getTitular()} | Conta: ${cc1.getNumero()}`.yellow)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(500)
cc1.exibirSaldo()

let cc2 = new Conta(2, "Leandro Ramos", 1000)
console.log(`Cliente: ${cc2.getTitular()} | Conta: ${cc2.getNumero()}`.yellow)
cc2.exibirSaldo()
cc2.depositar(700)
cc2.exibirSaldo()
cc2.sacar(400)
cc2.exibirSaldo()


console.log("")

let cc3 = new Conta(3, "Sirlene Sanches", 500)
console.log(`Cliente: ${cc3.getTitular()} | Conta: ${cc3.getNumero()}`.yellow)
cc3.exibirSaldo()
cc3.depositar(7000)
cc3.exibirSaldo()
cc3.sacar(70000)
cc3.exibirSaldo()
cc3.pix(1000, cc2)
cc3.exibirSaldo()
cc2.exibirSaldo()

console.log("")

let cc4 = new Conta(4, "Jose de Assis", 1000)
console.log(`Cliente: ${cc4.getTitular()} | Conta: ${cc4.getNumero()}`.yellow)
cc4.exibirSaldo()
cc4.depositar(1000)
cc4.exibirSaldo()
cc4.sacar(2000)
cc4.exibirSaldo()

console.log("________________________________________________")
let cp1 = new ContaPoupanca(10, "Robson Vaamonde", 1000)
console.log(`Cliente: ${cp1.getTitular()} | Conta: ${cp1.getNumero()}`.yellow.bold)
cp1.exibirSaldoPoupanca()

