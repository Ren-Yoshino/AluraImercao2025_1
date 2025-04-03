function jogar(){
    //Criar uma lista com os 3 jogadores.
    personagem = ["", "", ""];

    viloes = ["", "", ""];

    forcaPersonagem = 0;
    forcaViloes = 0;

    for(let i = 0; i < 3; i++){
        personagem[i] = prompt("Informe o "+ (i+1) +"º personagem: ");
        //Calcular a forca de cada jogador, e depois somar pra saber a forca do time.
        forcaPersonagem += Math.floor(Math.random() * 10) + 1; 
        //Calcular a forca de cada jogador do time do computador.
        forcaViloes += Math.floor(Math.random() * 10) + 1; 
    }

    viloes = sorteiaViloes();
    compararForca(forcaPersonagem, forcaViloes);
}



function sorteiaViloes(){
    let viloes = ["", "", ""];
    for(let i = 0; i < 3; i++){
        indiceAleatorio = Math.floor(Math.random() * 5);
        viloesPossiveis = ["Nazare Tedesco", "Odete Roitmann", "Flora", "Carminha", "Laura Prudente da Costa"];
        viloes[i] = viloesPossiveis[indiceAleatorio];
    }
    return viloes;
}

function compararForca(forcaPersonagem, forcaViloes){
    //Comparar os dois times e ver quem venceu.
    if(forcaPersonagem > forcaViloes){
        alert("Seu time eh muito forte. Voce ganhou a disputa! A sua forca foi: "+forcaPersonagem);
    }
    else{
        if(forcaViloes > forcaPersonagem){
            alert("Os viloes venceu. A forca dos viloes foi: "+forcaViloes+". A sua forca foi: "+forcaPersonagem);
        }
        else{
            alert("Empate.");
        }
    }
}