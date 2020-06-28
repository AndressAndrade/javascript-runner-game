function preload() {
  
  imagemCenario1 = loadImage('imagens/cenario/ceu.png');
  imagemCenario2 = loadImage('imagens/cenario/decoracao.png');
  imagemCenario3 = loadImage('imagens/cenario/luz.png');
  imagemCenario4 = loadImage('imagens/cenario/fundo.png');
  imagemCenario5 = loadImage('imagens/cenario/chao.png');
  
  imagemCenario6 = loadImage('imagens/cenario/cenario2/ceu.png');
  imagemCenario7 = loadImage('imagens/cenario/cenario2/luz.png');
  imagemCenario8 = loadImage('imagens/cenario/cenario2/fundo.png');
  imagemCenario9 = loadImage('imagens/cenario/cenario2/decoracao.png');
  imagemCenario10 = loadImage('imagens/cenario/cenario2/chao.png');
  
  
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemPause = loadImage('imagens/assets/header.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  som = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/mariopulo.mp3');
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  fita = loadJSON('fita/fita.json');
  
}