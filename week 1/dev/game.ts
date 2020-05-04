class Game {

    private static instance: Game

    private score: number = 0
    private destroyed: number = 0
    private textfield: HTMLElement
    private statusbar: HTMLElement
    private car: Car
    private bombs: Array<Bomb> = [];

    private gameLoopId: number

    private constructor() {
        this.textfield = document.getElementsByTagName("textfield")[0] as HTMLElement
        this.statusbar = document.getElementsByTagName("bar")[0] as HTMLElement

        this.car = new Car(100, 350);

        this.generateBombs();

        // call method gameLoop
        this.gameLoop();
    }

    private gameLoop(): void {

        if (this.destroyed < 8) {
            console.log("updating the game")

            this.car.update();
            for (let bomb of this.bombs) {
                bomb.update()
            }

            // add request animation frame
            requestAnimationFrame(() => this.gameLoop())
        }

    }

    private generateBombs() {
        for (let i = 0; i < this.random(4, 20); i++) {
            let bomb: Bomb = new Bomb(this.random(0, window.innerWidth), 220, this.random(1, 3));
            this.bombs.push(bomb);
        }
    }

    private random(min: number, max: number) {

        return Math.floor(Math.random() * (max - min)) + min;
    }

    public destroyBuilding() {
        this.destroyed++
        this.statusbar.style.width = this.statusbar.offsetWidth + 72 + 'px';
        console.log("buildings destroyed " + this.destroyed)
    }

    public rebuildBuildings() {
        this.destroyed = 0
        this.statusbar.style.width = "0px";
        console.log("buildings destroyed " + this.destroyed)
    }

    public scorePoint() {
        this.score++
        this.textfield.innerHTML = "Score: " + this.score
    }

    // Singleton Pattern
    public static getInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }

        return Game.instance;
    }

}

window.addEventListener("load", () => {
    Game.getInstance()
})