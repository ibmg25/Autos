import {Auto} from "./auto.js";

describe("Auto", () => {
  it("deberia mostrar la posicion inicial en eje X", () => {
    let auto = new Auto();
    expect(auto.getPosInicialX("3,2N")).toEqual(3);
  });
});
