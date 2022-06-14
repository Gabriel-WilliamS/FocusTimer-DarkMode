import Controls from "./controls.js";
import Events from "./events.js";
import Sounds from "./sound.js";
import Timer from "./timer.js";

const sounds = Sounds();
const controls = Controls({ sounds });
const timer = Timer({ controls });

Events({ controls, timer, sounds });
