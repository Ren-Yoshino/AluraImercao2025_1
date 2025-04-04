document.addEventListener("DOMContentLoaded", function() {
    // PARTE 1: Lista de perguntas e respostas
    var perguntas = [
        {
            pergunta: "Qual é o principal pokemon do Ash?", 
            respostas: [
                {opcao: "Pikachu", correto: true}, 
                {opcao: "Bubassauro", correto: false}, 
                {opcao: "Charmander", correto: false}
                ]
        },
        {
            pergunta: "Qual é o nome do primeiro jogo da série The Legend of Zelda lançado para o console Nintendo Entertainment System (NES)?",
            respostas: [
              { opcao: "The Legend of Zelda: Ocarina of Time", correto: false },
              { opcao: "The Legend of Zelda: A Link to the Past", correto: false },
              { opcao: "The Legend of Zelda", correto: true }
            ]
        },
        {
            pergunta: "Em qual cidade brasileira está localizado o Cristo Redentor?",
            respostas: [
              { opcao: "São Paulo", correto: false },
              { opcao: "Rio de Janeiro", correto: true },
              { opcao: "Salvador", correto: false }
            ]
        },
        {
            pergunta: "Qual é o nome do Pokémon lendário que controla o tempo?",
            respostas: [
              { opcao: "Kyogre", correto: false },
              { opcao: "Groudon", correto: false },
              { opcao: "Dialga", correto: true }
            ]
        },
        {
            pergunta: "Qual é o tipo principal do Pokémon Pikachu?",
            respostas: [
              { opcao: "Elétrico", correto: true },
              { opcao: "Normal", correto: false },
              { opcao: "Fogo", correto: false }
            ]
        }
    ];

    // PARTE 2: Pegando os elementos do HTML
    const perguntaElemento = document.querySelector(".pergunta");
    const respostasElemento = document.querySelector(".respostas");
    const progressoElemento = document.querySelector(".progresso");
    const textoFinal = document.querySelector(".fim span");
    const conteudo = document.querySelector(".conteudo");
    const conteudoFinal = document.querySelector(".fim");

    // PARTE 3: Variáveis para controle do jogo
    let indiceAtual = 0; // Índice da pergunta atual
    let acertos = 0; // Contador de acertos
    carregarPergunta(perguntas, perguntaElemento, respostasElemento, progressoElemento, textoFinal, conteudo, conteudoFinal, indiceAtual, acertos);

    
// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta(){
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso  !!!! 
      const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
      perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
    
      respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
    
      // Percorre todas as respostas da pergunta atual
      for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function () {
          // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
          if (resposta.correto) {
            //acertos = acertos + 1;
            acertos++; // Incrementa o contador de acertos
          }
    
          // Avança para a próxima pergunta
          indiceAtual++;
    
          // Se ainda houver perguntas, carrega a próxima pergunta
          if (indiceAtual < perguntas.length) {
            carregarPergunta();
          } else {
            // Se não houver mais perguntas, finaliza o jogo
            finalizarJogo();
          }
        };
    
        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
      }
    }
    
    // PARTE 5: Função para mostrar a tela final
    function finalizarJogo(){
      textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
      conteudo.style.display = "none"; // Esconde as perguntas
      conteudoFinal.style.display = "flex"; // Mostra a tela final
    }
    
    // PARTE 6: Iniciando o jogo pela primeira vez
    carregarPergunta();
});

