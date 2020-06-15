class Main {

    private ships: PirateShip[] = []

    constructor() {
        // Subject
        let horn: Horn = new Horn()

        horn.addEventListener('click', e => {
            console.log(e);
            // this.posy -= this.random(300, window.innerHeight);
            // Game.getInstance().scorePoint(); // Gets current instance of the game
        })

        for (let i = 0; i < 10; i++) {
            // Observers
            this.ships.push(new PirateShip())
        }

        let messageboard: MessageBoard = new MessageBoard()
        messageboard.addMessage('Begonnen');
    }
}

window.addEventListener("load", () => new Main())