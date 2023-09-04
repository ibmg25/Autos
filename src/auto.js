export class Auto{

  constructor(){
    this.posX = -1;
    this.posY = -1;
    this.dir = '-';
  }

  getPosInicialX(lineaComandos){
    let pos = lineaComandos.substr(4, 4);
    let x = pos[0]-'0';
    return x;
  }

  getPosInicialY(lineaComandos){
    let pos = lineaComandos.substr(4, 4);
    let y = pos[2]-'0';
    return y;
  }

  getDirInicial(lineaComandos){
    let pos = lineaComandos.substr(4, 4);
    let dir = pos[3];
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

}

export default Auto;
