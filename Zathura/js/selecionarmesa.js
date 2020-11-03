console.log("Estou aprendendo Javascript");

var mesas = [
    {
        nome : "Marte",
        imagem : "./icons/marte.PNG",
        descricao : "Sinta-se um habitante do planeta vermelho nessa mesa completamente customizada",
        localizacao: "terreo",
        capacidade: 3


    }
]

function adicionarMesa(nome,imagem, descricao, localizacao, capacidade ) {
    let mesas=document.getElementById("listaMesas");
    let cardMesas = document.createElement("div");
    cardMesas.className="backgroundCardMesa";
    mesas.appendChild(cardMesas);
    console.log({mesas});
    let articleMesas = document.createElement("article");
    let planetaNome = document.createElement("p");
    let planetaImagem = document.createElement("img");
    let planetaDescricao = document.createElement("p");
    let planetaLocalizacao = document.createElement("p");
    let planetaCapacidade = document.createElement("p");
    planetaNome.innerHTML = nome;
    planetaImagem.src = imagem;
    planetaDescricao.innerHTML = descricao;
    planetaLocalizacao.innerHTML = localizacao;
    planetaCapacidade.innerHTML = capacidade;
    articleMesas.appendChild(planetaNome);
    articleMesas.appendChild(planetaImagem);
    articleMesas.appendChild(planetaDescricao);
    articleMesas.appendChild(planetaLocalizacao);
    articleMesas.appendChild(planetaCapacidade);
    cardMesas.appendChild(articleMesas);


}

function carregarMesas () {
    mesas.forEach (mesa => adicionarMesa(mesa.nome, mesa.imagem, mesa.descricao, mesa.localizacao, mesa.capacidade));
}