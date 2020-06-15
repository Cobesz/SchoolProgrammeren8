/// <reference path="gameobject.ts" />

class Horn extends GameObject implements Subject {

    private observers: Observer[] = [];

    constructor() {
        super()

        this._position = new Vector(
            window.innerWidth / 2 - this.clientWidth / 2,
            window.innerHeight / 2 - this.clientHeight / 2)

        this.addEventListener('click', () => {
            this.notifyObserver()
        })

        this.draw()
    }

    notifyObserver(): void {
        for (const observer of this.observers) {
            observer.notify()
        }
    }

    register(observer: Observer): void {
        this.observers.push(observer)
    }

    unRegister(observer: Observer): void {
        let index = this.observers.indexOf(observer)
        this.observers.splice(index, 1)
    }
}

window.customElements.define("horn-component", Horn)