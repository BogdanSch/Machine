"use strict";

import { CoffeeMachine } from "./coffee-machine.js";
import { Drink } from "./drink.js";

const outputElement = document.querySelector(".output");
const startButton = document.querySelector(".btn-start");

function alertHandler(message) {
  outputElement.textContent += message;
}

startButton.addEventListener("click", () => {
  let coffeeMachine = new CoffeeMachine(new Drink(), alertHandler);
  coffeeMachine.run(new Drink("Latte", 4000));
});
