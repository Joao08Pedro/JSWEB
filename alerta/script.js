// alert("Bom dia"); // De um alerta na tela

function mostrarAlerta() {
    const nome = document.getElementById("nome").value //o document pega o que eu escrevi no html; o getElementById significa pegar o elemento pelo id, abrindo o parenteses você bota o id que esta no html, o .value singnifica pegar o valor/resposta do usuario;
    alert(`Olá ${nome}`);
};
