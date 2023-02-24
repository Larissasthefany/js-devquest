const inputText = document.querySelectorAll(".input-text");

inputText.forEach(input => {	

    input.addEventListener('change', () => {
				
        if (input.value !== "") {
						
            input.classList.add("campo-preenchido")
        } else {
						
            input.classList.remove("campo-preenchido")
            
        }
    });
});