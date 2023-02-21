const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
    const mesAtual = 2
    let anoDeNascimento = 2023 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log(`Seu ano de nascimento é: ${anoDeNascimento}`)
}

calcularAnoDeNascimento(23, 5, imprimirAnoDeNascimento)

//Multiplicar

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadriplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadriplicar(3))