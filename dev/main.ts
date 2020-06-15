class Main {

    private ships : PirateShip[] = []

    constructor() {
        // Subject
        let horn : Horn = new Horn()

        for (let i = 0; i < 10; i++) {
            // Observers
            this.ships.push(new PirateShip())
        }

        let messageboard : MessageBoard = new MessageBoard()
        this.gameLoop()
    }

    gameLoop() {
        for (const ship of this.ships) {
            ship.update()

            for (const otherShip of this.ships) {
                if (ship !== otherShip) {
                    if (ship.hasCollision(otherShip)) {
                        ship.hit = true
                        // break inner loop to prevent overwriting the hit
                        break
                    } else {
                        ship.hit = false
                    }
                }
            }
        }


        let messages = document.getElementsByTagName('message')
        if (messages.length > 9) {
            messages[0].parentNode.removeChild(messages[0]);
        }

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())