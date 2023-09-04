import {Auto} from "./auto";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comandos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const auto = new Auto();
  const com = comando.value;

  div.innerHTML = "<p> Posicion Inicial: " + auto.getPosInicialX(com) + ',' + auto.getPosInicialY(com) + auto.getDirInicial(com)  + "</p>";
  div.innerHTML += "<p> Comandos: " + auto.getComandos(com) + "</p>";
});
