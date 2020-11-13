console.log("Estou aprendendo Javascript");
window.onload = function (){
    var mesas = [
    {
        nome : "Marte",
        imagem : "./icons/marte.PNG",
        descricao : "Sinta-se um habitante do planeta vermelho nessa mesa completamente customizada",
        localizacao: "Térreo",
        capacidade: 3,
        id : 0


    },
    
]
    adicionarMesas(mesas);
}



function adicionarMesas(mesas) {
    let mesasDiv=document.getElementById("listaMesas");
    for (var i = 0; i < mesas.length; i++) {
    let cardMesas = document.createElement("div");
    cardMesas.className="backgroundCardMesa";
    console.log(mesas[i]);
    cardMesas.onclick = selecionarMesa(mesas[i].id);
    mesasDiv.appendChild(cardMesas);
    console.log({mesasDiv});
    let articleMesas = document.createElement("article");
    articleMesas.className="conteudoCardMesas";
    let planetaNome = document.createElement("p");
    let planetaImagem = document.createElement("img");
    planetaImagem.className="imagemMesa";
    let planetaDescricao = document.createElement("p");
    let planetaLocalizacao = document.createElement("p");
    let planetaCapacidade = document.createElement("p");
    planetaNome.innerHTML ="<span class='tituloMesas'>"+mesas[i].nome+"</span>";
    planetaImagem.src = mesas[i].imagem;
    planetaDescricao.innerHTML = mesas[i].descricao;
    planetaLocalizacao.innerHTML = "<span class='classeDoSpan'>Localização: </span>"+mesas[i].localizacao;
    planetaCapacidade.innerHTML = "<span class='classeDoSpan'>Capacidade: </span>"+mesas[i].capacidade;
    articleMesas.appendChild(planetaNome);
    articleMesas.appendChild(planetaImagem);
    articleMesas.appendChild(planetaDescricao);
    articleMesas.appendChild(planetaLocalizacao);
    articleMesas.appendChild(planetaCapacidade);
    cardMesas.appendChild(articleMesas);
    }

}

function carregarMesas () {
    mesas.forEach (mesa => adicionarMesa(mesa.nome, mesa.imagem, mesa.descricao, mesa.localizacao, mesa.capacidade));
}

function selecionarMesa (id) {

    console.log(id);
    


}