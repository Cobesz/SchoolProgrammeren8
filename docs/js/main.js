"use strict";
class Ball extends HTMLElement {
    constructor(minWidth, maxWidth) {
        super();
        this.gravity = 0.1;
        this.friction = 0.9;
        this.x = 0;
        this.y = 0;
        this.speedX = 5;
        this.speedY = -3;
        this.minWidth = 0;
        this.maxWidth = 0;
        this.maxHeight = 0;
        let content = document.getElementsByTagName("content")[0];
        content.appendChild(this);
        maxWidth -= this.clientWidth;
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth;
        this.y = 100;
        this.minWidth = minWidth;
        this.maxWidth = maxWidth;
        this.maxHeight = window.innerHeight - this.clientHeight;
    }
    get X() {
        return this.x;
    }
    setBehavior(ballBehavior) {
        this.ballBehavior = ballBehavior;
    }
    update() {
        this.ballBehavior.performUpdate(this);
        this.draw();
    }
    draw() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}
class BasketBall extends Ball {
    constructor(minWidth, maxWidth) {
        super(minWidth, maxWidth);
    }
}
window.customElements.define("basketball-component", BasketBall);
class Bouncing {
    performUpdate(ball) {
        if (ball.x < ball.minWidth) {
            ball.x = ball.minWidth;
            ball.speedX *= -1;
            ball.speedX *= ball.friction;
        }
        if (ball.x > ball.maxWidth) {
            ball.x = ball.maxWidth;
            ball.speedX *= -1;
            ball.speedX *= ball.friction;
        }
        if (ball.y + ball.speedY > ball.maxHeight) {
            ball.y = ball.maxHeight;
            ball.speedY *= -1;
            ball.speedY *= ball.friction;
            ball.speedX *= ball.friction;
        }
        else {
            ball.speedY += ball.gravity;
        }
        ball.x += ball.speedX;
        ball.y += ball.speedY;
    }
}
class EarthBall extends Ball {
    constructor(minWidth, maxWidth) {
        super(minWidth, maxWidth);
    }
}
window.customElements.define("earthball-component", EarthBall);
class Main {
    constructor() {
        this.balls = [];
        this.balls.push(new EarthBall(0, window.innerWidth / 2));
        this.balls.push(new MoonBall(window.innerWidth / 2, window.innerWidth));
        for (let ball of this.balls) {
            if (ball.localName === "earthball-component") {
                ball.setBehavior(new Bouncing());
            }
            else {
                ball.setBehavior(new Space());
            }
        }
        this.basketBall = new BasketBall(0, window.innerWidth);
        this.basketBall.setBehavior(new Bouncing());
        this.gameLoop();
    }
    gameLoop() {
        for (const ball of this.balls) {
            ball.update();
        }
        if (this.basketBall.x <= window.innerWidth / 2) {
            this.basketBall.setBehavior(new Bouncing());
        }
        else {
            this.basketBall.setBehavior(new Space());
        }
        this.basketBall.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => new Main());
class MoonBall extends Ball {
    constructor(minWidth, maxWidth) {
        super(minWidth, maxWidth);
    }
}
window.customElements.define("moonball-component", MoonBall);
class Space {
    performUpdate(ball) {
        ball.x += ball.speedX;
        ball.y += ball.speedY;
        if (ball.x < ball.minWidth || ball.x > ball.maxWidth) {
            ball.speedX *= -1;
        }
        if (ball.y < 0 || ball.y > ball.maxHeight) {
            ball.speedY *= -1;
        }
    }
}
//# sourceMappingURL=main.js.map