class Main {

    private ships: PirateShip[] = []

    constructor() {

        for (let i = 0; i < 10; i++) {
            // Observers
            this.ships.push(new PirateShip())
        }

        let messageboard: MessageBoard = new MessageBoard()
        Horn.getInstance().register(messageboard)
    }
}

window.addEventListener("load", () => new Main())