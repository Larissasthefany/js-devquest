const btn = document.getElementById('trocarDeCor')

const quadradoAzul = document.querySelector(".azul")

btn.addEventListener("click", trocarDeCor)

function trocarDeCor(){
    quadradoAzul.classList.remove("azul")
    quadradoAzul.classList.add("amarelo")
}


