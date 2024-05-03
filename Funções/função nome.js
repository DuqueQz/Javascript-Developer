function Escrevernome(nome) {
     return "este é seu nome:", nome
}

function VerificarIdade(idade) {
    if (idade >= 18) {
        console.log(Escrevernome("Matheus"),'Você é maior de idade')
    } else
        console.log("Você é de menor")
}


VerificarIdade(20)