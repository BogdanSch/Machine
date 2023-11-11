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
    this.alertHandler("Starting operation... ");
    this.alertHandler("Preparation time - " + this.time + " ");
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
    this.alertHandler(". Ready!");
    this.state = "stopped";
  }

  stop() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.alertHandler("Forced shutdown!");
    this.state = "stopped";
  }
}
