import {
  fireVolume,
  forestVolume,
  marketVolume,
  rainVolume
} from "./elements.js";

export default function Sounds() {
  const forest = new Audio(
    "https://github.com/Gabriel-WilliamS/FocusTimer-DarkMode/blob/main/sounds/Floresta.wav?raw=true"
  );
  const rain = new Audio(
    "https://github.com/Gabriel-WilliamS/FocusTimer-DarkMode/blob/main/sounds/Chuva.wav?raw=true"
  );
  const fire = new Audio(
    "https://github.com/Gabriel-WilliamS/FocusTimer-DarkMode/blob/main/sounds/Lareira.wav?raw=true"
  );
  const market = new Audio(
    "https://github.com/Gabriel-WilliamS/FocusTimer-DarkMode/blob/main/sounds/Cafeteria.wav?raw=true"
  );
  forest.loop = true;
  rain.loop = true;
  fire.loop = true;
  market.loop = true;

  function playSound(sound) {
    if (sound.classList[0] == "forest") {
      forest.play();
      return;
    }
    if (sound.classList[0] == "rain") {
      rain.play();
      return;
    }
    if (sound.classList[0] == "fire") {
      fire.play();
      return;
    }
    if (sound.classList[0] == "market") {
      market.play();
      return;
    }
  }

  function stopSound(sound) {
    if (sound.classList[0] == "forest") {
      forest.pause();
      return;
    }
    if (sound.classList[0] == "rain") {
      rain.pause();
      return;
    }
    if (sound.classList[0] == "fire") {
      fire.pause();
      return;
    }
    if (sound.classList[0] == "market") {
      market.pause();
      return;
    }
  }

  forestVolume.oninput = () => {
    forest.volume = forestVolume.value / 100;
  };

  rainVolume.oninput = () => {
    rain.volume = rainVolume.value / 100;
  };

  marketVolume.oninput = () => {
    market.volume = marketVolume.value / 100;
  };

  fireVolume.oninput = () => {
    fire.volume = fireVolume.value / 100;
  };

  return {
    playSound,
    forest,
    rain,
    fire,
    market,
    stopSound
  };
}
