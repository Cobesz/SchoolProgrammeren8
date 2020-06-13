class Main {

    private static instance: Main;

    private ships: PirateShip[] = []

    private constructor() {
        for (let i = 0; i < 10; i++) {
            this.ships.push(new PirateShip())
        }

        // Eventueel Messageboard aanmaken zodat deze zichtbaar wordt?
        Messageboard.getInstance();

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


        requestAnimationFrame(() => this.gameLoop())
    }

    public static getInstance() {
        if (!Main.instance) {
            Main.instance = new Main()
        }
        return Main.instance
    }
}

window.addEventListener("load", () => Main.getInstance())