const quadrado = document.querySelector('.quadrado')
quadrado.addEventListener("click", () => {
    const classAzulExiste = quadrado.classList.contains('azul')  
    quadrado.innerHTML = "Hello world!"

    if(classAzulExiste){
        quadrado.classList.remove('black')
    }else{
        quadrado.classList.add("azul")
        alert("Esse quadrado TEM a classe azul!")
    }
})
