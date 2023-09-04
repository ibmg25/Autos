import {Auto} from "./auto";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comandos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const auto = new Auto();
  const com = comando.value;
  let posInicial = com.substr(0, 4);

  div.innerHTML = "<p> Posicion Inicial: " + auto.getPosInicialX(posInicial) + ',' + auto.getPosInicialY(posInicial) + auto.getDirInicial(posInicial)  + "</p>";
});
