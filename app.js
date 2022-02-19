import Button from "./classes/button.js";
import Background from "./classes/background.js";
import { call1, call2, preload } from "./preload.js";

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
let buttonQ1 = new Button(120, 1900, 940, 180, 1, 50, color(0, 0, 0), "", "q", images);
let buttonQ2 = new Button(120, 2100, 940, 180, 1, 50, color(0, 0, 0), "", "q", images);


let globalState = "tutorial1";

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
    button2.display();
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
    button2.display();
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
    button2.display();
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

function phoneCall1Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount > 450){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("Wie geht es dir heute?", 585, 1800);
    }
}

function phoneCall2Screen(){
    fill(10);
    rect(0, 0, 1170, 2532);

    if (frameCount > 450){
        background.display();
        buttonQ1.display();
        buttonQ2.display();
        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(50);
        text("Wie geht es dir heute?", 585, 1800);
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
    if (button2.hitTest() && globalState === "art2" && frameCount > 5) {
        globalState = "phoneMenu2";
        frameCount = 0;
    }

    //art3 -> phoneMenu3
    if (button2.hitTest() && globalState === "art3" && frameCount > 5) {
        globalState = "phoneMenu3";
        frameCount = 0;
    }

    //art4 -> phoneMenu4
    if (button2.hitTest() && globalState === "art4" && frameCount > 5) {
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
    //phoneMenu1 -> call1
    if (buttonAccept.hitTest() && globalState === "phoneMenu1" && frameCount > 5) {
        globalState = "call1";
        frameCount = 0;
        
        call1.play();
        
        buttonQ1.text = "Gut";
        buttonQ2.text = "Schlecht";
    }

    //call1 -> Q1 -> call2
    if (buttonQ1.hitTest() && globalState === "call1" && frameCount > 450) {
        globalState = "call2";
        frameCount = 0;
        
        call2.play();
        
        buttonQ1.text = "Gut";
        buttonQ2.text = "Schlecht";
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

    if(globalState === "call1"){
        phoneCall1Screen();
        background.state = "phoneMenu1";

        if (frameCount < 450){
            image(call1, 0, 226, 1170, 2080);
        }
    }

    if(globalState === "call2"){
        phoneCall2Screen();
        background.state = "phoneMenu1";

        if (frameCount < 450){
            image(call2, 0, 226, 1170, 2080);
        }
    }

    if(globalState === "settings"){
        settingsScreen();
        background.state = "settings";
    }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
