
    
    let playerScore = 0;
    let botScore = 0;

    function play(jogador) {
      const opcoes = ['pedra', 'papel', 'tesoura'];
      const computador = opcoes[Math.floor(Math.random() * 3)];

      let resultado = '';

      if (jogador === computador) {
        resultado = 'Empate! 😐';
      } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
      ) {
        resultado = 'Você venceu! 🎉';
        playerScore++;
      } else {
        resultado = 'Você perdeu! 😢';
        botScore++;
      }

      document.getElementById('resultado').textContent = resultado;
      document.getElementById('versusInfo').textContent = `Você escolheu ${jogador} | Bot escolheu ${computador}`;
      document.getElementById('playerScore').textContent = playerScore;
      document.getElementById('botScore').textContent = botScore;
    }

    const imageStates = {
      pedra: ['img/pedraSorrindo.png', 'img/pedraAssustada.png' , 'img/pedraZangada.png'],
      papel: ['img/papelSorrindo.png', 'img/papelAssustado.png' , 'img/papelZangado.png'],
      tesoura: ['img/tesouraSorrindo.png', 'img/tesouraAssustada.png' , 'img/tesouraZangada.png']
    };

    const currentIndex = {
      pedra: 0,
      papel: 0,
      tesoura: 0
    };

    function toggleImage(element, type) {
      currentIndex[type] = (currentIndex[type] + 1) % imageStates[type].length;
      const newSrc = imageStates[type][currentIndex[type]];
      element.querySelector('img').src = newSrc;
    }