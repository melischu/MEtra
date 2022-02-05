export default class Background {
    constructor(x, y, s, state, images){
        this.x = x;
        this.y = y;
        this.s = s;
        this.state = state;
        this.tut1 = images.tut1;
    }

    display() {
    if (this.state === "tut1"){
        image(this.tut1, this.s * this.x, this.s * this.y, this.s * 1170, this.s * 2532);
        }
    }
}