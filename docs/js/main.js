"use strict";
class Chicken extends HTMLElement {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.xspeed = 0;
        this.yspeed = 0;
        this.direction = 1;
        this.speedMultiplier = 5;
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this);
        window.addEventListener("click", (e) => this.onWindowClick(e));
    }
    onWindowClick(e) {
        this.calculateSpeedToPoint(e.clientX, e.clientY);
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    calculateSpeedToPoint(xPoint, yPoint) {
        let xdist = xPoint - this.x;
        let ydist = yPoint - this.y;
        let distance = Math.sqrt(xdist * xdist + ydist * ydist);
        this.xspeed = xdist / distance;
        this.yspeed = ydist / distance;
        this.xspeed *= this.speedMultiplier;
        this.yspeed *= this.speedMultiplier;
        this.direction = (this.xspeed < 0) ? 1 : -1;
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.draw();
    }
    draw() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.direction + ",1)";
    }
}
window.customElements.define("chicken-component", Chicken);
class Game {
    constructor() {
        this.chicken = new Chicken();
        this.gameLoop();
    }
    gameLoop() {
        this.chicken.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=main.js.map