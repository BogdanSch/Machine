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

// function getDrinkPreparationTime(drinkName) {
//   switch (drinkName) {
//     case "water":
//       return 2000;
//     case "latte":

//     default:
//       throw new Error("Sorry, don't have this drink yet:(");
//   }
// }

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

// startButton.addEventListener("click", () => {
//   let drinkName = drinkNameInput.value;
//   coffeeMachine = new CoffeeMachine(new Drink(drinkName), alertHandler);
//   coffeeMachine.run(new Drink("Latte", 4000));
//   outputElement.textContent = "";
// });

stopButton.addEventListener("click", () => {
  coffeeMachine.stop();
});
