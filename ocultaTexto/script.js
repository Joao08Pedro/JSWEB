function mostrarOcultar() {
    const texto = document.getElementById("texto");
    const botao = document.getElementById("botao");
    // texto.style.display = "none";
    if (texto.style.display == "none") {
        texto.style.display = "block"
        botao.innerText = "Ocultar";
    }
    else {
        texto.style.display = "none";
        botao.innerText = "Mostrar";
    }
}