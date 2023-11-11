"use strict";

import { Multivariate } from "./multivariate.js";
import { Food } from "./food.js";

const outputElement = document.querySelector(".output");

function alertHandler(message) {
  outputElement.textContent += message;
}

const multivariate = new Multivariate(new Food(), alertHandler);
multivariate.cookSoup(new Food("okroshka", 12000));
multivariate.stew(new Food("stewed fish", 11000));
multivariate.bake(new Food("bread", 9000));
