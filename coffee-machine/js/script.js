"use strict";

import { CoffeeMachine } from "./coffee-machine.js";
import { Drink } from "./drink.js";

const outputElement = document.querySelector(".output");
const drinks = document.querySelectorAll(".drinks__list .drinks__item");
const stopButton = document.querySelector(".btn-stop");

const coffeeMachine = new CoffeeMachine(new Drink(), alertHandler);

function alertHandler(message) {
  outputElement.textContent += message;
}

drinks.forEach((drink) => {
  drink.addEventListener("click", (event) => {
    if (coffeeMachine.state !== "started") {
      outputElement.textContent = "";
      let drinkName = drink.querySelector("h5").textContent;
      let drinkTime = drink.querySelector("input").value;
      coffeeMachine.run(new Drink(drinkName, drinkTime));
    }
  });
});

stopButton.addEventListener("click", () => {
  coffeeMachine.stop();
});
