import {Auto} from "./auto.js";

describe("Auto", () => {

  it("deberia mostrar la posicion inicial en eje X", () => {
    let auto = new Auto();
    expect(auto.getPosInicialX("5,5/3,2N/ADAIA")).toEqual(3);
  });

  it("deberia mostrar la posicion inicial en eje Y", () => {
    let auto = new Auto();
    expect(auto.getPosInicialY("5,5/3,2N/ADAIA")).toEqual(2);
  });

  it("deberia mostrar la direccion inicial", () => {
    let auto = new Auto();
    expect(auto.getDirInicial("5,5/3,2N/ADAIA")).toEqual('N');
  });

  it("deberia mostrar los comandos", () => {
    let auto = new Auto();
    expect(auto.getComandos("5,5/3,2N/ADAIA")).toEqual("ADAIA");
  });

  it("deberia mostrar la posicion actual en X", () => {
    let auto = new Auto();
    auto.setPosX(7);
    expect(auto.getPosX()).toEqual(7);
  });

  it("deberia mostrar la posicion actual en Y", () => {
    let auto = new Auto();
    auto.setPosY(4);
    expect(auto.getPosY()).toEqual(4);
  });

  it("deberia mostrar la direccion actual", () => {
    let auto = new Auto();
    auto.setDir('O');
    expect(auto.getDir()).toEqual('O');
  });

  it("deberia girar a la derecha", () => {
    let auto = new Auto();
    auto.setDir('S');
    auto.girarDerecha();
    expect(auto.getDir()).toEqual('O');
    auto.girarDerecha();
    expect(auto.getDir()).toEqual('N');
  });

  it("deberia girar a la izquierda", () => {
    let auto = new Auto();
    auto.setDir('E');
    auto.girarIzquierda();
    expect(auto.getDir()).toEqual('N');
    auto.girarIzquierda();
    expect(auto.getDir()).toEqual('O');
  });

  it("Valida limites del grid", () => {
    let auto = new Auto();
    auto.setGrid("7,5/3,2N/ADAIA");
    expect(auto.getMaxX()).toEqual(6);
    expect(auto.getMaxY()).toEqual(4);
  });

  it("deberia avanzar", () => {
    let auto = new Auto();
    auto.setPosX(1);
    auto.setPosY(1);
    auto.setDir('E');
    auto.avanzar();
    auto.girarDerecha();
    auto.avanzar();
    auto.avanzar();
    expect(auto.getPosX()).toEqual(2);
    expect(auto.getPosY()).toEqual(0);
  });

  it("deberia inicializar los valores", () => {
    let auto = new Auto();
    auto.inicializar("5,5/3,2N/ADAIA");
    expect(auto.getPosX()).toEqual(3);
    expect(auto.getPosY()).toEqual(2);
    expect(auto.getMaxX()).toEqual(4);
    expect(auto.getMaxY()).toEqual(4);
    expect(auto.getDir()).toEqual('N');
  });

});
