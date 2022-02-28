import Button from "./classes/button.js";
import Background from "./classes/background.js";

let globalState = "start";

function startScreen() {
  fill(215);
  rect(0, 0, 1170, 2532);
}

function draw() {
  if (globalState === "start") {
    startScreen();
    background.state = "start";
  }
}
