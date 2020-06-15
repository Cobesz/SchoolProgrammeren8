/// <reference path="ship.ts" />

class PirateShip extends Ship implements Subject, Observer {
    // Fields
    private captain: Captain

    private observers: Observer[] = [];

    constructor() {
        super()

        this.captain = new Captain(this)

        this.captain.addEventListener('click', () => {
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

    notify(): void {
    }

}

window.customElements.define("ship-component", PirateShip as any)