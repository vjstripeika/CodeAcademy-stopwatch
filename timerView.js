// Timer

/** {
  startButton: document.querySelector("#btn-start"),
  stopButton: document.querySelector("#btn-stop"),
  resetButton: document.querySelector("#btn-reset"),
  lapButton: document.querySelector("#btn-lap"),

  timerBox: document.querySelector("#timer"),

  lapContainer: document.querySelector("#lap-container"),
 ;
 */

class TimerView {
  constructor(containerEl) {
    const timerRootEl = document.createElement("div");
    timerRootEl.className = "timer";

    timerRootEl.append(
      this.initTimerClock(),
      this.initButtonGroup(),
      this.initLapContainer(),
      this.initCloseTimerButton()
    );

    containerEl.append(timerRootEl);

    this.closeTimer.addEventListener("click", () => {
      timerRootEl.remove();
    });
  }

  initTimerClock() {
    const timerClockEl = document.createElement("div");
    timerClockEl.className = "timer-clock";
    timerClockEl.textContent = "00:00:00";

    this.timerBox = timerClockEl;

    return timerClockEl;
  }

  initCloseTimerButton() {
    const closeTimerButtonEl = document.createElement("button");
    closeTimerButtonEl.className = "close-timer-button";
    closeTimerButtonEl.textContent = "Close Timer";

    this.closeTimer = closeTimerButtonEl;

    return closeTimerButtonEl;
  }

  initButtonGroup() {
    const buttonGroupEl = document.createElement("div");
    buttonGroupEl.className = "button-group";

    const [startBtnEl, stopBtnEl, resetBtnEl, lapBtnEl] = this.initButtons();

    this.startButton = startBtnEl;
    this.stopButton = stopBtnEl;
    this.resetButton = resetBtnEl;
    this.lapButton = lapBtnEl;

    buttonGroupEl.append(startBtnEl, stopBtnEl, resetBtnEl, lapBtnEl);

    return buttonGroupEl;
  }

  initButtons() {
    const buttonTextContentList = ["start", "stop", "reset", "lap"];
    const buttonElements = [];

    for (const buttonText of buttonTextContentList) {
      const buttonEl = document.createElement("button");
      buttonEl.textContent = buttonText;

      buttonElements.push(buttonEl);
    }

    return buttonElements;
  }

  initLapContainer() {
    const lapScrollContainerEl = document.createElement("div");
    lapScrollContainerEl.className = "lap-scroll-container";

    const lapContainerEl = document.createElement("div");
    lapScrollContainerEl.append(lapContainerEl);
    this.lapContainer = lapContainerEl;

    return lapScrollContainerEl;
  }
}

// Init Buttons ciklų variacijos

// for (let index = 0; index < buttonTextContentList.length; index++) {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = buttonTextContentList[index];
//   buttonElements.push(buttonEl);
// }

// let index = 0;
// while (index < buttonTextContentList.length) {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = buttonTextContentList[index];
//   buttonElements.push(buttonEl);

//   index++;
// }

// while (buttonTextContentList.length) {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = buttonTextContentList.pop(); // is kitos puses
//   buttonElements.push(buttonEl);
// }

export default TimerView;
