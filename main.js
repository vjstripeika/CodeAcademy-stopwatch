import TimerState from "./timerState.js";
import TimerView from "./timerView.js";
import { formatTime, calculateTime } from "./utils.js";

const timerContainer = document.querySelector("#timer-container");
const addTimerButton = document.querySelector("#btn-add-timer");

addTimerButton.addEventListener("click", () => {
  const timerView = new TimerView(timerContainer);

  const updateTimerText = (secondsElapsed) => {
    const { hours, minutes, seconds } = calculateTime(secondsElapsed);

    timerView.timerBox.textContent = `${formatTime(hours)}:${formatTime(
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
    timerView.lapContainer.append(lapItemEl);
  };

  const clearLaps = () => {
    timerView.lapContainer.innerHTML = "";
  };

  const timerState = new TimerState({
    updateTime: updateTimerText,
    setLap: createLap,
    clearLaps: clearLaps,
  });

  timerView.startButton.addEventListener("click", () => {
    timerState.start();
  });

  timerView.stopButton.addEventListener("click", () => {
    timerState.stop();
  });

  timerView.resetButton.addEventListener("click", () => {
    timerState.reset();
  });

  timerView.lapButton.addEventListener("click", () => {
    timerState.lap();
  });
});
