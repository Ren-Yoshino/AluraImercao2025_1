function jogar(){
    idade = prompt("Informe a sua idade:"); //Exibindo e recebendo a idade da pessoa;

    if(verificaIdade(idade)){ //Verificando a idade da pessoa;
        mao = prompt("Informe o numero ou a palavra: 1 - Pedra; 2 - Papel; 3 - Tesoura");//Exibindo e recebendo a opcap da pessoa;
        maoPC = jogadaPC();//Funcao para receber a opcao do Computador;

        if(!isNumber(mao)){ //verificando se eh um numero ou nao
            mao = transformStringCaps(mao); //Funcao para recever o texto em maiusculo.
            mao = converteOpcaoParaNumero(mao); //Funcao para converter o texto em numero.
        }
        else{
            mao = Number(mao);//Convertendo para numero
        }

        if(mao == maoPC){ //Verificando se deu empate
            alert("Empate!");
        }
        else{
            resultado(mao, maoPC);  // Funcao para chamar o resultado
        }
    }

}

function verificaIdade(age){ // Funcao para verificar a idade, alertar o usuario e retornar verdadeiro e falso.
    if(isNumber(age)){
        if(age >= 18 && age <= 125){ // if para verificar a idade; 
            return true; // retorna verdadeiro
        }
        alert("Menor de idade. Volte quando tiver 18 anos ou mais! Porem nao pode utrapassar mais de 125 anos");
    }
    else{
        alert("Para continuar precisa informa uma idade valida!");
    }
    return false;// Em caso de nao ser uma idade valida ou menor de idade retorna falso; 
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

function jogadaPC(){ //Funcao para sortear a opcao do Computador.
    return Math.floor(Math.random() * 3) + 1;
}

function transformStringCaps(value){ // Funcao para transformar o texto em maiusculo.
    return value.toUpperCase(); //toUpperCase() retorna o texto em maiusculo.
}

function converteOpcaoParaNumero(op){ // Funcao para converter a opcao do texto para numero.
    switch(op){
        case "PEDRA": 
            op = 1;
            break;
        case "Papel":
            op = 2;
            break;
        case "Tesoura":
            op = 3;
            break;
        default:
            op = 0;
            break;
    }
    return op;
}

function resultado(valueJogador, valuePC){ //Funcao para verificar se o Jogador ou Computador que ganhou.
    switch(valueJogador){
        case 1: //Opcao 1 -> Pedra
            if(valuePC == 2){
                alert("Voce perdeu... PC jogou Papel!");
            }
            else{
                alert("Voce ganhou! PC jogou Tesoura!");
            }
            break;

        case 2://Opcao 2 -> Papel
            if(valuePC == 3){
                alert("Voce perdeu... PC jogou Tesoura!");
            }
            else{
                alert("Voce ganhou! PC jogou Pedra!");
            }
            break;

        case 3://Opcao 3 -> Tesoura
            if(valuePC == 1){
                alert("Voce perdeu... PC jogou Pedra!");
            }
            else{
                alert("Voce ganhou! PC jogou Papel!");
            }
            break;
        
        default:
            alert("Opcao invalida!");
    }

}