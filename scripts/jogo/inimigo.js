class Inimigo extends Animacao {

  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.velocidade = velocidade;
    this.ativo = true;
    this.contador = 0;
    this.x = width-this.largura;
  }

  move() {
    this.x = this.x - this.velocidade;
  }

  aparece() {
    this.x = width;
    this.contador++;
    if (this.contador >= 3) {
      this.ativo = false;
    }
  }

}