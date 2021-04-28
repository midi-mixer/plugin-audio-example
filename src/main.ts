// public
import { ButtonType } from "midi-mixer-plugin";

// local
import introUrl from "./audio/intro.mp3";

const intro = new Audio(introUrl);

/**
 * Play the file immediately.
 */
intro.autoplay = true;
intro.play();

/**
 * Create a button we can press to play the intro at 5x speed.
 */
new ButtonType("intro", {
  name: "Play intro.mp3",
  active: true,
}).on("pressed", () => {
  intro.currentTime = 0;
  intro.playbackRate = 5;
  intro.play();
});
