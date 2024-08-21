//pegar o elemento HTML dos botões. Foram pegos criando variáveis que selecionam as classes.
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes"); 

//identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        console.log("botao");

        desativarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        escondeImagemAtiva();

        mostrarFiguraSelecionada(indice);

        escondeInformação();

        mostrarInformacaoSelecionada(indice);
    })
})

function mostrarInformacaoSelecionada(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarFiguraSelecionada(indice) {
    imagens[indice].classList.add("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function escondeInformação() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function escondeImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove("selecionado");
}


//funções foram refatoradas para facilitar a leitura.