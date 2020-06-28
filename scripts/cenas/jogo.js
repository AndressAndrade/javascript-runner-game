function exibeFim() {
  image(imagemGameOver, width / 2 - width / 4, height / 2);
  fill('#fff');
  textSize(25);
  textAlign(CENTER);
  text(`Press ENTER to try again`, width /2, height - 250);
}

function exibePausa() {
  image(imagemPause, width / 2 - width / 4, height / 2, 300, 118);
}

class Jogo {

  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenario1, imagemCenario2, imagemCenario3, imagemCenario4, imagemCenario5, 3, 5);
    
    cenario2 = new Cenario(imagemCenario6, imagemCenario7, imagemCenario8, imagemCenario9, imagemCenario10, 3, 5);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270, 30);

    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 12);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width - 300, 0, 200, 200, 400, 400, 6);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, personagem.altura + 100, 100, 75, 200, 150, 15);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    

    som.loop();
  }

  keyPressed(key) {
    if (keyCode === 32) {
      personagem.pula();
      somPulo.play();
    }
    if (keyCode === 13) {
      cenaAtual = 'telaInicial';
      this.indice = 0;
      botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
      loop();
    }
    if (keyCode === 80) {
      pausa = !pausa;
      if (!pausa) {
        loop();
      }
    }
  }

  draw() {
    
    if (pontuacao.pontos < 100) {
      cenario.exibe();
      cenario.move();
    }
    else {
      cenario2.exibe();
      cenario2.move();
    }

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    
    const inimigo = inimigos[linhaAtual.inimigo];
    inimigo.velocidade = linhaAtual.velocidade;
    
    const inimigoVisivel = inimigo.x < -inimigo.largura;
     
    inimigo.exibe();
    inimigo.move();

    if (linhaAtual.inimigo === 2) {
      if (personagem.estaColidindo2(inimigo)) {
        vida.perdeVida();
        personagem.ficaInvencivel();
        if (vida.vidas <= 0) {
          noLoop();
          cenario.exibe();
          pontuacao.exibe();
          personagem.exibe();
          inimigo.exibe();
          exibeFim();
        }
      }
    } else {
      if (personagem.estaColidindo(inimigo)) {
        vida.perdeVida();
        personagem.ficaInvencivel();
        if (vida.vidas <= 0) {
          noLoop();
          cenario.exibe();
          pontuacao.exibe();
          personagem.exibe();
          inimigo.exibe();
          exibeFim();
        }
      }
    }

    if (inimigoVisivel) {
      this.indice++;
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
      inimigo.aparece();
    }

    if (pausa) {
      noLoop();
      exibePausa();
    }

  }

}