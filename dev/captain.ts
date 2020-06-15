class Captain extends HTMLElement implements Observer {

    constructor(pirateShip: PirateShip) {
        super()

        pirateShip.appendChild(this)
    }

    notify(): void {
    }
}

window.customElements.define("captain-component", Captain as any)