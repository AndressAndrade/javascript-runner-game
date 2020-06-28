class Personagem extends Animacao{
 
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, pulo) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.pulo = pulo;
    
    this.variacaoY = variacaoY;
    this.yInicial = height - altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 2;
    
    this.quantidadePulo = 0;
    this.invencivel = false;
    
  }
  
  pula() {
    this.quantidadePulo += 1;
    if (this.quantidadePulo <= 2) {
      this.velocidadeDoPulo = -this.pulo;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.quantidadePulo = 0;
    }
  }
  
  ficaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {this.invencivel = false;}, 1000);
  }
  
  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }
    const precisao = -45;
    const colisao = collideRectRect(this.x,this.y, this.largura+precisao, this.altura+precisao, inimigo.x, inimigo.y, inimigo.largura+precisao, inimigo.altura+precisao);
    return colisao;
  }
  
  estaColidindo2(inimigo) {
    if (this.invencivel) {
      return false;
    }
    const precisao = -120;
    const colisao = collideRectRect(this.x,this.y, this.largura+precisao, this.altura+precisao, inimigo.x, inimigo.y, inimigo.largura+precisao, inimigo.altura+precisao);
    return colisao;
  }
  
}