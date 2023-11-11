import { Machine } from "./machine.js";
import { Drink } from "./drink.js";

export class CoffeeMachine extends Machine {
  constructor(drink = new Drink(), alertHandler) {
    super(2000, alertHandler);
    this.drink = drink;
  }
  run(drink) {
    if (drink !== undefined) {
      this.drink = drink;
    }
    this.time = drink.time;
    this.alertHandler(`Приготування ${drink.name} `);
    Machine.prototype.run.apply(this);
  }
}
