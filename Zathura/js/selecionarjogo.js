console.log("Estou aprendendo Javascript");
window.onload = function (){
    var jogos = [
    {
        nome : "Uno",
        


    },

    {
        nome : "Damas",
        


    },

    {
        nome : "Xadrez",
        

    },
    
    {
        nome : "Uno",
        


    },

    {
        nome : "Damas",
        


    }
    
]
    adicionarJogos(jogos);
}



function adicionarJogos(jogos) {
    console.log("passei por aqui");
    let jogoDiv=document.getElementById("selecionarjogo");
    for (var i = 0; i < jogos.length; i++) {
    let jogoLista = document.createElement("li");
    jogoLista.className="itemJogo";
    jogoDiv.appendChild(jogoLista);
    jogoLista.innerHTML="<input type='checkbox'>"+jogos[i].nome;    
    //jogoLista.appendChild(jogoDiv);
    }

}

function carregarJogos () {
    jogos.forEach (jogo => adicionarJogos(mesa.nome));
}