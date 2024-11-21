/**
 * Estrutura de dados
 * Array (vetor)
 * @author Arthur Garcia Volpini
 */
console.clear()

//              [0]            [1]           [2]         [3]
let times = ["Palmeiras", "Real Madrid", "Barcelona", "Milan"]
console.log(typeof (times))
console.log(times)
console.table(times)
console.log(times[0])
console.log(times[1])
console.log("")
//Array muçtidimensional (matriz)
let boletim = [[8, 7, 9, 3], [4, 5, 8, 6]] //Linhas de uma tabela
console.log(boletim)
console.table(boletim)
console.log(boletim[0][1]) //[Linha][Coluna]

//estrutura de dados >>>>>>>>>>>>>>>>>>>>
let alunosEM1 = ["Arthur", "Victor", "Caio", "Samuel", "João", "Emmanuel"]
//Exibindo o tamanho do vetor
console.log(alunosEM1.length)
//CRUD (Create Read Update Delete) - São as 4 operações básicas com dados

//CRUD Read
console.log(alunosEM1)
console.table(alunosEM1)

//CRUD Create (adicionando dados ao vetor)
alunosEM1.push("Beatriz")

//CRUD Update (alterando um registro do vetor)
alunosEM1[0] = "Volpini"
console.log(alunosEM1)
console.table(alunosEM1)

//CRUD Delete (excluindo um registro do vetor)
delete alunosEM1[1]
console.log(alunosEM1)
console.table(alunosEM1)

//Percorrendo um vetor >>>>>>>>>>>>>>>>>>>>>
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)
//laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
//forEach (Simplificação do laço for para percorrer um vetor)
notas.forEach((n) => {
    console.log(n)
})

//map() mapeamento dos dados de um vetor (percorrer e mapear)
//Exemplo 1: Adicionar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.table(notas)
console.table(notasAtualizadas)

//Exemplo 2: Conversão do sistema de pontos para letras
//NA (Não atendeu) nota < 5
//PA (Parcialmente atendido) nota entre 5 e 7
//A (Atendeu) nota > 7 
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return ("NA")
    } else if (nc > 7) {
        return ("A")
    } else {
        return ("PA")
    }
})
console.log(notas)
console.log(notasConvertidas)

//Iniciando(Criando) um vetor como um objeto
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

//estrutura de dados usando array e objetos
let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Ckark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]
console.log(alunosEM3)
console.table(alunosEM3)

//Filtros
//Exemplo 1: Ordenar A-Z
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)

//Exemplo 2: por idade
alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
})
console.table(alunosEM3)

//ATENÇÃO !!! 
//Na filtragem criar uma cópia para exibição (... Cópia de array)
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

//buscas personalizadas
//Exemplo1: alunos bolsistas
console.log(alunosEM3.filter((b) => {
    return b.bolsista === true
}))
//Exemplo 2: alunos com idade superior aos 40 anos
console.log(alunosEM3.filter((i) => {
    return i.idade > 40
}))