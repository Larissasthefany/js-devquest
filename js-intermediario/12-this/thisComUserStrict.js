'Use strict'

// console.log(this)
// console.log(window === this)

// this.name = 'Larissa'

// function saudar(){
//     console.log(`This no contexto de função ${this}`)
//     console.log(`Olá ${this.name}`)
// }
// saudar()

// let usuario = {
//     nome: 'Larissa',
//     saudar: function (){
//         console.log(`This no contexto do metodo ${this}`)
//         console.log(`This.nome contexto do metodo ${this.nome}`)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Lasanha',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log(`This no contexto do objeto comida ${this}`)
    this.temperatura = temperaturaDeCozimento
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)