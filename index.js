class Car {
    constructor(modelo, marca, ano, cor) {
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.cor = cor
    }

    getCarAttributes() {
        console.log(`O carro é ${this.modelo} da marca ${this.marca} do ano de ${this.ano} e a cor dele é ${this.cor}`)
    }

    speed() {
        console.log(`Car ${this.modelo} getting speed`)
    }


}

const carroX = new Car("Saveiro", "Volkswagen", "2013", "Prata");

carroX.getCarAttributes();

carroX.speed();