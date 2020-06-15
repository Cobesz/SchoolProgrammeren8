/// <reference path="gameobject.ts" />

class Horn extends GameObject implements Subject {

    constructor() {
        super()

        this._position = new Vector(
            window.innerWidth / 2 - this.clientWidth / 2,
            window.innerHeight / 2 - this.clientHeight / 2)


        this.addEventListener('click', e => {
            console.log(e);
        })

        this.draw()
    }

    notifyObserver(): void {
    }

    register(observer: Observer): void {
        console.log(observer)
    }

    unRegister(observer: Observer): void {
        console.log(observer)
    }
}

window.customElements.define("horn-component", Horn)