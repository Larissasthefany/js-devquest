const quadrado = document.querySelector('.quadrado')
quadrado.addEventListener("click", () => {
    const classAzulExiste = quadrado.classList.contains('azul')

    if(classAzulExiste){
        quadrado.classList.remove('black')
    }else{
        quadrado.classList.add("azul")
        alert("Esse quadrado TEM a classe azul!")
    }
})
