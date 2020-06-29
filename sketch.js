function setup() {
  createCanvas(800, 800);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2, height/2);
  cenas = {
    telaInicial,
    jogo
  };
  som.loop();
  frameRate(40);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  if (cenaAtual === 'telaInicial') {
    jogo.setup();
    cenas[cenaAtual].draw();
  }
  else{
    cenas[cenaAtual].draw();
  }
  
}