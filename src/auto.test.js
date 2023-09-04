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

});
