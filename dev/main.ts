class Main {

    private balls : Ball[] = []
    private basketBall : BasketBall

    constructor() {
        
        this.balls.push(new EarthBall(0, window.innerWidth/2))
        this.balls.push(new MoonBall(window.innerWidth/2, window.innerWidth))

        for (let ball of this.balls) {
            if (ball.localName === "earthball-component") {
                ball.setBehavior(new Bouncing())
            } else {
                ball.setBehavior(new Space())
            }
        }

        this.basketBall = new BasketBall(0, window.innerWidth)
        this.basketBall.setBehavior(new Bouncing());

        this.gameLoop()
    }

    gameLoop() {
        for (const ball of this.balls) {
            ball.update()
        }

        //check the area and adjust behavior accordingly
        if(this.basketBall.x <= window.innerWidth/2) {
            this.basketBall.setBehavior(new Bouncing());
        } else {
            this.basketBall.setBehavior(new Space());
        }

        this.basketBall.update()
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())