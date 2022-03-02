import Button from "./classes/button.js";
import Background from "./classes/background.js";
import { 
    VideoOM1, 
    VideoOM2, 
    VideoOM3, 
    VideoOM4, 
    VideoOM5, 
    VideoOM6, 
    VideoOM7, 
    VideoOM8, 
    VideoOM9, 
    VideoOM10, 
    VideoOM11, 
    VideoOM12, 
    VideoOM13, 
    VideoOM14, 
    VideoOM15, 
    VideoOM16, 
    VideoOM17, 
    VideoOM18, 
    VideoOM19, 
    VideoOM20, 
    VideoOM21, 
    VideoOM22, 
    VideoOM23, 
    VideoOM24, 
    VideoOM25, 
    VideoOM26, 
    VideoOM27, 
    VideoOM28,
    VideoOM29, 
    VideoOM30, 
    VideoOM31, 
    VideoOM32,  
    VideoOMX,
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
        textFont("Helvetica");
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
        textFont("Helvetica");
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
        textFont("Helvetica");
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

//Hier richtiges Video rein image(VideoRICHTIG)
//2x Framecount hoch aufs richtige, hier 810 - Video länge mal 30
    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM1Screen", 585, 1600);
    }

    //"Deine Antwort:" in text überall einsetzen
}

function VideoOM2_3_4Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM2_3_4Screen:", 585, 1600);
    }
}

function VideoOM3_4Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM3_4Screen:", 585, 1600);
    }
}

function VideoOM5_7Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM5_7Screen:", 585, 1600);
    }
}

function VideoOM6_7Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM6_7Screen:", 585, 1600);
    }
}

function VideoOM8_10Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM8_10Screen:", 585, 1600);
    }
}

function VideoOM9_10Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM9_10Screen:", 585, 1600);
    }
}

function VideoOM11_13Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM11_13Screen:", 585, 1600);
    }
}

function VideoOM12_13Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM12_13Screen:", 585, 1600);
    }
}

function VideoOM14Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM14Screen:", 585, 1600);
    }
}

function VideoOM15Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM15Screen:", 585, 1600);
    }
}

function VideoOM16Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM16Screen:", 585, 1600);
    }
}

function VideoOM17_19Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM17_19Screen:", 585, 1600);
    }
}

function VideoOM18_19Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM18_19Screen:", 585, 1600);
    }
}

function VideoOM20_22Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM20_22Screen:", 585, 1600);
    }
}

function VideoOM21_22Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM21_22Screen:", 585, 1600);
    }
}

function VideoOM23Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM23Screen:", 585, 1600);
    }
}

function VideoOM23_24Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM23_24Screen:", 585, 1600);
    }
}

function VideoOM24Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM24Screen:", 585, 1600);
    }
}

function VideoOM11_26Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM11_26Screen:", 585, 1600);
    }
}

function VideoOM25_26Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        buttonQ3.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM25_26Screen:", 585, 1600);
    }
}

function VideoOM27_29Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM27_29Screen:", 585, 1600);
    }
}

function VideoOM28_29Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM28_29Screen:", 585, 1600);
    }
}

function VideoOM30_32Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM30_32Screen:", 585, 1600);
    }
}

function VideoOM31_32Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount < 60){
        image(VideoOMX, 0, 226, 1170, 2080);
    }

    if (frameCount > 60){
        background.display();
        buttonQ1.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("VideoOM31_32Screen:", 585, 1600);
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































    //VIDEO BUTTON
    //phoneMenu1 -> VideoOM1
    if (buttonAccept.hitTest() && globalState === "phoneMenu1" && frameCount > 5) {
        globalState = "VideoOM1";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Oh ja, erzähl mir mehr über dich!";
        buttonQ2.text = "Was genau sind schrifttragende Artefakte?";
    }

    //VideoOM1 -> Q1 -> VideoOM3_4
    if (buttonQ1.hitTest() && globalState === "VideoOM1" && frameCount > 60) {
        globalState = "VideoOM3_4";
        frameCount = 0;
        
        VideoOMX.play();

        buttonQ1.text = "1555";
        buttonQ2.text = "1955";
        buttonQ3.text = "1755";

        combineState = "VideoOM3_4&VideoOM2_3_4";
    }

    //VideoOM1 -> Q2 -> VideoOM2_3_4
    if (buttonQ2.hitTest() && globalState === "VideoOM1" && frameCount > 60) {
        globalState = "VideoOM2_3_4";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "1555";
        buttonQ2.text = "1955";
        buttonQ3.text = "1755";

        combineState = "VideoOM3_4&VideoOM2_3_4";
    }





    //VideoOM3_4 & VideoOM2_3_4 -> Q1 -> VideoOM6_7
    if (buttonQ1.hitTest() && combineState === "VideoOM3_4&VideoOM2_3_4" && frameCount > 5) {
        globalState = "VideoOM6_7";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Latein";
        buttonQ2.text = "Italienisch";
        buttonQ3.text = "Griechisch";

        combineState = "VideoOM6_7&VideoOM5_7";
    }

    //VideoOM3_4 & VideoOM2_3_4 -> Q2 -> VideoOM5_7
    if (buttonQ2.hitTest() && combineState === "VideoOM3_4&VideoOM2_3_4" && frameCount > 5) {
        globalState = "VideoOM5_7";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Latein";
        buttonQ2.text = "Italienisch";
        buttonQ3.text = "Griechisch";

        combineState = "VideoOM6_7&VideoOM5_7";
    }

        //VideoOM3_4 & VideoOM2_3_4 -> Q3 -> VideoOM5_7
    if (buttonQ3.hitTest() && combineState === "VideoOM3_4&VideoOM2_3_4" && frameCount > 5) {
        globalState = "VideoOM5_7";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Latein";
        buttonQ2.text = "Italienisch";
        buttonQ3.text = "Griechisch";

        combineState = "VideoOM6_7&VideoOM5_7";
    }





    //VideoOM6_7 & VideoOM5_7 -> Q1 -> VideoOM8_10
    if (buttonQ1.hitTest() && combineState === "VideoOM6_7&VideoOM5_7" && frameCount > 5) {
        globalState = "VideoOM8_10";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Ich verlor meine Sehkraft.";
        buttonQ2.text = "Mein Vater starb.";
        buttonQ3.text = "Herzog Alfonso I. verstarb.";

        combineState = "VideoOM8_10&VideoOM9_10";
    }

    //VideoOM6_7 & VideoOM5_7 -> Q2 -> VideoOM9_10
    if (buttonQ2.hitTest() && combineState === "VideoOM6_7&VideoOM5_7" && frameCount > 5) {
        globalState = "VideoOM8_10";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Ich verlor meine Sehkraft.";
        buttonQ2.text = "Mein Vater starb.";
        buttonQ3.text = "Herzog Alfonso I. verstarb.";

        combineState = "VideoOM8_10&VideoOM9_10";
    }

    //VideoOM6_7 & VideoOM5_7 -> Q3 -> VideoOM9_10
    if (buttonQ3.hitTest() && combineState === "VideoOM6_7&VideoOM5_7" && frameCount > 5) {
        globalState = "VideoOM9_10";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Ich verlor meine Sehkraft.";
        buttonQ2.text = "Mein Vater starb.";
        buttonQ3.text = "Herzog Alfonso I. verstarb.";

        combineState = "VideoOM8_10&VideoOM9_10";
    }    






    //VideoOM8_10 & VideoOM9_10 -> Q1 -> VideoOM11_13
    if (buttonQ1.hitTest() && combineState === "VideoOM8_10&VideoOM9_10" && frameCount > 5) {
        globalState = "VideoOM11_13";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Zauber mir ein Lächeln ins Gesicht.";

        combineState = "VideoOM11_13&VideoOM12_13";
    }

    //VideoOM8_10 & VideoOM9_10 -> Q2 -> VideoOM12_13
    if (buttonQ2.hitTest() && combineState === "VideoOM8_10&VideoOM9_10" && frameCount > 5) {
        globalState = "VideoOM12_13";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Zauber mir ein Lächeln ins Gesicht.";

        combineState = "VideoOM11_13&VideoOM12_13";
    }

    //VideoOM8_10 & VideoOM9_10 -> Q3 -> VideoOM11_13
    if (buttonQ3.hitTest() && combineState === "VideoOM8_10&VideoOM9_10" && frameCount > 5) {
        globalState = "VideoOM11_13";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Zauber mir ein Lächeln ins Gesicht.";

        combineState = "VideoOM11_13&VideoOM12_13";
    }






    //VideoOM11_13 & VideoOM12_13 -> Q1 -> VideoOM14
    if (buttonQ1.hitTest() && combineState === "VideoOM11_13&VideoOM12_13" && frameCount > 5) {
        globalState = "VideoOM14";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Sende Olympia Kraft und Hoffnung.";

        combineState = "VideoOM14";
    }

    //VideoOM11_13 & VideoOM12_13 -> Q2 -> VideoOM14
    if (buttonQ1.hitTest() && combineState === "VideoOM11_13&VideoOM12_13" && frameCount > 5) {
        globalState = "VideoOM14";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Sende Olympia Kraft und Hoffnung.";

        combineState = "VideoOM14";
    }
    
    //VideoOM11_13 & VideoOM12_13 -> Q3 -> VideoOM14
    if (buttonQ1.hitTest() && combineState === "VideoOM11_13&VideoOM12_13" && frameCount > 5) {
        globalState = "VideoOM14";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Sende Olympia Kraft und Hoffnung.";

        combineState = "VideoOM14";
    }






    //VideoOM14 -> Q1 -> VideoOM15
    if (buttonQ1.hitTest() && combineState === "VideoOM14" && frameCount > 5) {
        globalState = "VideoOM15";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Sende Applaus.";

        combineState = "VideoOM15";
    }    

    //VideoOM15 -> Q1 -> VideoOM16
    if (buttonQ1.hitTest() && combineState === "VideoOM15" && frameCount > 5) {
        globalState = "VideoOM16";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Ja.";
        buttonQ2.text = "Nein.";

        combineState = "VideoOM16";
    }    





     //VideoOM16 -> Q1 -> VideoOM17_19
     if (buttonQ1.hitTest() && combineState === "VideoOM16" && frameCount > 5) {
        globalState = "VideoOM17_19";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Ja.";
        buttonQ2.text = "Nein.";

        combineState = "VideoOM17_19&VideoOM18_19";
    }   


     //VideoOM16 -> Q2 -> VideoOM18_19
     if (buttonQ2.hitTest() && combineState === "VideoOM16" && frameCount > 5) {
        globalState = "VideoOM18_19";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Ja.";
        buttonQ2.text = "Nein.";

        combineState = "VideoOM17_19&VideoOM18_19";
    }   






     //VideoOM17_19 & VideoOM18_19 -> Q1 -> VideoOM20_22
     if (buttonQ1.hitTest() && combineState === "VideoOM17_19&VideoOM18_19" && frameCount > 5) {
        globalState = "VideoOM20_22";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Lateinische Schrift auf Deutsch übersetzen.";
        buttonQ2.text = "Überspringen.";

        combineState = "VideoOM20_22&VideoOM21_22";
    }   

     //VideoOM17_19 & VideoOM18_19 -> Q2 -> VideoOM21_22
     if (buttonQ2.hitTest() && combineState === "VideoOM17_19&VideoOM18_19" && frameCount > 5) {
        globalState = "VideoOM21_22";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Lateinische Schrift auf Deutsch übersetzen.";
        buttonQ2.text = "Überspringen.";

        combineState = "VideoOM20_22&VideoOM21_22";
    }   





     //VideoOM20_22 & VideoOM21_22 -> Q1 -> VideoOM23
     if (buttonQ1.hitTest() && combineState === "VideoOM20_22&VideoOM21_22" && frameCount > 5) {
        globalState = "VideoOM23";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Ja bitte.";
        buttonQ2.text = "Nein danke.";

        combineState = "VideoOM23";
    }   

     //VideoOM23 -> Q1 -> VideoOM23_24
     if (buttonQ1.hitTest() && combineState === "VideoOM23" && frameCount > 5) {
        globalState = "VideoOM23_24";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Dauerhaftigkeit und symbolische Funktion.";
        buttonQ2.text = "Art und Weise des Handwerks.";

        combineState = "VideoOM23_24&VideoOM24";
    }   

     //VideoOM23 -> Q2 -> VideoOM24
     if (buttonQ2.hitTest() && combineState === "VideoOM23" && frameCount > 5) {
        globalState = "VideoOM24";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Dauerhaftigkeit und symbolische Funktion.";
        buttonQ2.text = "Art und Weise des Handwerks.";

        combineState = "VideoOM23_24&VideoOM24";
    }   
    
     //VideoOM20_22 & VideoOM21_22 -> Q2 -> VideoOM24
     if (buttonQ2.hitTest() && combineState === "VideoOM20_22&VideoOM21_22" && frameCount > 5) {
        globalState = "VideoOM24";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Dauerhaftigkeit und symbolische Funktion.";
        buttonQ2.text = "Art und Weise des Handwerks.";

        combineState = "VideoOM23_24&VideoOM24";
    }   




     //VideoOM23_24 & VideoOM24 -> Q1 -> VideoOM11_26
     if (buttonQ1.hitTest() && combineState === "VideoOM23_24&VideoOM24" && frameCount > 5) {
        globalState = "VideoOM11_26";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Granit.";
        buttonQ2.text = "Marmor.";
        buttonQ3.text = "Quarz.";

        combineState = "VideoOM11_26&VideoOM25_26";
    }   

     //VideoOM23_24 & VideoOM24 -> Q2 -> VideoOM25_26
     if (buttonQ2.hitTest() && combineState === "VideoOM23_24&VideoOM24" && frameCount > 5) {
        globalState = "VideoOM25_26";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Granit.";
        buttonQ2.text = "Marmor.";
        buttonQ3.text = "Quarz.";

        combineState = "VideoOM11_26&VideoOM25_26";
    }   





     //VideoOM11_26 & VideoOM25_26 -> Q1 -> VideoOM28_29
     if (buttonQ1.hitTest() && combineState === "VideoOM11_26&VideoOM25_26" && frameCount > 5) {
        globalState = "VideoOM28_29";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Evangelisch.";
        buttonQ2.text = "Katholisch.";

        combineState = "VideoOM27_29&VideoOM28_29";
    }       

     //VideoOM11_26 & VideoOM25_26 -> Q2 -> VideoOM27_29
     if (buttonQ2.hitTest() && combineState === "VideoOM11_26&VideoOM25_26" && frameCount > 5) {
        globalState = "VideoOM27_29";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Evangelisch.";
        buttonQ2.text = "Katholisch.";

        combineState = "VideoOM27_29&VideoOM28_29";
    }           

     //VideoOM11_26 & VideoOM25_26 -> Q3 -> VideoOM28_29
     if (buttonQ3.hitTest() && combineState === "VideoOM11_26&VideoOM25_26" && frameCount > 5) {
        globalState = "VideoOM28_29";
        frameCount = 0;
        
        VideoOMX.play();
        
        buttonQ1.text = "Evangelisch.";
        buttonQ2.text = "Katholisch.";

        combineState = "VideoOM27_29&VideoOM28_29";
    }     




     //VideoOM27_29 & VideoOM28_29 -> Q1 -> VideoOM31_32
     if (buttonQ1.hitTest() && combineState === "VideoOM27_29&VideoOM28_29" && frameCount > 5) {
        globalState = "VideoOM31_32";
        frameCount = 0;
        
        VideoOMX.play();

        buttonQ1.text = "Auf Wiedersehen!";

        combineState = "VideoOM30_32&VideoOM31_32";
    }     

     //VideoOM27_29 & VideoOM28_29 -> Q2 -> VideoOM30_32
     if (buttonQ2.hitTest() && combineState === "VideoOM27_29&VideoOM28_29" && frameCount > 5) {
        globalState = "VideoOM30_32";
        frameCount = 0;
        
        VideoOMX.play();

        buttonQ1.text = "Auf Wiedersehen!";

        combineState = "VideoOM30_32&VideoOM31_32";
    }     



     //VideoOM30_32 & VideoOM31_32 -> Q1 -> progress
     if (buttonQ1.hitTest() && combineState === "VideoOM30_32&VideoOM31_32" && frameCount > 5) {
        globalState = "progress";
        frameCount = 0;
        combineState = "null";
        buttonCheck1.state = "pCheck";
    }        

    /*
    if (buttonQ2.hitTest() && globalState === "call1" && frameCount > 450) {
        globalState = "progress";
        frameCount = 0;
        buttonCheck1.state = "pCheck";
    }
    */



























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
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM2_3_4"){
        VideoOM2_3_4Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM3_4"){
        VideoOM3_4Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM5_7"){
        VideoOM5_7Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM6_7"){
        VideoOM6_7Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM8_10"){
        VideoOM8_10Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM9_10"){
        VideoOM9_10Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM11_13"){
        VideoOM11_13Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM12_13"){
        VideoOM12_13Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM14"){
        VideoOM14Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM15"){
        VideoOM15Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM16"){
        VideoOM16Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM17_19"){
        VideoOM17_19Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM18_19"){
        VideoOM18_19Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM20_22"){
        VideoOM20_22Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM21_22"){
        VideoOM21_22Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM23"){
        VideoOM23Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM23_24"){
        VideoOM23_24Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM24"){
        VideoOM24Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM11_26"){
        VideoOM11_26Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM25_26"){
        VideoOM25_26Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM27_29"){
        VideoOM27_29Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM28_29"){
        VideoOM28_29Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM30_32"){
        VideoOM30_32Screen();
        background.state = "phoneMenu1";
    }

    if(globalState === "VideoOM31_32"){
        VideoOM31_32Screen();
        background.state = "phoneMenu1";
    }





    
    if(globalState === "settings"){
        settingsScreen();
        background.state = "settings";
    }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
