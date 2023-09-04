export class Auto{

  constructor(){
    this.posX = -1;
    this.posY = -1;
    this.dir = -1;
    this.polos = "NESO";
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
    return this.polos[this.dir];
  }

}

export default Auto;
