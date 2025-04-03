function valida(){
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");
    const comprimento = document.getElementById("tamanho");
    comprimento.innerHTML = senha.length;
}