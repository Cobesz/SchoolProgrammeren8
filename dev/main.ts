class Main {

    private ships: PirateShip[] = []

    constructor() {

        for (let i = 0; i < 10; i++) {
            // Observers
            this.ships.push(new PirateShip())
            // this.ships[i].register(this.ships[i])
        }

        let messageboard: MessageBoard = new MessageBoard()
        Horn.getInstance().register(messageboard)
    }
}

window.addEventListener("load", () => new Main())