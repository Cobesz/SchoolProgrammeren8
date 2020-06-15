class Captain extends HTMLElement implements Observer {

    private pirateShip: PirateShip;

    constructor(pirateShip: PirateShip) {
        super()

        this.pirateShip = pirateShip
    }

    notify(): void {
        this.pirateShip.appendChild(this)
    }
}

window.customElements.define("captain-component", Captain as any)