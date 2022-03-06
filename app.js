import Button from "./classes/button.js";
import Background from "./classes/background.js";
import { 
    VideoOM1,
    VideoOM2_3,
    VideoOM3,
    VideoOM4,
    VideoOM5_7,
    VideoOM6_7,
    VideoOM8_10,
    VideoOM9_10,
    VideoOM11_13,
    VideoOM11_26,
    VideoOM12_13,
    VideoOM14,
    VideoOM15,
    VideoOM16,
    VideoOM17_19,
    VideoOM18_19,
    VideoOM20_22,
    VideoOM21_22,
    VideoOM23_24,
    VideoOM23,
    VideoOM24,
    VideoOM25_26,
    VideoOM27_29,
    VideoOM28_29,
    VideoOM30_32,
    VideoOM31_32,
    poppins,
    preload 
} from "./preload.js";

//creating classes
let images = {
    tut1: loadImage("./assets/img/tut1.png"),
    tut2: loadImage("./assets/img/tut2.png"),
    tut3: loadImage("./assets/img/tut3.png"),
    tut4: loadImage("./assets/img/tut4.png"),
    home: loadImage("./assets/img/home.png"),
    progress: loadImage("./assets/img/progress.png"),
    settings: loadImage("./assets/img/settings.png"),
    art1: loadImage("./assets/img/art1.png"),
    art2: loadImage("./assets/img/art2.png"),
    art3: loadImage("./assets/img/art3.png"),
    art4: loadImage("./assets/img/art4.png"),
    phoneMenu1: loadImage("./assets/img/phoneMenu1.png"),
    phoneMenu2: loadImage("./assets/img/phoneMenu2.png"),
    phoneMenu3: loadImage("./assets/img/phoneMenu3.png"),
    phoneMenu4: loadImage("./assets/img/phoneMenu4.png"),
    
    buttonDefault: loadImage("./assets/img/buttonDefault.png"),
    buttonCheck: loadImage("./assets/img/buttonCheck.png"),
    buttonPerson: loadImage("./assets/img/buttonPerson.png"),
    buttonSettings: loadImage("./assets/img/buttonSettings.png"),
    buttonBack: loadImage("./assets/img/buttonBack.png"),
    buttonLock: loadImage("./assets/img/buttonLock.png"),
    buttonS1: loadImage("./assets/img/buttonS1.png"),
    buttonS2: loadImage("./assets/img/buttonS2.png"),
    buttonS3: loadImage("./assets/img/buttonS3.png"),
    buttonS4: loadImage("./assets/img/buttonS4.png"),
    buttonMap: loadImage("./assets/img/buttonMap.png"),
    buttonCall: loadImage("./assets/img/buttonCall.png"),
    buttonName1: loadImage("./assets/img/buttonName1.png"),
    buttonName2: loadImage("./assets/img/buttonName2.png"),
    buttonName3: loadImage("./assets/img/buttonName3.png"),
    buttonName4: loadImage("./assets/img/buttonName4.png"),
    buttonProgressCheck: loadImage("./assets/img/buttonProgressCheck.png"),
    buttonProgressCheckEmpty: loadImage("./assets/img/buttonProgressCheckEmpty.png"),
    buttonAccept: loadImage("./assets/img/buttonAccept.png"),
    buttonDecline: loadImage("./assets/img/buttonDecline.png"),
    buttonQ: loadImage("./assets/img/buttonQ.png"),
}

let background = new Background(0, 0, 1, "null", images);
let button1 = new Button(120, 1900, 940, 180, 1, 50, color(255, 255, 255), "Lorem Ipsum", "default", images);
let button2 = new Button(120, 1900, 940, 180, 1, 50, color(255, 255, 255), "Lorem Ipsum", "default", images);
let button3 = new Button(120, 1900, 940, 180, 1, 50, color(255, 255, 255), "Lorem Ipsum", "default", images);
let buttonBack = new Button(120, 170, 340, 150, 1, 50, color(255, 255, 255), "Zurück", "back", images);
let buttonLock = new Button(120, 2000, 940, 180, 1, 50, color(255, 255, 255), "Artefakt anrufen", "lock", images);
let buttonS1 = new Button(900, 170, 150, 150, 1, 50, color(255, 255, 255), "", "s1", images);
let buttonS2 = new Button(900, 170, 150, 150, 1, 50, color(255, 255, 255), "", "s2", images);
let buttonS3 = new Button(900, 170, 150, 150, 1, 50, color(255, 255, 255), "", "s3", images);
let buttonS4 = new Button(900, 170, 150, 150, 1, 50, color(255, 255, 255), "", "s4", images);
let buttonAccept = new Button(850, 2170, 200, 200, 1, 50, color(255, 255, 255), "", "accept", images);
let buttonDecline = new Button(120, 2170, 200, 200, 1, 50, color(255, 255, 255), "", "decline", images);
let buttonTransparent1 = new Button(920, 2260, 150, 150, 1, 50, color(255, 255, 255), "", "transparent", images);
let buttonTransparent2 = new Button(100, 2260, 150, 150, 1, 50, color(255, 255, 255), "", "transparent", images);
let buttonName1 = new Button(120, 680, 580, 150, 1, 50, color(255, 255, 255), "O. Morata", "n1", images);
let buttonName2 = new Button(120, 880, 580, 150, 1, 50, color(255, 255, 255), "H. Durlacher", "n2", images);
let buttonName3 = new Button(120, 1080, 580, 150, 1, 50, color(255, 255, 255), "F. Gundolf", "n3", images);
let buttonName4 = new Button(120, 1280, 580, 150, 1, 50, color(255, 255, 255), "G. E. Lessing", "n4", images);
let buttonCheck1 = new Button(900, 680, 150, 150, 1, 50, color(255, 255, 255), "", "pCheckEmpty", images);
let buttonCheck2 = new Button(900, 880, 150, 150, 1, 50, color(255, 255, 255), "", "pCheckEmpty", images);
let buttonCheck3 = new Button(900, 1080, 150, 150, 1, 50, color(255, 255, 255), "", "pCheckEmpty", images);
let buttonCheck4 = new Button(900, 1280, 150, 150, 1, 50, color(255, 255, 255), "", "pCheckEmpty", images);
let buttonQ1 = new Button(120, 1700, 940, 180, 1, 40, color(0, 0, 0), "", "q", images);
let buttonQ2 = new Button(120, 1900, 940, 180, 1, 40, color(0, 0, 0), "", "q", images);
let buttonQ3 = new Button(120, 2100, 940, 180, 1, 40, color(0, 0, 0), "", "q", images);

let globalState = "tutorial1";
let combineState = "null";
let qButtonsActive = "false";

//functions
preload();

function tutorialScreen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonTransparent1.display();
    buttonTransparent2.display();


    if (globalState === "tutorial4"){
        button1.display();
    }
}

function homeScreen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    button1.display();
    button2.display();
    button3.display();
}

function art1Screen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonBack.display();
    buttonS1.display();
    button1.display();
    button2.display();
    buttonTransparent1.display();
    buttonTransparent2.display();
}

function art2Screen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonBack.display();
    buttonS2.display();
    button1.display();
    
    if(buttonCheck1.state === "pCheck"){
        button2.display();
    }

    if(buttonCheck1.state === "pCheckEmpty"){
        buttonLock.display();
        fill(135, 113, 81);
        textAlign(CENTER);
        textStyle(NORMAL);
        textSize(30);
        text("Du musst zuerst mit Artefakt 1 sprechen.", 585, 2200);
    }
    
    buttonTransparent1.display();
    buttonTransparent2.display();
}

function art3Screen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonBack.display();
    buttonS3.display();
    button1.display();
    
    if(buttonCheck2.state === "pCheck"){
        button2.display();
    }

    if(buttonCheck2.state === "pCheckEmpty"){
        buttonLock.display();
        fill(135, 113, 81);
        textAlign(CENTER);
        textStyle(NORMAL);
        textSize(30);
        text("Du musst zuerst mit Artefakt 2 sprechen.", 585, 2200);
    }
    
    buttonTransparent1.display();
    buttonTransparent2.display();
}

function art4Screen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonBack.display();
    buttonS4.display();
    button1.display();
    
    if(buttonCheck3.state === "pCheck"){
        button2.display();
    }

    if(buttonCheck3.state === "pCheckEmpty"){
        buttonLock.display();
        fill(135, 113, 81);
        textAlign(CENTER);
        textStyle(NORMAL);
        textSize(30);
        text("Du musst zuerst mit Artefakt 3 sprechen.", 585, 2200);
    }
    
    buttonTransparent1.display();
    buttonTransparent2.display();
}

function phoneMenu1Screen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonAccept.display();
    buttonDecline.display();
}

function phoneMenu2Screen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonAccept.display();
    buttonDecline.display();
}

function phoneMenu3Screen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonAccept.display();
    buttonDecline.display();
}

function phoneMenu4Screen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonAccept.display();
    buttonDecline.display();
}

function VideoOM1Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM1, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 600){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM2_3Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM2_3, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 3990){
        buttonAccept.display();
        qButtonsActive = "true";
    }
}

function VideoOM3Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM3, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 2820){
        buttonAccept.display();
        qButtonsActive = "true";
    }
}

function VideoOM4Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM4, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1410){
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM5_7Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM5_7, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 840){
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM6_7Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM6_7, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 510){
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM8_10Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM8_10, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1740){
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM9_10Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM9_10, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1560){
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM11_13Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM11_13, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1050){
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM12_13Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM12_13, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1020){
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM14Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM14, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 990){
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM15Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM15, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 510){
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM16Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM16, 0, 0, 1170, 2532);
    buttonBack.display();

//framceCount tuauschen
    if (frameCount > 1590){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM17_19Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM17_19, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1290){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM18_19Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM18_19, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1320){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM20_22Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM20_22, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 750){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM21_22Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM21_22, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 750){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM23Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM23, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 2460){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM23_24Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM23_24, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 2940){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM24Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM24, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 600){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM11_26Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM11_26, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 660){
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM25_26Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM25_26, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 660){
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM27_29Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM27_29, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1710){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM28_29Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM28_29, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 1770){
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM30_32Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM30_32, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 2400){
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function VideoOM31_32Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    image(VideoOM31_32, 0, 0, 1170, 2532);
    buttonBack.display();

    if (frameCount > 2370){
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(50);
        text("Deine Antwort:", 585, 1600);
        qButtonsActive = "true";
    }
}

function progressScreen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonBack.display();
    buttonName1.display();
    buttonName2.display();
    buttonName3.display();
    buttonName4.display();
    buttonCheck1.display();
    buttonCheck2.display();
    buttonCheck3.display();
    buttonCheck4.display();
}

function settingsScreen(){
    fill(245);
    rect(0, 0, 1170, 2532);
    background.display();
    buttonBack.display();
    button1.display();
}


function mouseClicked(){
    //tutorial1 -> tutorial2
    if (buttonTransparent1.hitTest() && globalState === "tutorial1" && frameCount > 5) {
        globalState = "tutorial2";
        frameCount = 0;
    }

    //tutorial2 -> tutorial3
    if (buttonTransparent1.hitTest() && globalState === "tutorial2" && frameCount > 5) {
        globalState = "tutorial3";
        frameCount = 0;
    }

    //tutorial2 -> tutorial1
    if (buttonTransparent2.hitTest() && globalState === "tutorial2" && frameCount > 5) {
        globalState = "tutorial1";
        frameCount = 0;
    }

    //tutorial3 -> tutorial4
    if (buttonTransparent1.hitTest() && globalState === "tutorial3" && frameCount > 5) {
        globalState = "tutorial4";
        button1.text = "Zum Startbildschirm";
        button1.state = "check";
        frameCount = 0;
    }

    //tutorial3 -> tutorial2
    if (buttonTransparent2.hitTest() && globalState === "tutorial3" && frameCount > 5) {
        globalState = "tutorial2";
        frameCount = 0;
    }

    //tutorial4 -> home
    if (button1.hitTest() && globalState === "tutorial4" && frameCount > 5) {
        globalState = "home";
        frameCount = 0;
        button1.text = "Artefakteliste";
        button1.y = 1560;
        button1.state = "person";
        button2.text = "Meine Fortschritte";
        button2.y = 1810;
        button2.state = "check";
        button3.text = "Einstellungen";
        button3.y = 2060;
        button3.state = "settings";
    }

    //tutorial4 -> tutorial3
    if (buttonTransparent2.hitTest() && globalState === "tutorial4" && frameCount > 5) {
        globalState = "tutorial3";
        frameCount = 0;
    }

    //home -> art1
    if (button1.hitTest() && globalState === "home" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }

    //art1 -> home
    if (buttonBack.hitTest() && globalState === "art1" && frameCount > 5) {
        globalState = "home";
        frameCount = 0;
        button1.text = "Artefakteliste";
        button1.y = 1560;
        button1.state = "person";
        button2.text = "Meine Fortschritte";
        button2.y = 1810;
        button2.state = "check";
        button3.text = "Einstellungen";
        button3.y = 2060;
        button3.state = "settings";
    }

    //art2 -> home
    if (buttonBack.hitTest() && globalState === "art2" && frameCount > 5) {
        globalState = "home";
        frameCount = 0;
        button1.text = "Artefakteliste";
        button1.y = 1560;
        button1.state = "person";
        button2.text = "Meine Fortschritte";
        button2.y = 1810;
        button2.state = "check";
        button3.text = "Einstellungen";
        button3.y = 2060;
        button3.state = "settings";
    }    

    //art3 -> home
    if (buttonBack.hitTest() && globalState === "art3" && frameCount > 5) {
        globalState = "home";
        frameCount = 0;
        button1.text = "Artefakteliste";
        button1.y = 1560;
        button1.state = "person";
        button2.text = "Meine Fortschritte";
        button2.y = 1810;
        button2.state = "check";
        button3.text = "Einstellungen";
        button3.y = 2060;
        button3.state = "settings";
    }
    
    //art4 -> home
    if (buttonBack.hitTest() && globalState === "art4" && frameCount > 5) {
        globalState = "home";
        frameCount = 0;
        button1.text = "Artefakteliste";
        button1.y = 1560;
        button1.state = "person";
        button2.text = "Meine Fortschritte";
        button2.y = 1810;
        button2.state = "check";
        button3.text = "Einstellungen";
        button3.y = 2060;
        button3.state = "settings";
    }    

    //art1 -> progress
    if (buttonS1.hitTest() && globalState === "art1" && frameCount > 5) {
        globalState = "progress";
    }

    //art2 -> progress
    if (buttonS1.hitTest() && globalState === "art2" && frameCount > 5) {
        globalState = "progress";
    }
    
    //art3 -> progress
    if (buttonS1.hitTest() && globalState === "art3" && frameCount > 5) {
        globalState = "progress";
    }
    
    //art4 -> progress
    if (buttonS1.hitTest() && globalState === "art4" && frameCount > 5) {
        globalState = "progress";
    }    

    //art1 -> map
    if (button1.hitTest() && globalState === "art1" && frameCount > 5) {
        window.open("https://goo.gl/maps/WYEp3YWQdCfFHW8m6");
    }

    //art2 -> map
    if (button1.hitTest() && globalState === "art2" && frameCount > 5) {
        window.open("https://goo.gl/maps/rfzX8QGiwZwAJTKB8");
    }
    
    //art3 -> map
    if (button1.hitTest() && globalState === "art3" && frameCount > 5) {
        window.open("https://goo.gl/maps/rBy4LueB2P98CSJHA");
    }
    
    //art4 -> map
    if (button1.hitTest() && globalState === "art4" && frameCount > 5) {
        window.open("https://goo.gl/maps/vdYNcTqkfopSd6Wn8");
    }    

    //art1 -> phoneMenu1
    if (button2.hitTest() && globalState === "art1" && frameCount > 5) {
        globalState = "phoneMenu1";
        frameCount = 0;
    }

    //art2 -> phoneMenu2
    if (button2.hitTest() && globalState === "art2" && buttonCheck1.state === "pCheck" && frameCount > 5) {
        globalState = "phoneMenu2";
        frameCount = 0;
    }

    //art3 -> phoneMenu3
    if (button2.hitTest() && globalState === "art3" && buttonCheck2.state === "pCheck" && frameCount > 5) {
        globalState = "phoneMenu3";
        frameCount = 0;
    }

    //art4 -> phoneMenu4
    if (button2.hitTest() && globalState === "art4" && buttonCheck3.state === "pCheck" && frameCount > 5) {
        globalState = "phoneMenu4";
        frameCount = 0;
    }

    //phoneMenu1 -> art1
    if (buttonDecline.hitTest() && globalState === "phoneMenu1" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }

    //LOCK
    //phoneMenu2 -> art2
    if (buttonDecline.hitTest() && globalState === "phoneMenu2" && frameCount > 5) {
        globalState = "art2";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }
    
    //phoneMenu3 -> art3
    if (buttonDecline.hitTest() && globalState === "phoneMenu3" && frameCount > 5) {
        globalState = "art3";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }
    
    //phoneMenu4 -> art4
    if (buttonDecline.hitTest() && globalState === "phoneMenu4" && frameCount > 5) {
        globalState = "art4";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }    

    //phoneMenu1 -> VideoOM1
    if (buttonAccept.hitTest() && globalState === "phoneMenu1" && frameCount > 5) {
        globalState = "VideoOM1";
        frameCount = 0;
        
        VideoOM1.play();
        
        buttonQ1.text = "Oh ja, erzähl mir mehr über dich!";
        buttonQ2.text = "Was genau sind schrifttragende Artefakte?";

        qButtonsActive = "false";
    }

    //VideoOM1 -> Q1 -> VideoOM3
    if (buttonQ1.hitTest() && globalState === "VideoOM1" && frameCount > 600 && qButtonsActive === "true") {
        globalState = "VideoOM3";
        frameCount = 0;
        
        VideoOM3.play();

        buttonQ1.text = "1555";
        buttonQ2.text = "1955";
        buttonQ3.text = "1755";

        combineState = "VideoOM3&VideoOM2_3";
        qButtonsActive = "false";
    }

    //VideoOM1 -> Q2 -> VideoOM2_3
    if (buttonQ2.hitTest() && globalState === "VideoOM1" && frameCount > 600 && qButtonsActive === "true") {
        globalState = "VideoOM2_3";
        frameCount = 0;
        
        VideoOM2_3.play();
        
        buttonQ1.text = "1555";
        buttonQ2.text = "1955";
        buttonQ3.text = "1755";

        combineState = "VideoOM3&VideoOM2_3";
        qButtonsActive = "false";
    }

    //VideoOM1 -> back -> art1Screen
    if (buttonBack.hitTest() && globalState === "VideoOM1" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM1.stop();
    }



    //VideoOM3 & VideoOM2_3 -> accept -> VideoOM4
    if (buttonAccept.hitTest() && combineState === "VideoOM3&VideoOM2_3" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM4";
        frameCount = 0;
        
        VideoOM4.play();

        combineState = "VideoOM4";
        qButtonsActive = "false";
    }

    //VideoOM3 & VideoOM2_3 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM3&VideoOM2_3" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM3.stop();
        VideoOM2_3.stop();
    }    
    
    

    //VideoOM4 -> Q1 -> VideoOM6_7
    if (buttonQ1.hitTest() && combineState === "VideoOM4" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM6_7";
        frameCount = 0;
        
        VideoOM6_7.play();
        
        buttonQ1.text = "Latein";
        buttonQ2.text = "Italienisch";
        buttonQ3.text = "Griechisch";

        combineState = "VideoOM6_7&VideoOM5_7";
        qButtonsActive = "false";
    }

    //VideoO4 -> Q2 -> VideoOM5_7
    if (buttonQ2.hitTest() && combineState === "VideoOM4" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM5_7";
        frameCount = 0;
        
        VideoOM5_7.play();
        
        buttonQ1.text = "Latein";
        buttonQ2.text = "Italienisch";
        buttonQ3.text = "Griechisch";

        combineState = "VideoOM6_7&VideoOM5_7";
        qButtonsActive = "false";
    }

    //VideoOM4 -> Q3 -> VideoOM5_7
    if (buttonQ3.hitTest() && combineState === "VideoOM4" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM5_7";
        frameCount = 0;
        
        VideoOM5_7.play();
        
        buttonQ1.text = "Latein";
        buttonQ2.text = "Italienisch";
        buttonQ3.text = "Griechisch";

        combineState = "VideoOM6_7&VideoOM5_7";
        qButtonsActive = "false";
    }

    //VideoOM4 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM4" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM4.stop();
    }    



    //VideoOM6_7 & VideoOM5_7 -> Q1 -> VideoOM8_10
    if (buttonQ1.hitTest() && combineState === "VideoOM6_7&VideoOM5_7" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM8_10";
        frameCount = 0;
        
        VideoOM8_10.play();
        
        buttonQ1.text = "Ich verlor meine Sehkraft.";
        buttonQ2.text = "Mein Vater starb.";
        buttonQ3.text = "Herzog Alfonso I. verstarb.";

        combineState = "VideoOM8_10&VideoOM9_10";
        qButtonsActive = "false";
    }

    //VideoOM6_7 & VideoOM5_7 -> Q2 -> VideoOM9_10
    if (buttonQ2.hitTest() && combineState === "VideoOM6_7&VideoOM5_7" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM9_10";
        frameCount = 0;
        
        VideoOM9_10.play();
        
        buttonQ1.text = "Ich verlor meine Sehkraft.";
        buttonQ2.text = "Mein Vater starb.";
        buttonQ3.text = "Herzog Alfonso I. verstarb.";

        combineState = "VideoOM8_10&VideoOM9_10";
        qButtonsActive = "false";
    }

    //VideoOM6_7 & VideoOM5_7 -> Q3 -> VideoOM8_10
    if (buttonQ3.hitTest() && combineState === "VideoOM6_7&VideoOM5_7" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM8_10";
        frameCount = 0;
        
        VideoOM8_10.play();
        
        buttonQ1.text = "Ich verlor meine Sehkraft.";
        buttonQ2.text = "Mein Vater starb.";
        buttonQ3.text = "Herzog Alfonso I. verstarb.";

        combineState = "VideoOM8_10&VideoOM9_10";
        qButtonsActive = "false";
    }    

    //VideoOM6_7 & VideoOM5_7 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM6_7&VideoOM5_7" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM6_7.stop();
        VideoOM5_7.stop();
    }        



    //VideoOM8_10 & VideoOM9_10 -> Q1 -> VideoOM11_13
    if (buttonQ1.hitTest() && combineState === "VideoOM8_10&VideoOM9_10" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM11_13";
        frameCount = 0;
        
        VideoOM11_13.play();
        
        buttonQ1.text = "Zauber mir ein Lächeln ins Gesicht.";

        combineState = "VideoOM11_13&VideoOM12_13";
        qButtonsActive = "false";
    }

    //VideoOM8_10 & VideoOM9_10 -> Q2 -> VideoOM12_13
    if (buttonQ2.hitTest() && combineState === "VideoOM8_10&VideoOM9_10" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM12_13";
        frameCount = 0;
        
        VideoOM12_13.play();
        
        buttonQ1.text = "Zauber mir ein Lächeln ins Gesicht.";

        combineState = "VideoOM11_13&VideoOM12_13";
        qButtonsActive = "false";
    }

    //VideoOM8_10 & VideoOM9_10 -> Q3 -> VideoOM11_13
    if (buttonQ3.hitTest() && combineState === "VideoOM8_10&VideoOM9_10" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM11_13";
        frameCount = 0;
        
        VideoOM11_13.play();
        
        buttonQ1.text = "Zauber mir ein Lächeln ins Gesicht.";

        combineState = "VideoOM11_13&VideoOM12_13";
        qButtonsActive = "false";
    }

    //VideoOM8_10 & VideoOM9_10 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM8_10&VideoOM9_10" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM8_10.stop();
        VideoOM9_10.stop();
    }   



    //VideoOM11_13 & VideoOM12_13 -> Q1 -> VideoOM14
    if (buttonQ1.hitTest() && combineState === "VideoOM11_13&VideoOM12_13" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM14";
        frameCount = 0;
        
        VideoOM14.play();
        
        buttonQ1.text = "Sende Olympia Kraft und Hoffnung.";

        combineState = "VideoOM14";
        qButtonsActive = "false";
    }

    //VideoOM11_13 & VideoOM12_13 -> Q2 -> VideoOM14
    if (buttonQ1.hitTest() && combineState === "VideoOM11_13&VideoOM12_13" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM14";
        frameCount = 0;
        
        VideoOM14.play();
        
        buttonQ1.text = "Sende Olympia Kraft und Hoffnung.";

        combineState = "VideoOM14";
        qButtonsActive = "false";
    }
    
    //VideoOM11_13 & VideoOM12_13 -> Q3 -> VideoOM14
    if (buttonQ1.hitTest() && combineState === "VideoOM11_13&VideoOM12_13" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM14";
        frameCount = 0;
        
        VideoOM14.play();
        
        buttonQ1.text = "Sende Olympia Kraft und Hoffnung.";

        combineState = "VideoOM14";
        qButtonsActive = "false";
    }

    //VideoOM11_13 & VideoOM12_13 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM11_13&VideoOM12_13" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM11_13.stop();
        VideoOM12_13.stop();
    }   



    //VideoOM14 -> Q1 -> VideoOM15
    if (buttonQ1.hitTest() && combineState === "VideoOM14" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM15";
        frameCount = 0;
        
        VideoOM15.play();
        
        buttonQ1.text = "Sende Applaus.";

        combineState = "VideoOM15";
        qButtonsActive = "false";
    }    

    //VideoOM14 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM14" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM14.stop();
    }  
    
    

    //VideoOM15 -> Q1 -> VideoOM16
    if (buttonQ1.hitTest() && combineState === "VideoOM15" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM16";
        frameCount = 0;
        
        VideoOM16.play();
        
        buttonQ1.text = "Ja.";
        buttonQ2.text = "Nein.";

        combineState = "VideoOM16";
        qButtonsActive = "false";
    }    

    //VideoOM15 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM15" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM15.stop();
    }  



     //VideoOM16 -> Q1 -> VideoOM17_19
     if (buttonQ1.hitTest() && combineState === "VideoOM16" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM17_19";
        frameCount = 0;
        
        VideoOM17_19.play();
        
        buttonQ1.text = "Ja.";
        buttonQ2.text = "Nein.";

        combineState = "VideoOM17_19&VideoOM18_19";
        qButtonsActive = "false";
    }   


     //VideoOM16 -> Q2 -> VideoOM18_19
     if (buttonQ2.hitTest() && combineState === "VideoOM16" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM18_19";
        frameCount = 0;
        
        VideoOM18_19.play();
        
        buttonQ1.text = "Ja.";
        buttonQ2.text = "Nein.";

        combineState = "VideoOM17_19&VideoOM18_19";
        qButtonsActive = "false";
    }   

    //VideoOM16 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM16" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM16.stop();
    }  



     //VideoOM17_19 & VideoOM18_19 -> Q1 -> VideoOM20_22
     if (buttonQ1.hitTest() && combineState === "VideoOM17_19&VideoOM18_19" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM20_22";
        frameCount = 0;
        
        VideoOM20_22.play();
        
        buttonQ1.text = "Lateinische Schrift auf Deutsch übersetzen.";
        buttonQ2.text = "Überspringen.";

        combineState = "VideoOM20_22&VideoOM21_22";
        qButtonsActive = "false";
    }   

     //VideoOM17_19 & VideoOM18_19 -> Q2 -> VideoOM21_22
     if (buttonQ2.hitTest() && combineState === "VideoOM17_19&VideoOM18_19" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM21_22";
        frameCount = 0;
        
        VideoOM21_22.play();
        
        buttonQ1.text = "Lateinische Schrift auf Deutsch übersetzen.";
        buttonQ2.text = "Überspringen.";

        combineState = "VideoOM20_22&VideoOM21_22";
        qButtonsActive = "false";
    }   

    //VideoOM17_19 & VideoOM18_19 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM17_19&VideoOM18_19" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM17_19.stop();
        VideoOM18_19.stop();
    }   



     //VideoOM20_22 & VideoOM21_22 -> Q1 -> VideoOM23
     if (buttonQ1.hitTest() && combineState === "VideoOM20_22&VideoOM21_22" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM23";
        frameCount = 0;
        
        VideoOM23.play();
        
        buttonQ1.text = "Ja bitte.";
        buttonQ2.text = "Nein danke.";

        combineState = "VideoOM23";
        qButtonsActive = "false";
    }   

     //VideoOM23 -> Q1 -> VideoOM23_24
     if (buttonQ1.hitTest() && combineState === "VideoOM23" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM23_24";
        frameCount = 0;
        
        VideoOM23_24.play();
        
        buttonQ1.text = "Dauerhaftigkeit und symbolische Funktion.";
        buttonQ2.text = "Art und Weise des Handwerks.";

        combineState = "VideoOM23_24&VideoOM24";
        qButtonsActive = "false";
    }   

     //VideoOM23 -> Q2 -> VideoOM24
     if (buttonQ2.hitTest() && combineState === "VideoOM23" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM24";
        frameCount = 0;
        
        VideoOM24.play();
        
        buttonQ1.text = "Dauerhaftigkeit und symbolische Funktion.";
        buttonQ2.text = "Art und Weise des Handwerks.";

        combineState = "VideoOM23_24&VideoOM24";
        qButtonsActive = "false";
    }   
    
     //VideoOM20_22 & VideoOM21_22 -> Q2 -> VideoOM24
     if (buttonQ2.hitTest() && combineState === "VideoOM20_22&VideoOM21_22" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM24";
        frameCount = 0;
        
        VideoOM24.play();
        
        buttonQ1.text = "Dauerhaftigkeit und symbolische Funktion.";
        buttonQ2.text = "Art und Weise des Handwerks.";

        combineState = "VideoOM23_24&VideoOM24";
        qButtonsActive = "false";
    }   

    //VideoOM20_22 & VideoOM21_22 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM20_22&VideoOM21_22" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM20_22.stop();
        VideoOM21_22.stop();
    }       

    //VideoOM23 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM23" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM23.stop();
    }           



     //VideoOM23_24 & VideoOM24 -> Q1 -> VideoOM11_26
     if (buttonQ1.hitTest() && combineState === "VideoOM23_24&VideoOM24" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM11_26";
        frameCount = 0;
        
        VideoOM11_26.play();
        
        buttonQ1.text = "Granit.";
        buttonQ2.text = "Marmor.";
        buttonQ3.text = "Quarz.";

        combineState = "VideoOM11_26&VideoOM25_26";
        qButtonsActive = "false";
    }   

     //VideoOM23_24 & VideoOM24 -> Q2 -> VideoOM25_26
     if (buttonQ2.hitTest() && combineState === "VideoOM23_24&VideoOM24" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM25_26";
        frameCount = 0;
        
        VideoOM25_26.play();
        
        buttonQ1.text = "Granit.";
        buttonQ2.text = "Marmor.";
        buttonQ3.text = "Quarz.";

        combineState = "VideoOM11_26&VideoOM25_26";
        qButtonsActive = "false";
    }   

    //VideoOM23_24 & VideoOM24 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM23_24&VideoOM24" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM23_24.stop();
        VideoOM24.stop();
    }           



     //VideoOM11_26 & VideoOM25_26 -> Q1 -> VideoOM28_29
     if (buttonQ1.hitTest() && combineState === "VideoOM11_26&VideoOM25_26" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM28_29";
        frameCount = 0;
        
        VideoOM28_29.play();
        
        buttonQ1.text = "Evangelisch.";
        buttonQ2.text = "Katholisch.";

        combineState = "VideoOM27_29&VideoOM28_29";
        qButtonsActive = "false";
    }       

     //VideoOM11_26 & VideoOM25_26 -> Q2 -> VideoOM27_29
     if (buttonQ2.hitTest() && combineState === "VideoOM11_26&VideoOM25_26" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM27_29";
        frameCount = 0;
        
        VideoOM27_29.play();
        
        buttonQ1.text = "Evangelisch.";
        buttonQ2.text = "Katholisch.";

        combineState = "VideoOM27_29&VideoOM28_29";
        qButtonsActive = "false";
    }           

     //VideoOM11_26 & VideoOM25_26 -> Q3 -> VideoOM28_29
     if (buttonQ3.hitTest() && combineState === "VideoOM11_26&VideoOM25_26" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM28_29";
        frameCount = 0;
        
        VideoOM28_29.play();
        
        buttonQ1.text = "Evangelisch.";
        buttonQ2.text = "Katholisch.";

        combineState = "VideoOM27_29&VideoOM28_29";
        qButtonsActive = "false";
    }     

    //VideoOM11_26 & VideoOM25_26 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM11_26&VideoOM25_26" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM11_26.stop();
        VideoOM25_26.stop();
    }  



     //VideoOM27_29 & VideoOM28_29 -> Q1 -> VideoOM31_32
     if (buttonQ1.hitTest() && combineState === "VideoOM27_29&VideoOM28_29" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM31_32";
        frameCount = 0;
        
        VideoOM31_32.play();

        buttonQ1.text = "Auf Wiedersehen!";

        combineState = "VideoOM30_32&VideoOM31_32";
        qButtonsActive = "false";
    }     

     //VideoOM27_29 & VideoOM28_29 -> Q2 -> VideoOM30_32
     if (buttonQ2.hitTest() && combineState === "VideoOM27_29&VideoOM28_29" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "VideoOM30_32";
        frameCount = 0;
        
        VideoOM30_32.play();

        buttonQ1.text = "Auf Wiedersehen!";

        combineState = "VideoOM30_32&VideoOM31_32";
        qButtonsActive = "false";
    }     

    //VideoOM27_29 & VideoOM28_29 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM27_29&VideoOM28_29" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM27_29.stop();
        VideoOM28_29.stop();
    }  
        


     //VideoOM30_32 & VideoOM31_32 -> Q1 -> progress
     if (buttonQ1.hitTest() && combineState === "VideoOM30_32&VideoOM31_32" && frameCount > 5 && qButtonsActive === "true") {
        globalState = "progress";
        frameCount = 0;
        combineState = "null";
        buttonCheck1.state = "pCheck";
        qButtonsActive = "false";
    }        

    //VideoOM30_32 & VideoOM31_32 -> back -> art1Screen
    if (buttonBack.hitTest() && combineState === "VideoOM30_32&VideoOM31_32" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";

        VideoOM30_32.stop();
        VideoOM31_32.stop();
    }



    //art1 -> art2
    if (buttonTransparent1.hitTest() && globalState === "art1" && frameCount > 5) {
        globalState = "art2";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }

    //art2 -> art3
    if (buttonTransparent1.hitTest() && globalState === "art2" && frameCount > 5) {
        globalState = "art3";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }

    //art3 -> art4
    if (buttonTransparent1.hitTest() && globalState === "art3" && frameCount > 5) {
        globalState = "art4";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }

    //art4 -> art3
    if (buttonTransparent2.hitTest() && globalState === "art4" && frameCount > 5) {
        globalState = "art3";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }

    //art3 -> art2
    if (buttonTransparent2.hitTest() && globalState === "art3" && frameCount > 5) {
        globalState = "art2";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }

    //art2 -> art1
    if (buttonTransparent2.hitTest() && globalState === "art2" && frameCount > 5) {
        globalState = "art1";
        frameCount = 0;
        button1.text = "Kartennavigation starten";
        button1.y = 1750;
        button1.state = "map";
        button2.text = "Artefakt anrufen";
        button2.y = 2000;
        button2.state = "call";
    }

    //home -> progress
    if (button2.hitTest() && globalState === "home" && frameCount > 5) {
        globalState = "progress";
        frameCount = 0;
    }

    //progress -> home
    if (buttonBack.hitTest() && globalState === "progress" && frameCount > 5) {
        globalState = "home";
        frameCount = 0;
        button1.text = "Artefakteliste";
        button1.y = 1560;
        button1.state = "person";
        button2.text = "Meine Fortschritte";
        button2.y = 1810;
        button2.state = "check";
        button3.text = "Einstellungen";
        button3.y = 2060;
        button3.state = "settings";
    }

    //home -> settings
    if (button3.hitTest() && globalState === "home" && frameCount > 5) {
        globalState = "settings";
        frameCount = 0;
        button1.text = "App zurücksetzen";
        button1.y = 700;
        button1.state = "default";
    }

    //settings -> home
    if (buttonBack.hitTest() && globalState === "settings" && frameCount > 5) {
        globalState = "home";
        frameCount = 0;
        button1.text = "Artefakteliste";
        button1.y = 1560;
        button1.state = "person";
        button2.text = "Meine Fortschritte";
        button2.y = 1810;
        button2.state = "check";
        button3.text = "Einstellungen";
        button3.y = 2060;
        button3.state = "settings";    
    }

    //settings -> reset
    if (button1.hitTest() && globalState === "settings" && frameCount > 5) {
        globalState = "home";
        frameCount = 0;
        button1.text = "Artefakteliste";
        button1.y = 1560;
        button1.state = "person";
        button2.text = "Meine Fortschritte";
        button2.y = 1810;
        button2.state = "check";
        button3.text = "Einstellungen";
        button3.y = 2060;
        button3.state = "settings";   
        buttonCheck1.state = "pCheckEmpty";
        buttonCheck2.state = "pCheckEmpty";
        buttonCheck3.state = "pCheckEmpty";
        buttonCheck4.state = "pCheckEmpty";
    }
}
      

function draw(){
    textFont(poppins);

    if(globalState === "tutorial1"){
        tutorialScreen();
        background.state = "tut1";
    }

    if(globalState === "tutorial2"){
        tutorialScreen();
        background.state = "tut2";
    }

    if(globalState === "tutorial3"){
        tutorialScreen();
        background.state = "tut3";
    }

    if(globalState === "tutorial4"){
        tutorialScreen();
        background.state = "tut4";
    }

    if(globalState === "home"){
        homeScreen();
        background.state = "home";
    }

    if(globalState === "progress"){
        progressScreen();
        background.state = "progress";
    }

    if(globalState === "art1"){
        art1Screen();
        background.state = "art1";
    }

    if(globalState === "art2"){
        art2Screen();
        background.state = "art2";
    }

    if(globalState === "art3"){
        art3Screen();
        background.state = "art3";
    }

    if(globalState === "art4"){
        art4Screen();
        background.state = "art4";
    }

    if(globalState === "phoneMenu1"){
        phoneMenu1Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "phoneMenu2"){
        phoneMenu2Screen();
        background.state = "phoneMenu2";
    }

    if(globalState === "phoneMenu3"){
        phoneMenu3Screen();
        background.state = "phoneMenu3";
    }

    if(globalState === "phoneMenu4"){
        phoneMenu4Screen();
        background.state = "phoneMenu4";
    }

    if(globalState === "VideoOM1"){
        VideoOM1Screen();
    }

    if(globalState === "VideoOM2_3"){
        VideoOM2_3Screen();
    }

    if(globalState === "VideoOM3"){
        VideoOM3Screen();
    }

    if(globalState === "VideoOM4"){
        VideoOM4Screen();
    }

    if(globalState === "VideoOM5_7"){
        VideoOM5_7Screen();
    }

    if(globalState === "VideoOM6_7"){
        VideoOM6_7Screen();
    }

    if(globalState === "VideoOM8_10"){
        VideoOM8_10Screen();
    }

    if(globalState === "VideoOM9_10"){
        VideoOM9_10Screen();
    }

    if(globalState === "VideoOM11_13"){
        VideoOM11_13Screen();
    }

    if(globalState === "VideoOM12_13"){
        VideoOM12_13Screen();
    }

    if(globalState === "VideoOM14"){
        VideoOM14Screen();
    }

    if(globalState === "VideoOM15"){
        VideoOM15Screen();
    }

    if(globalState === "VideoOM16"){
        VideoOM16Screen();
    }

    if(globalState === "VideoOM17_19"){
        VideoOM17_19Screen();
    }

    if(globalState === "VideoOM18_19"){
        VideoOM18_19Screen();
    }

    if(globalState === "VideoOM20_22"){
        VideoOM20_22Screen();
    }

    if(globalState === "VideoOM21_22"){
        VideoOM21_22Screen();
    }

    if(globalState === "VideoOM23"){
        VideoOM23Screen();
    }

    if(globalState === "VideoOM23_24"){
        VideoOM23_24Screen();
    }

    if(globalState === "VideoOM24"){
        VideoOM24Screen();
    }

    if(globalState === "VideoOM11_26"){
        VideoOM11_26Screen();
    }

    if(globalState === "VideoOM25_26"){
        VideoOM25_26Screen();
    }

    if(globalState === "VideoOM27_29"){
        VideoOM27_29Screen();
    }

    if(globalState === "VideoOM28_29"){
        VideoOM28_29Screen();
    }

    if(globalState === "VideoOM30_32"){
        VideoOM30_32Screen();
    }

    if(globalState === "VideoOM31_32"){
        VideoOM31_32Screen();
    }
    
    if(globalState === "settings"){
        settingsScreen();
        background.state = "settings";
    }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
