let cliente = {
    nome: 'Larissa',
    ultimoPedido: {
        produto: 'Playstation 2',
        valor: 700,
        jogos: [
            {nome: 'Resident Evil 4'} 
        ]
    }
}

let videoGame = {
    produto: 'Playstation 2',
    valor: 700,
    jogos: [
        'Resident Evil 4', 'Donwhill Domination', 'Mortral Konbat'
    ]
}

let jogo1 = {
    nome: 'Resident Evil 6'
}

videoGame.jogos.push(jogo1)

console.table()