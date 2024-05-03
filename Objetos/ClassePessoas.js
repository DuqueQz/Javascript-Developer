class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    CalcularImc() {
        return ((this.peso / (this.altura * this.altura)))
    }

    ClassificarImc() {
       let imc = this.CalcularImc()
       if (imc <= 18.5) {
        return ("Abaixo do peso Ideal")
       } else if (imc > 18.5 && imc <= 24.9) {
        return ('Peso normal')
       } else if (imc >= 25 && imc <= 29.9) {
        return ('Sobrepeso')
       } else if (imc >= 30 && emc <= 34.9) {
        return ('Obesidade Grau I')
       } else if ( imc >= 35 && imc <= 39.9) {
        return ('Obesidade Grau II')
       } else {
        return ('Obesidade Grau III')
       }        
    }
}

const Jose = new Pessoa('José', 70, 1.75)
console.log(Jose.CalcularImc())
console.log(Jose.ClassificarImc())