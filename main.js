var inicio = alert(
        'Olá! Bem-vindo ao jogo: Salve o cr7. Seu objetivo será responder as perguntas feitas pelo governador fanático que não permite que o cr7 jogue por outro clube, organizando então, um sequestro do mesmo para que ele nunca saia da cidade. Responde corretamente e cr7 será salvo.'
      )
      var pontos = 0
      var nDePerguntas = 4

      var nome = prompt('Para começar, digite o seu nome: ')
      alert(
        'Olá ' +
          nome +
          '. ' +
          'Vamos começar sem muita enrolação, porque o cr7 não pode esperar.'
      )
      var crIdade = prompt('Qual a idade de cr7? ')
      if (crIdade == 36) {
        alert('Acertô!')
        pontos += 1
        alert('Sua pontuação até aqui ' + pontos)
      } else {
        alert('Erroooooou')
      }
      alert('Vamos para a próxima.')
      var cidadeNasc = prompt('Em que cidade cr7 nasceu?')
      if (cidadeNasc == 'Ilha da madeira') {
        alert('SÍIIIIIIIIIIIIIIIIIII')
        pontos += 1
        alert('Sua pontuação até aqui ' + pontos)
      } else {
        alert('Erroooooou. O governador nunca irá soltar o cr7 desse jeito...')
      }
      var peso = parseInt(prompt('Quantos kg pesa cr7?'))
      if (peso == 85) {
        alert(
          'Sim, certinho. Continue assim que o cr7 pode conseguir uma transferência de clube'
        )
        pontos += 1
        alert('Sua pontuação até aqui ' + pontos)
      } else {
        alert(
          'Cara, o que você está pensando? Estou achando que você é um impostor e não deseja que o cr7 consiga escapar! Será que você está ajudando o governador?'
        )
      }
      var altura = parseInt(
        prompt('Qual a altura de cr7? (não use VÍRGULA PARA RESPONDER) ')
      )
      if (altura == 187) {
        alert('Sim!!!!!!!!!!!')
        pontos += 1
        alert('Sua pontuação foi: ' + pontos)
      } else {
        alert(
          'Errou mais uma. Você com toda certeza é amigo do governador. Seu impostor!!!'
        )
      }
      alert(
        'Você precisa acertar metade das perguntas ou mais. Você acertou: ' +
          pontos +
          '.'
      )
      if (pontos >= 2) {
        alert('Parabéns! Cr7 está livre e pode negociar com um novo clube')
      } else {
        alert(
          'Um impostor que conseguiu cumprir a missão: cr7 continuará preso sendo forçado a atuar pelo clube do governador'
        )
      }
