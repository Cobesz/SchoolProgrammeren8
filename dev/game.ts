class Game {
    
    private chicken : Chicken
    
 
    constructor() {
        this.chicken = new Chicken()

 
        this.gameLoop()
    }
    
    private gameLoop(){
        // beweging
        this.chicken.update()
        
        requestAnimationFrame(() => this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())