/// <reference path="ship.ts" />

class PirateShip extends Ship {
    // Fields
    private captain : Captain

    constructor() {
        super()

        this.captain = new Captain(this)

        this.captain.addEventListener('click', e => {
            console.log(e);
        })
        this.draw()
    }
    
}

window.customElements.define("ship-component", PirateShip as any)