export default class Button {
    constructor(x, y, w, h, s, textSize, textColor, text, state, images){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.s = s;
        this.textSize = textSize;
        this.textColor = textColor;
        this.text = text;
        this.state = state;

        this.buttonDefault = images.buttonDefault;
        this.buttonCheck = images.buttonCheck;
        this.buttonPerson = images.buttonPerson;
        this.buttonSettings = images.buttonSettings;
        this.buttonBack = images.buttonBack;
        this.buttonLock = images.buttonLock;
        this.buttonS1 = images.buttonS1;
        this.buttonS2 = images.buttonS2;
        this.buttonS3 = images.buttonS3;
        this.buttonS4 = images.buttonS4;
        this.buttonMap = images.buttonMap;
        this.buttonCall = images.buttonCall;
        this.buttonName1 = images.buttonName1;
        this.buttonName2 = images.buttonName2;
        this.buttonName3 = images.buttonName3;
        this.buttonName4 = images.buttonName4;
        this.buttonProgressCheck = images.buttonProgressCheck;
        this.buttonProgressCheckEmpty = images.buttonProgressCheckEmpty;
        this.buttonAccept = images.buttonAccept;
        this.buttonDecline = images.buttonDecline;
        this.buttonQ = images.buttonQ;
    }

    display() {
        if (this.state === "default"){
            noStroke();
            image(this.buttonDefault, this.s * this.x, this.s * this.y, this.s * 940, this.s * 180);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "check"){
            noStroke();
            image(this.buttonCheck, this.s * this.x, this.s * this.y, this.s * 940, this.s * 180);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "person"){
            noStroke();
            image(this.buttonPerson, this.s * this.x, this.s * this.y, this.s * 940, this.s * 180);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "settings"){
            noStroke();
            image(this.buttonSettings, this.s * this.x, this.s * this.y, this.s * 940, this.s * 180);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "back"){
            noStroke();
            image(this.buttonBack, this.s * this.x, this.s * this.y, this.s * 340, this.s * 150);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 1.75, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "lock"){
            noStroke();
            image(this.buttonLock, this.s * this.x, this.s * this.y, this.s * 940, this.s * 180);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "transparent"){
            noStroke();
            //Transparenten Button einblenden
            fill(0, 0, 0, 0);
            rect(this.s * this.x, this.s * this.y, this. s *this.w, this.s * this.h);
        }

        if (this.state === "accept"){
            noStroke();
            image(this.buttonAccept, this.s * this.x, this.s * this.y, this.s * 200, this.s * 200);
        }

        if (this.state === "decline"){
            noStroke();
            image(this.buttonDecline, this.s * this.x, this.s * this.y, this.s * 200, this.s * 200);
        }

        if (this.state === "s1"){
            noStroke();
            image(this.buttonS1, this.s * this.x, this.s * this.y, this.s * 150, this.s * 150);
        }

        if (this.state === "s2"){
            noStroke();
            image(this.buttonS2, this.s * this.x, this.s * this.y, this.s * 150, this.s * 150);
        }

        if (this.state === "s3"){
            noStroke();
            image(this.buttonS3, this.s * this.x, this.s * this.y, this.s * 150, this.s * 150);
        }

        if (this.state === "s4"){
            noStroke();
            image(this.buttonS4, this.s * this.x, this.s * this.y, this.s * 150, this.s * 150);
        }

        if (this.state === "n1"){
            noStroke();
            image(this.buttonName1, this.s * this.x, this.s * this.y, this.s * 580, this.s * 150);
            fill(this.textColor);
            textAlign(LEFT);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 4, this.s * this.y + this.s * this.h / 2 + 15);
        }
        
        if (this.state === "n2"){
            noStroke();
            image(this.buttonName2, this.s * this.x, this.s * this.y, this.s * 580, this.s * 150);
            fill(this.textColor);
            textAlign(LEFT);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 4, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "n3"){
            noStroke();
            image(this.buttonName3, this.s * this.x, this.s * this.y, this.s * 580, this.s * 150);
            fill(this.textColor);
            textAlign(LEFT);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 4, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "n4"){
            noStroke();
            image(this.buttonName4, this.s * this.x, this.s * this.y, this.s * 580, this.s * 150);
            fill(this.textColor);
            textAlign(LEFT);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 4, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "pCheck"){
            noStroke();
            image(this.buttonProgressCheck, this.s * this.x, this.s * this.y, this.s * 150, this.s * 150);
        }

        if (this.state === "pCheckEmpty"){
            noStroke();
            image(this.buttonProgressCheckEmpty, this.s * this.x, this.s * this.y, this.s * 150, this.s * 150);
        }

        if (this.state === "map"){
            noStroke();
            image(this.buttonMap, this.s * this.x, this.s * this.y, this.s * 940, this.s * 180);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 15);
        }

        if (this.state === "call"){
            noStroke();
            image(this.buttonCall, this.s * this.x, this.s * this.y, this.s * 940, this.s * 180);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 15);
        }
        
        if (this.state === "q"){
            noStroke();
            image(this.buttonQ, this.s * this.x, this.s * this.y, this.s * 940, this.s * 180);
            fill(this.textColor);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 10);
        }

    }

    hitTest() {
        if (mouseX >= this.s * this.x &&
            mouseX <= this.s * this.x + this.s * this.w &&
            mouseY >= this.s * this.y &&
            mouseY <= this.s * this.y + this.s * this.h
            ){
                return true;
            } else {
                return false;
            }
    }
}