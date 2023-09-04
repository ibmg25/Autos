export class Auto{

  constructor(){
    this.posX = -1;
    this.posY = -1;
    this.dir = -1;
    this.polos = "NESO";
    this.maxX = 100;
    this.maxY = 100;
  }

  inicializar(lineaComandos){
    this.setPosX(this.getPosInicialX(lineaComandos));
    this.setPosY(this.getPosInicialY(lineaComandos));
    this.setDir(this.getDirInicial(lineaComandos));
    this.setGrid(lineaComandos);
  }

  setGrid(lineaComandos){
    this.maxX = lineaComandos.substr(0, 1) - '0' - 1;
    this.maxY = lineaComandos.substr(2, 1) - '0' - 1;
  }

  getMaxX(){
    return this.maxX;
  }

  getMaxY(){
    return this.maxY;
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

}

export default Auto;
