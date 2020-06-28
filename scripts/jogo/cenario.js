class Cenario {
  
    constructor(imagem1, imagem2, imagem3, imagem4, imagem5, velocidade1, velocidade2) {
      this.imagem1 = imagem1;
      this.imagem2 = imagem2;
      this.imagem3 = imagem3;
      this.imagem4 = imagem4;
      this.imagem5 = imagem5;
      this.velocidade1 = velocidade1;
      this.velocidade2 = velocidade2;
      this.x1 = 0;
      this.x2 = width;
      this.x3 = 0;
      this.x4 = width;
    }

    exibe() {
      image(this.imagem1, this.x1, 0, width+5, height);
      image(this.imagem1, this.x2, 0, width+5, height);
      image(this.imagem2, this.x1, 0, width+5, height);
      image(this.imagem2, this.x2, 0, width+5, height);
      image(this.imagem3, this.x3, 0, width+10, height);
      image(this.imagem3, this.x4, 0, width+10, height);
      image(this.imagem4, this.x3, 0, width+10, height);
      image(this.imagem4, this.x4, 0, width+10, height);
      image(this.imagem5, this.x3, 0, width+10, height);
      image(this.imagem5, this.x4, 0, width+10, height);
    }

    move() {
      this.x1 = this.x1 - this.velocidade1;
      this.x2 = this.x2 - this.velocidade1;
      this.x3 = this.x3 - this.velocidade2;
      this.x4 = this.x4 - this.velocidade2;
      if (this.x1 < -width) {
        this.x1 = width;
      }
      if (this.x2 < -width) {
        this.x2 = width;
      }
      if (this.x3 < -width) {
        this.x3 = width;
      }
      if (this.x4 < -width) {
        this.x4 = width;
      }
    }
  
}