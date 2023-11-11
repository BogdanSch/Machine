"use strict";

import { Multivariate } from "./multivariate.js";
import { Food } from "./food.js";

const outputElement = document.querySelector(".output");
const food = document.querySelectorAll(".food__list .food__item");
const stopButton = document.querySelector(".btn-stop");

const multivariate = new Multivariate(new Food(), alertHandler);

function alertHandler(message) {
  outputElement.textContent += message;
}

food.forEach((foodItem) => {
  foodItem.addEventListener("click", () => {
    if (multivariate.state !== "started") {
      try {
        outputElement.textContent = "";
        let foodName = foodItem.querySelector("h5").textContent;
        let foodTime = foodItem.querySelector("input.food__time").value;
        let foodType = foodItem
          .querySelector("input.food__type")
          .value.toLowerCase();

        console.log(foodName, foodTime, foodType);

        switch (foodType) {
          case "soup":
            multivariate.cookSoup(new Food(foodName, foodTime));
            break;
          case "stew":
            multivariate.stew(new Food(foodName, foodTime));
            break;
          case "bake":
            multivariate.bake(new Food(foodName, foodTime));
            break;
          default:
            throw new Error("This food type doesn't exist!");
        }
      } catch (error) {
        alert(`Error ${error.message}`);
      }
    }
  });
});

stopButton.addEventListener("click", () => {
  multivariate.stop();
});

// multivariate.cookSoup(new Food("okroshka", 12000));
// multivariate.stew(new Food("stewed fish", 11000));
// multivariate.bake(new Food("bread", 9000));
