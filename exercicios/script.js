function esconderMostrar() {
    const imagem = document.getElementById("imagem")
    const botao = document.getElementById("botao")
    if (imagem.style.display === "none") {
        imagem.style.display = "block"
        imagem.style.transition
        botao.innerText = "Ocultar"
    }
    else {
        imagem.style.display = "none";
        botao.innerText = "Mostrar";
    }
}