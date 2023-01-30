import TimerState from "./timerState.js";
import TimerView from "./timerView.js";
import { formatTime, calculateTime } from "./utils.js";

class Timer extends TimerView {
  constructor(container) {
    super(container);

    const updateTimerText = (secondsElapsed) => {
      const { hours, minutes, seconds } = calculateTime(secondsElapsed);

      this.timerBox.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`;
    };

    const createLap = (lapNumber, lapTime) => {
      const { hours, minutes, seconds } = calculateTime(lapTime);

      const lapItemEl = document.createElement("div");
      lapItemEl.className = "lap-log";

      const lapNumberEl = document.createElement("span");
      lapNumberEl.textContent = `${lapNumber} Lap`;

      const lapTimeEl = document.createElement("span");
      lapTimeEl.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`;

      lapItemEl.append(lapNumberEl, lapTimeEl);
      this.lapContainer.append(lapItemEl);
    };

    const clearLaps = () => {
      this.lapContainer.innerHTML = "";
    };

    this.state = new TimerState({
      updateTime: updateTimerText,
      setLap: createLap,
      clearLaps: clearLaps,
    });

    this.bindButtonEvents();
  }

  bindButtonEvents() {
    this.startButton.addEventListener("click", () => {
      this.state.start();
    });

    this.stopButton.addEventListener("click", () => {
      this.state.stop();
    });

    this.resetButton.addEventListener("click", () => {
      this.state.reset();
    });

    this.lapButton.addEventListener("click", () => {
      this.state.lap();
    });
  }
}

export default Timer;
