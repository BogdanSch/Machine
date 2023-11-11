import { Machine } from "../../js/machine.js";
import { Food } from "./food.js";

export class Multivariate extends Machine {
  constructor(food = new Food(), alertHandler) {
    super(2000, alertHandler);
    this.food = food;
  }
  cookSoup(food = new Food()) {
    if (food !== undefined) {
      this.food = food;
    }
    this.time = this.food.time;
    this.alertHandler(`Cooking soup ${this.food.name}. `);
    this.run();
  }

  stew(food = new Food()) {
    if (food !== undefined) {
      this.food = food;
    }
    this.time = this.food.time;
    this.alertHandler(`Stewing ${this.food.name}. `);
    this.run();
  }

  bake(food = new Food()) {
    if (food !== undefined) {
      this.food = food;
    }
    this.time = this.food.time;
    this.alertHandler(`Baking ${this.food.name}. `);
    this.run();
  }
}
