import { Machine } from "./machine.js";
import { Food } from "./food.js";

class Multivariate extends Machine {
  constructor(food = new Food(), alertHandler) {
    super(2000, alertHandler);
    this.food = food;
  }
  cookSoup(food = new Food()) {
    this.run();
  }

  stew(food = new Food()) {
    if (food !== undefined) {
      this.food = food;
    }
    this.time = food.time;
    this.alertHandler(`Приготування ${food.name}`);
    this.run();
  }

  bake(food = new Food()) {
    if (food !== undefined) {
      this.food = food;
    }
    this.time = food.time;
    this.alertHandler(`Приготування ${food.name}`);
    this.run();
  }
}

const multivariate = new Multivariate();
multivariate.cookSoup(new Food("okroshka", 12000));
multivariate.stew(new Food("stewed fish", 11000));
multivariate.bake(new Food("bread", 9000));
