const state = {
  secondsElapsed: 0,
  intervalId: null,

  start(callback) {
    // updateTimerText
    if (!state.intervalId) {
      // create an interval that increments secondsElapsed
      // calls update function that was received through args
      state.intervalId = setInterval(function () {
        state.secondsElapsed++;
        callback(state.secondsElapsed);
      }, 1000);
    }
  },

  stop() {
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  },
};

export default state;
