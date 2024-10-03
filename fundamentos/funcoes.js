/**
 * Estudo das funções em Js
 * Funções simplesx
 * @author Arthur Garcia Volpini
 */

console.clear()
//Função Simples são literais
function hello() {
    console.log("Hello Function")
}

//para executar uma função basta escrever o nome dela seguido de parênteses 
hello()
console.log(typeof(hello))

//função atribuída (função anônima)
const hello2 = function () {
    console.log("Hello function atribuída")
}
//console.log(typeof (hello2))
hello2()

//função atribuída simplificada (arrow function)
const hello3 = () => {  //"=>" substitui o "function"
    console.log("Hello arrow function")
}
hello3()

//função atribuída simplificada (arrow function) 1 linha de código
const hello4 = _ => console.log("Hello arrow function one line") // "_" substitui os "() e {}"

hello4()