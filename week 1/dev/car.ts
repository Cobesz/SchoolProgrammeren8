///<reference path="gameObject.ts"/>
class Car extends GameObject {

    constructor(posx: number, posy: number) {
        super(posx, posy);

        this.addEventListener('click', e => {
            Game.getInstance().rebuildBuildings()
            this.posx = -500;
        })

    }

    update() {
        this.posx++

        if (this.posx >= window.innerHeight) {
            this.posx = this.random(0, window.innerWidth);

        }

        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}

window.customElements.define("car-component", Car as any)
