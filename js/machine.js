export class Machine {
  constructor(time = 2000, alertHandler) {
    this.state = "stopped";
    this.time = time;
    this.timer = null;
    this.interval = null;
    this.alertHandler = alertHandler;
  }
  run() {
    this.state = "started";
    this.alertHandler("Починаю роботу...");
    this.alertHandler("Час приготування - " + this.time + " ");
    this.interval = setInterval(
      function () {
        this.alertHandler(" | ");
      }.bind(this),
      1000
    );
    this.timer = setTimeout(this.onReady.bind(this), this.time);
    this.alertHandler(this.state);
  }
  onReady() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.alertHandler("Готово! ");
    this.state = "stopped";
    this.alertHandler(this.state);
  }
  stop() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.alertHandler("Примусове вимкнення!");
    this.state = "stopped";
    this.alertHandler(this.state);
  }
}
