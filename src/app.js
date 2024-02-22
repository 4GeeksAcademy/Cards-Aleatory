/* eslint-disable */
import "bootstrap";
import "./style.css";

function actualizarPalo() {
  let palo = ["♥", "♦", "♣", "♠"];
  let indexPalo = Math.floor(Math.random() * palo.length);
  return palo[indexPalo];
}

function actualizarNumero() {
  let numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let indexNumero = Math.floor(Math.random() * numero.length);
  return numero[indexNumero];
}

function actualizarCarta() {
  const randomPalo = actualizarPalo();
  const carta = document.querySelector(".card");

  document.querySelector(".palo-arriba").innerHTML = randomPalo;
  document.querySelector(".palo-abajo").innerHTML = randomPalo;
  document.querySelector(".numero").innerHTML = actualizarNumero();

  switch (randomPalo) {
    case "♥":
      carta.className = "card corazon";
      break;
    case "♦":
      carta.className = "card diamante";
      break;
    case "♣":
      carta.className = "card trebol";
      break;
    case "♠":
      carta.className = "card pica";
      break;
  }
}

window.onload = function() {
  actualizarCarta();
  document.querySelector("#boton").addEventListener("click", actualizarCarta);
  setInterval(actualizarCarta, 10000);
};
