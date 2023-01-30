import Timer from "./timer.js";

const timerContainer = document.querySelector("#timer-container");
const addTimerButton = document.querySelector("#btn-add-timer");

addTimerButton.addEventListener("click", () => {
  new Timer(timerContainer);
});
