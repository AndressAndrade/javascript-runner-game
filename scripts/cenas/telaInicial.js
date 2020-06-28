class TelaInicial {

  constructor() {
  }
  
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial,0, 0, width, height);
  }
  
  _texto() {
    
    fill('black');
    textAlign(CENTER);
    textFont(fonteTelaInicial);
    textSize(width/10);
    text('As aventuras de', width/2,height*0.2);
    // stroke('#fff');
    // strokeWeight(0.4);
    // rect(width/4, height*0.4,  width/2, 10);
    textSize(width/6);
    text('Hipsta', width/2,height*0.5);
    
  }
  
  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
  
}