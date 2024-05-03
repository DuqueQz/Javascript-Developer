class Carro {
    Marca;
    Cor;
    GastoMedioCombustivel;

    constructor(Marca, Cor, GastoMedioCombustivel) {
        this.Marca = Marca
        this.Cor = Cor
        this.GastoMedioCombustivel = GastoMedioCombustivel
    }

    CalcularGasto(Distancia, PrecoCombustivel,) {
        return ((Distancia * this.GastoMedioCombustivel) *PrecoCombustivel)
    }
}

const GolQuadrado = new Carro('Fiat', 'Preto', 1/10)
const Palio = new Carro('Audi', 'Verde', 4/12)
console.log(Palio.CalcularGasto(100, 5))




