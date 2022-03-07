export default class Background {
    constructor(x, y, s, state, images){
        this.x = x;
        this.y = y;
        this.s = s;
        this.state = state;
        this.tut1 = images.tut1;
        this.tut2 = images.tut2;
        this.tut3 = images.tut3;
        this.tut4 = images.tut4;
        this.tut5 = images.tut5;
        this.home = images.home;
        this.progress = images.progress;
        this.art1 = images.art1;
        this.art2 = images.art2;
        this.art3 = images.art3;
        this.art4 = images.art4;
        this.phoneMenu1 = images.phoneMenu1;
        this.phoneMenu2 = images.phoneMenu2;
        this.phoneMenu3 = images.phoneMenu3;
        this.phoneMenu4 = images.phoneMenu4;
        this.settings = images.settings;
    }

    display() {
        if (this.state === "tut1"){
            image(this.tut1, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "tut2"){
            image(this.tut2, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "tut3"){
            image(this.tut3, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "tut4"){
            image(this.tut4, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "tut5"){
            image(this.tut5, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "home"){
            image(this.home, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "progress"){
            image(this.progress, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "art1"){
            image(this.art1, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "art2"){
            image(this.art2, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "art3"){
            image(this.art3, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "art4"){
            image(this.art4, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "phoneMenu1"){
            image(this.phoneMenu1, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "phoneMenu2"){
            image(this.phoneMenu2, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "phoneMenu3"){
            image(this.phoneMenu3, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "phoneMenu4"){
            image(this.phoneMenu4, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "settings"){
            image(this.settings, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }

        if (this.state === "black"){
            fill(0);
            rect(this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }
    }
}