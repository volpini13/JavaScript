/**
 * Estrutura de dados
 * Objetos
 * @author Arthur Garcia Volpini
 */
console.clear()

const funcionario1 = {}
console.log(typeof (funcionario1))
//adicionar dados a estrutura (CRUD Create)
funcionario1.nome = "Arthur"
funcionario1.cargo = "Estudante"
funcionario1.email = "arthur@gmail.com"
funcionario1.salario = 4000
funcionario1.insta = "_volpini__"
//listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estrutura (CRUD Update)
funcionario1.nome = "Arthur Garcia Volpini"
console.log(funcionario1)
//excluir os dados da estrutura (CRUD Delete)
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman123@gmail.com",
    salario: 6.4206184168
}
console.log(funcionario2)

const endereco1 = {
    logradoura: "Bat Caverna",
    cidade:"Ghotan City",
    estado:"New Jersey"
}
console.log(endereco1)

const funcionario3 = {
    nome:"Alfred Pennywort",
    cargo:"Mordomo",
    email:"Alfred@gmail.com",
    salario: 20000,
    ...endereco1 //...spread operador (união de duas estruturas)
}
console.log(funcionario3)

const funcionario4 = {
    nome:"Dick Grayson",
    cargo:"heroi",
    email:"robin@gmail.com",
    salario: 200000,
    ...endereco1
    
}
console.log(funcionario4)

const funcionario5 = {
    nome:"Tony Stark",
    cargo:"Ferro",
    email:"antonynho@gmail.com",
    salario: 70000000000000,
    armadura:{
        versao: "MK2",
        ano:"2010",
        reator:"arc 01"
    },
    switUp: () => {
        console.log("🤖")
    }
}
console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)

