class TimerState {
  constructor({ updateTime, setLap, clearLaps }) {
    // Initial values
    this.secondsElapsed = 0;
    this.lastLapTime = 0;
    this.lapNumber = 0;
    this.intervalId = null;

    // Dynamic methods
    this.updateTime = updateTime;
    this.setLap = setLap;
    this.clearLaps = clearLaps;

    // Initialization
    this.updateTime(0);
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.secondsElapsed++;
        this.updateTime(this.secondsElapsed);
      }, 1000);
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  lap() {
    if (!this.intervalId) return;

    this.lapNumber++;

    const lapTime = this.secondsElapsed - this.lastLapTime;
    this.lastLapTime = this.secondsElapsed;

    this.setLap(this.lapNumber, lapTime);
  }

  reset() {
    this.stop();
    this.secondsElapsed = 0;
    this.lastLapTime = 0;
    this.lapNumber = 0;
    this.updateTime(0);
    this.clearLaps();
  }
}

export default TimerState;
