class Humanoidish extends GameObject {

    protected xspeed: number
    protected yspeed: number
    protected direction: number
    protected speedMultiplier: number

    constructor() {
        super();
    }

    public update(): void {
        this.x += this.xspeed
        this.y += this.yspeed

        this.draw()
    }

    public draw(): void {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.direction + ",1)"
    }
}