function alteraCorDeFundoPrimeiorPost(){
    let posts = document.getElementsByClassName('post')
    console.log('posts')

    let primeiorPost = posts[0]
    console.log('primeiroPost', primeiorPost)
    primeiorPost.style.backgroundColor = 'rgb(31, 31, 201)'
}

function aumentarFonteSegundoPost(){
    let textPost = document.getElementsByClassName('text-post')
    textPost[1].classList.add('fonte-grande')
    console.log(textPost[1].classList)
}


function marcarRadio(genero){
    // console.log(genero)
    let radioMasculino = document.getElementById('genero-masculino')

    let radioFeminino = document.getElementById('genero-feminino')

    if(genero === 'M'){
        radioMasculino.checked = true;
    }else if(genero === 'F'){
        radioFeminino.checked = true;
    }
}