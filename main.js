import timerState from "./state.js";
import { formatTime } from "./utils.js";

const elements = {
  startButton: document.querySelector("#btn-start"),
  stopButton: document.querySelector("#btn-stop"),
  timerBox: document.querySelector("#timer"),
};

function updateTimerText(secondsElapsed) {
  const seconds = secondsElapsed % 60;
  const minutes = Math.floor(secondsElapsed / 60) % 60;
  const hours = Math.floor(Math.floor(secondsElapsed / 60) / 60);

  elements.timerBox.textContent = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;
}

elements.startButton.addEventListener("click", function () {
  timerState.start(updateTimerText);
});

elements.stopButton.addEventListener("click", function () {
  timerState.stop();
});
