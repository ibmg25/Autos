import { parse } from "@babel/core";

export class Auto{

  constructor(){
    this.posX = -1;
    this.posY = -1;
    this.dir = -1;
    this.polos = "NESO";
    this.maxX = 100;
    this.maxY = 100;
  }

  getLineaGrid(lineaComandos){
    let tam = 0;
    for(let i = 0; i < lineaComandos.length; i++){
      if(lineaComandos[i] == '/'){
        tam = i;
        break;
      }
    }
    return lineaComandos.substr(0, tam);
  }

  getLineaPos(lineaComandos){
    let posInicial = this.getLineaGrid(lineaComandos).length + 1;
    let tam = 0;
    for(let i = posInicial; i < lineaComandos.length; i++){
      if(lineaComandos[i] == '/'){
        tam = i - posInicial;
        break;
      }
    }
    return lineaComandos.substr(posInicial, tam);
  }

  inicializar(lineaComandos){
    this.setPosX(this.getPosInicialX(lineaComandos));
    this.setPosY(this.getPosInicialY(lineaComandos));
    this.setDir(this.getDirInicial(lineaComandos));
    this.setGrid(lineaComandos);
  }

  setGrid(lineaComandos){
    let input = this.getLineaGrid(lineaComandos);
    let X = "";
    let Y = "";
    for(let i = 0; i < input.length; i++){
      if(input[i] == ','){
        for(let j = i+1; j < input.length; j++){
          if(input[j] == '/'){
            break;
          }
          else{
            Y += input[j];
          }
        }
        break;
      }
      else{
        X += input[i];
      }
    }
    this.maxX = parseInt(X);
    this.maxY = parseInt(Y);
  }

  getMaxX(){
    return this.maxX;
  }

  getMaxY(){
    return this.maxY;
  }

  getPosInicialX(lineaComandos){
    let input = this.getLineaPos(lineaComandos);
    let X = "";
    for(let i = 0; i < input.length; i++){
      if(input[i] == ','){
        break;
      }
      else{
        X += input[i];
      }
    }
    let x = parseInt(X);
    return x;
  }

  getPosInicialY(lineaComandos){
    let input = this.getLineaPos(lineaComandos);
    let Y = "";
    let posInicial = 0;
    for(let i = 0; i < input.length; i++){
      if(input[i] == ','){
        posInicial = i+1;
        break;
      }
    }
    for(let i = posInicial; i < input.length; i++){
      if(input[i] == 'N' || input[i] == 'E' || input[i] == 'S' || input[i] == 'O'){
        break;
      }
      else{
        Y += input[i];
      }
    }
    let y = parseInt(Y);
    return y;
  }

  getDirInicial(lineaComandos){
    let tam = this.getLineaGrid(lineaComandos).length + this.getLineaPos(lineaComandos).length;
    let dir = lineaComandos[tam];
    return dir;
  }

  getComandos(lineaComandos){
    let tam = lineaComandos.length;
    let comandos = lineaComandos.substr(9, tam-9);
    return comandos;
  }

  setPosX(x){
    this.posX = x;
  }

  getPosX(){
    return this.posX;
  }

  setPosY(y){
    this.posY = y;
  }

  getPosY(){
    return this.posY;
  }

  setDir(d){
    if(this.polos[0] == d)
      this.dir = 0;
    if(this.polos[1] == d)
    this.dir = 1;
    if(this.polos[2] == d)
    this.dir = 2;
    if(this.polos[3] == d)
    this.dir = 3;
  }

  getDir(){
    if (this.dir == -1)
      return '-';
    return this.polos[this.dir];
  }

  girarDerecha(){
    this.dir = this.dir + 1;
    if(this.dir > 3)
      this.dir = 0;
  }

  girarIzquierda(){
    this.dir = this.dir - 1;
    if(this.dir < 0)
      this.dir = 3;
  }

  avanzar(){
    if(this.dir == 0 && this.posY < this.maxY)
      this.posY = this.posY + 1;
    if(this.dir == 1 && this.posX < this.maxX)
      this.posX = this.posX + 1;
    if(this.dir == 2 && this.posY > 0)
      this.posY = this.posY - 1;
    if(this.dir == 3 && this.posX > 0)
      this.posX = this.posX - 1;
  }

  ejecutarComandos(lineaComandos){
    let comandos = this.getComandos(lineaComandos);
    for(let i = 0; i < comandos.length; i++){
      if(comandos[i] == 'A')
        this.avanzar();
      if(comandos[i] == 'D')
        this.girarDerecha();
      if(comandos[i] == 'I')
        this.girarIzquierda(); 
    }
  }

  getPosFinal(lineaComandos){
    this.ejecutarComandos(lineaComandos);
    let pos = (this.posX+'0') + ',' + (this.posY+'0') + this.dir;
    return pos; 
  }

}

export default Auto;
