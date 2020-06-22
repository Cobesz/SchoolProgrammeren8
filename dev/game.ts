class Game {
    private static instance: Game;


    private chicken : Chicken
    
 
    private constructor() {
        this.chicken = new Chicken()

 
        this.gameLoop()
    }
    
    private gameLoop(){
        // beweging
        this.chicken.update()
        
        requestAnimationFrame(() => this.gameLoop())
    }

    public static getInstance(): Game {

        if(!Game.instance) {
            Game.instance = new Game()
        }

        return Game.instance
    }
} 

window.addEventListener("load", () => Game.getInstance())