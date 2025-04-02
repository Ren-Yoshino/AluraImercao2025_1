function jogar(){
    rodada = 1;
    escolhaJogador = 0;
    flag = true;
    while(rodada <= 3){
        console.log("Rodada: " + rodada);

        escolhaJogador = prompt("Nivel "+rodada+", escolha vidro: 1, 2 ou 3 ?");
        pisoQuebrado = Math.floor(Math.random()*3) + 1;
        if(isNumber){
            if(escolhaJogador == pisoQuebrado){
                alert("Piso quebrou... Voce perdeu!");
                rodada = 5;
                flag = false;
            }
            else{
                if(escolhaJogador <= 0 || escolhaJogador >= 4){
                    alert("Proibido roubar!! Digite apenas valor 1, 2 ou 3!");
                    rodada--;
                }
                else{
                    alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado);
                }
            }
        }
        else{
            alert("Digite um numero!");
            rodada--;
        }

        rodada++;// rodada = rodada + 1;
    }

    if(flag){
        alert("Parabens voce chegou ate o final!!");
    }

}


function isNumber(value){ // Funcao para verificar se eh um numero ou nao;
    try{
        if(isNaN(value)){ //Verifica se eh um numero. Caso nao for ele retorna true(verdadeiro). Se for numero ele retorna false(falso)
            return false;
        }
        return true;
    }
    catch(error){
        console.log("Erro: ", error.message);
    }
}