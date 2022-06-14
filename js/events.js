import {
  playButton,
  stopButton,
  increaseButton,
  decreaseButton,
  lightModeButton,
  darkModeButton,
  pauseButton,
  forestSoundButton,
  rainSoundButton,
  marketSoundButton,
  fireSoundButton
} from "./elements.js";

export default function Events({ controls, timer, sounds }) {
  playButton.addEventListener("click", () => {
    controls.play();
    timer.countDown();
  });

  pauseButton.addEventListener("click", () => {
    controls.pause();
    timer.pause();
  });

  stopButton.addEventListener("click", () => {
    timer.stop();
    controls.stop();
  });

  increaseButton.addEventListener("click", () => {
    timer.increaseFiveMinutes();
  });

  decreaseButton.addEventListener("click", () => {
    timer.decreaseFiveMinutes();
  });
  lightModeButton.addEventListener("click", () => {
    controls.switchModeDark();
  });

  darkModeButton.addEventListener("click", () => {
    controls.switchModeLight();
  });

  forestSoundButton.addEventListener("click", () => {
    controls.addSoundOn(forestSoundButton);
  });

  rainSoundButton.addEventListener("click", () => {
    controls.addSoundOn(rainSoundButton);
  });

  marketSoundButton.addEventListener("click", () => {
    controls.addSoundOn(marketSoundButton);
  });

  fireSoundButton.addEventListener("click", () => {
    controls.addSoundOn(fireSoundButton);
  });
}
