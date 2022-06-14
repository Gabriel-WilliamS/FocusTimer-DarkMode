import { displayMinutes, displaySeconds } from "./elements.js";
let timeOut;

let initialMinutes = Number(displayMinutes.textContent);
let currentMinutes;
let currentSecons;
let countDownIsRunning = false;

export default function Timer({ controls }) {
  function countDown() {
    timeOut = setTimeout(() => {
      countDownIsRunning = true;
      currentMinutes = Number(displayMinutes.textContent);
      currentSecons = Number(displaySeconds.textContent);

      if (currentMinutes <= 0 && currentSecons <= 0) {
        stop();
        controls.stop();

        return;
      }

      if (currentSecons <= 0) {
        currentSecons = 60;
        --currentMinutes;
      }

      if (currentMinutes <= 0) {
        currentMinutes = 0;
      }
      updateDisplay(currentMinutes, currentSecons - 1);

      countDown();
    }, 1000);
  }

  function increaseFiveMinutes() {
    if (!countDownIsRunning) {
      updateDisplay((initialMinutes += 5), 0);
      updateInitialMinutes();
      return;
    }
    if (currentMinutes === undefined) {
      currentMinutes = initialMinutes;
      currentSecons = 0;
    }
    updateDisplay((currentMinutes += 5), currentSecons - 1);
  }

  function decreaseFiveMinutes() {
    if (!countDownIsRunning) {
      if (initialMinutes <= 0) {
        initialMinutes = 5;
      }
      updateDisplay((initialMinutes -= 5), 0);
      updateInitialMinutes();

      return;
    }
    if (currentMinutes >= 5) {
      if (currentMinutes === undefined) {
        currentMinutes = initialMinutes;
        currentSecons = 0;
      }
      updateDisplay((currentMinutes -= 5), currentSecons - 1);
    }
  }

  function stop() {
    countDownIsRunning = false;
    clearTimeout(timeOut);
    updateDisplay(initialMinutes, 0);
  }

  function pause() {
    clearTimeout(timeOut);
  }

  function updateDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, "0");
    displaySeconds.textContent = String(seconds).padStart(2, "0");
  }

  function updateInitialMinutes() {
    if (!countDownIsRunning) {
      initialMinutes = Number(displayMinutes.textContent);
    }
  }

  return {
    countDown,
    stop,
    pause,
    increaseFiveMinutes,
    decreaseFiveMinutes
  };
}
