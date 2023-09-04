export class Auto{

  getPosInicialX(pos){
    let x = pos[0]-'0';
    return x;
  }

  getPosInicialY(pos){
    let y = pos[2]-'0';
    return y;
  }

  getDirInicial(pos){
    let dir = pos[3];
    return dir;
  }

}

export default Auto;
