/**
 * Assincronismo - Promises
 * Fetch
 * @author Arthur Garcia Volpini
 */

const input = require('readline-sync')

console.clear()
console.log("VIA CEP")
let cep = input.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
//teste da captura do CEP
//console.log(urlAPI)
//uso de promise (fetch)
fetch(urlAPI)
    .then((response) => {
        return response.json()
    })
    .then((dados) => {
        console.log(dados.logradouro)     //com base no nome da classe que está no site
        console.log(dados.bairro)        //com base no nome da classe que está no site
        console.log(dados.localidade)   //com base no nome da classe que está no site
        console.log(dados.uf)          //com base no nome da classe que está no site
    })
    .catch((error) => {
        console.error()
    })