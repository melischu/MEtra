import Button from "./classes/button.js";
import Background from "./classes/background.js";
//import { tut1 } from "./preload.js";

//creating classes
let images = {
    tut1: loadImage("./assets/img/tut1.png"),
}

let background = new Background(0, 0, 1, "null", images);

let globalState = "tutorial";


function tutorialScreen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
}

function startScreen(){
    fill(13);
    rect(0, 0, 1170, 2532);
}

function overviewScreen(){
    fill(66);
    rect(0, 0, 1170, 2532);
}

function locationScreen(){
    fill(100);
    rect(0, 0, 1170, 2532);
}

function phoneMenuScreen(){
    fill(150);
    rect(0, 0, 1170, 2532);
}

function phoneCallScreen(){
    fill(190);
    rect(0, 0, 1170, 2532);
}

//Eventuell rauskicken
function progressScreen(){
    fill(200);
    rect(0, 0, 1170, 2532);
}

function settingsScreen(){
    fill(0);
    rect(0, 0, 1170, 2532);
}

function draw(){
    if(globalState === "tutorial"){
        tutorialScreen();
        background.state = "tut1";
    }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
