import {Auto} from "./auto.js";

describe("Auto", () => {

  it("deberia mostrar la posicion inicial en eje X", () => {
    let auto = new Auto();
    expect(auto.getPosInicialX("3,2N")).toEqual(3);
  });

  it("deberia mostrar la posicion inicial en eje Y", () => {
    let auto = new Auto();
    expect(auto.getPosInicialY("3,2N")).toEqual(2);
  });

});
