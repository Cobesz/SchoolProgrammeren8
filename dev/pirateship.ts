/// <reference path="ship.ts" />

class PirateShip extends Ship implements Subject, Observer {
    // Fields
    private captain: Captain

    private observers: Observer[] = [];

    private listening: boolean = false;

    constructor() {
        super()

        this.captain = new Captain(this)


        this.addEventListener('click', () => {

            if (!this.listening) {
                this.listening = true

                this.style.backgroundImage = this.activeImage
                Horn.getInstance().register(this)
            } else {
                this.listening = false
                this.style.backgroundImage  = "url(images/ship-unregistered.png)"
                Horn.getInstance().unRegister(this)
            }
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
        console.log("PirateShip listening: " + this.listening)

        this.register(this.captain)
    }

}

window.customElements.define("ship-component", PirateShip as any)