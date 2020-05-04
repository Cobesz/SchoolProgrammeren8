///<reference path="gameObject.ts"/>

class Bomb extends GameObject {

    private speed: number;

    constructor(posx: number, posy: number, speed: number) {
        super(posx, posy);
        this.speed = speed;

        this.addEventListener('click', e => {
            this.posy -= this.random(300, window.innerHeight);
            Game.getInstance().scorePoint(); // Gets current instance of the game
        })
    }

    update() {
        this.posy += this.speed;

        if (this.posy >= window.innerHeight) {
            Game.getInstance().destroyBuilding();
            this.posy = 220;
            this.posx = this.random(0, window.innerWidth);
        }


        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}

window.customElements.define("bomb-component", Bomb as any)
