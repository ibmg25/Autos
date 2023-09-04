export class Auto{

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

}

export default Auto;
