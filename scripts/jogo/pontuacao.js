class Pontuacao {

  constructor() {
    this.pontos =0;
  }
  
  exibe() {
    fill('#fff');
    textSize(25);
    textAlign(CENTER);
    text(`(Space) Jump     (P) Pause`, width/2,50);
    textSize(35);
    textAlign(RIGHT);
    text(`Score: ${parseInt(this.pontos)}`, width-50,50);
  }
  
  adicionarPonto() {
    this.pontos += 0.1;
  }
  
}