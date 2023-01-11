import TimerState from "./timerState.js";
import { formatTime, calculateTime } from "./utils.js";

const elements = {
  startButton: document.querySelector("#btn-start"),
  stopButton: document.querySelector("#btn-stop"),
  resetButton: document.querySelector("#btn-reset"),
  lapButton: document.querySelector("#btn-lap"),
  timerBox: document.querySelector("#timer"),
  lapContainer: document.querySelector("#lap-container"),
};

const updateTimerText = (secondsElapsed) => {
  const { hours, minutes, seconds } = calculateTime(secondsElapsed);

  elements.timerBox.textContent = `${formatTime(hours)}:${formatTime(
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
  elements.lapContainer.append(lapItemEl);
};

const clearLaps = () => {
  elements.lapContainer.innerHTML = "";
};

const timerState = new TimerState({
  updateTime: updateTimerText,
  setLap: createLap,
  clearLaps: clearLaps,
});

elements.startButton.addEventListener("click", () => {
  timerState.start();
});

elements.stopButton.addEventListener("click", () => {
  timerState.stop();
});

elements.resetButton.addEventListener("click", () => {
  timerState.reset();
});

elements.lapButton.addEventListener("click", () => {
  timerState.lap();
});
