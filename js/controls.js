import {
  playButton,
  stopButton,
  increaseButton,
  decreaseButton,
  lightModeButton,
  darkModeButton,
  bodyPage,
  pauseButton
} from "./elements.js";

export default function Controls({ sounds }) {
  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
  }

  function stop() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }
  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }

  function switchModeDark() {
    lightModeButton.classList.add("hide");
    darkModeButton.classList.remove("hide");
    bodyPage.classList.add("light-mode");
  }

  function switchModeLight() {
    lightModeButton.classList.remove("hide");
    darkModeButton.classList.add("hide");
    bodyPage.classList.remove("light-mode");
  }

  function addSoundOn(button) {
    if (button.classList.contains("soundOn")) {
      sounds.stopSound(button);
      button.classList.toggle("soundOn");
      return;
    }
    sounds.playSound(button);
    button.classList.toggle("soundOn");
  }

  return {
    switchModeDark,
    switchModeLight,
    play,
    pause,
    stop,
    addSoundOn
  };
}
