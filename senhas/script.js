function valida() {
    // Obtém o valor da senha digitada no campo de entrada com id "senha"
    const senha = document.getElementById("senha").value;
    
    // Obtém o elemento HTML onde será exibida a mensagem sobre a senha
    const mensagem = document.getElementById("mensagem");
    
    // Obtém o elemento HTML onde será exibido o comprimento da senha
    const comprimento = document.getElementById("tamanho");
    
    // Exibe o comprimento atual da senha no elemento de id "tamanho"
    comprimento.innerHTML = senha.length;
    
    // Verifica se a senha tem menos de 10 caracteres
    if (senha.length < 10) {
        // Exibe a mensagem "Senha Curta" em vermelho
        mensagem.innerHTML = "Senha Curta";
        mensagem.style.color = ("red");
    }
    else {
        // Exibe a mensagem "Senha Média" em amarelo (cor #FFDA03)
        mensagem.innerHTML = "Senha Média";
        mensagem.style.color = ("#FFDA03");
    }
    
    // Verifica se a senha tem mais de 14 caracteres
    if (senha.length > 14) {
        // Exibe a mensagem "Senha Forte" em verde
        mensagem.innerHTML = "Senha Forte";
        mensagem.style.color = ("green");
    }
}

function alerta() {
    // Obtém o valor da senha digitada no campo de entrada com id "senha"
    const senha = document.getElementById("senha").value;

    // Verifica se a senha tem menos de 10 caracteres
    if (senha.length < 10) {
        // Exibe um alerta informando que a senha precisa ter pelo menos 10 caracteres
        alert(`Sua senha deve ter pelo menos 10 caracteres`);
    }
    else {
        // Exibe um alerta informando que o formulário foi enviado
        alert("Formulário Enviado");
        
        // Submete o formulário com o nome "formulario"
        document.forms["formulario"].submit();
    }
}

//  A VARIAVEL QUE VOCÊ CRIOU EM UMA FUNÇÃO SÓ EXISTE NA FUNÇÃO QUE VOCÊ CRIOU ELA!!!