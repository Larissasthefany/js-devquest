let usuario = {
    nome: 'Larissa',
    excluir: function(){
        console.log(`O usuário, ${this.nome} foi Excluido`)
    }
}

usuario.excluir()