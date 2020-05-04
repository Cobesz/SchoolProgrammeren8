"use strict";
class GameObject extends HTMLElement {
    constructor(posx, posy) {
        super();
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.posy = posy;
        this.posx = posx;
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
class Bomb extends GameObject {
    constructor(posx, posy, speed) {
        super(posx, posy);
        this.speed = speed;
        this.addEventListener('click', e => {
            this.posy -= this.random(300, window.innerHeight);
            Game.getInstance().scorePoint();
        });
    }
    update() {
        this.posy += this.speed;
        if (this.posy >= window.innerHeight) {
            Game.getInstance().destroyBuilding();
            this.posy = 220;
            this.posx = this.random(0, window.innerWidth);
        }
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
    }
}
window.customElements.define("bomb-component", Bomb);
class Car extends GameObject {
    constructor(posx, posy) {
        super(posx, posy);
        this.addEventListener('click', e => {
            Game.getInstance().rebuildBuildings();
            this.posx = -500;
        });
    }
    update() {
        this.posx++;
        if (this.posx >= window.innerHeight) {
            this.posx = this.random(0, window.innerWidth);
        }
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
    }
}
window.customElements.define("car-component", Car);
class Game {
    constructor() {
        this.score = 0;
        this.destroyed = 0;
        this.bombs = [];
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.car = new Car(100, 350);
        this.generateBombs();
        this.gameLoop();
    }
    gameLoop() {
        if (this.destroyed < 8) {
            console.log("updating the game");
            this.car.update();
            for (let bomb of this.bombs) {
                bomb.update();
            }
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    generateBombs() {
        for (let i = 0; i < this.random(4, 20); i++) {
            let bomb = new Bomb(this.random(0, window.innerWidth), 220, this.random(1, 3));
            this.bombs.push(bomb);
        }
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    destroyBuilding() {
        this.destroyed++;
        this.statusbar.style.width = this.statusbar.offsetWidth + 72 + 'px';
        console.log("buildings destroyed " + this.destroyed);
    }
    rebuildBuildings() {
        this.destroyed = 0;
        this.statusbar.style.width = "0px";
        console.log("buildings destroyed " + this.destroyed);
    }
    scorePoint() {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    }
    static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}
window.addEventListener("load", () => {
    Game.getInstance();
});
//# sourceMappingURL=main.js.map