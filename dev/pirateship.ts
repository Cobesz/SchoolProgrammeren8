/// <reference path="ship.ts" />

class PirateShip extends Ship implements Subject, Observer {
    // Fields
    private captain: Captain

    constructor() {
        super()

        this.captain = new Captain(this)

        this.captain.addEventListener('click', e => {
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

    notify(): void {
    }

}

window.customElements.define("ship-component", PirateShip as any)