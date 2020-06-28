class Vida {
 
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    
    this.xInicial = width*0.02;
    this.largura = 35;
    this.altura = 35;
  }
  
  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i*30;
      const posicao = this.xInicial * (1 + i);
      image(imagemVida, posicao+margem, height*0.02, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if(this.vidas <= this.total) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
  }
  
}