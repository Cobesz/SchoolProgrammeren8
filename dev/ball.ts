///<reference path="ballBehavior.ts"/>


abstract class Ball extends HTMLElement {

    protected ballBehavior! : BallBehavior
    readonly gravity: number = 0.1
    readonly friction: number = 0.9

    x: number = 0
    y: number = 0
    speedX: number = 5
    speedY: number = -3
    minWidth: number = 0
    maxWidth: number = 0
    maxHeight: number = 0


    public get X(): number {
        return this.x
    }

    protected constructor(minWidth: number, maxWidth: number) {
        super()
        let content = document.getElementsByTagName("content")[0]
        content.appendChild(this)

        maxWidth -= this.clientWidth
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth
        this.y = 100

        this.minWidth = minWidth
        this.maxWidth = maxWidth
        this.maxHeight = window.innerHeight - this.clientHeight
    }

    public setBehavior(ballBehavior: BallBehavior) {
        this.ballBehavior = ballBehavior

    }

    update(): void {
        this.ballBehavior.performUpdate(this)
        this.draw()
    }

    public draw() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    }
}