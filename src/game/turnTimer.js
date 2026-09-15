// 30-Second Turn Timeout Manager for Solo & Multiplayer

export class TurnTimer {
  constructor(options = {}) {
    this.duration = options.duration || 30;
    this.timeLeft = this.duration;
    this.timerId = null;
    this.isPaused = false;

    this.onTick = options.onTick || (() => {});
    this.onWarning = options.onWarning || (() => {});
    this.onUrgent = options.onUrgent || (() => {});
    this.onTimeout = options.onTimeout || (() => {});
  }

  start() {
    this.stop();
    this.timeLeft = this.duration;
    this.isPaused = false;
    this.onTick(this.timeLeft);

    this.timerId = setInterval(() => {
      if (this.isPaused) return;

      this.timeLeft--;
      this.onTick(this.timeLeft);

      if (this.timeLeft === 10) {
        this.onWarning(this.timeLeft);
      } else if (this.timeLeft === 5) {
        this.onUrgent(this.timeLeft);
      } else if (this.timeLeft <= 0) {
        this.stop();
        this.onTimeout();
      }
    }, 1000);
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  reset() {
    this.start();
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isPaused = false;
  }

  getTimeLeft() {
    return this.timeLeft;
  }
}
