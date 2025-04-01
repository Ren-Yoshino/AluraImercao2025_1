function conversor(){
    valor = prompt("Digite um valor em Wons"); // Exibindo e recebendo o valor informado pelo usuario
    const dolar = 1474.21;
    const eulo = 1594.30;
    const real = 258.41;

    if(isNumber(valor)){
        valor = Number(valor);

        valorConvertido = valor * dolar;
        alert("USD: "+ MoneyFormat(valorConvertido, "USD"));

        valorConvertido = valor * eulo;
        alert("EUR: "+ MoneyFormat(valorConvertido, "EUR"));    

        valorConvertido = valor * real;
        alert("BRL: "+ MoneyFormat(valorConvertido, "BRL"));    
    }
    else{
        alert("Digite um valor!");
    }
}

function isNumber(value){   // Funcao para verficar se eh um numero ou nao.
    try{
        if(isNaN(value)){	// Verificando se eh um numero ou nao. Caso nao seja retorna true(verdadeiro). Caso contrario retorna false(falso).
            return false;	// Retorna falso quando nao for um valor numerico.
        }
        return true;        // Retorna verdadeiro quando for valor numerico.
    }
    catch(error){
        console.log("Erro: ", error.message);
    }
}

function MoneyFormat(value, moneyF){ //Funcao para colocar formatacao monetaria.
    return value.toLocaleString('en-IN', {style: 'currency', currency: moneyF, minimumFractionDigits: 2});
}