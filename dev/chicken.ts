class Chicken extends HTMLElement{
    private static instance: Chicken;

    // Fields 
    private x        : number = 0
    private y        : number = 0  
    private xspeed    : number = 0
    private yspeed    : number = 0
    private direction : number = 1

    private speedMultiplier : number = 5

    private constructor() {
        super()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)

        window.addEventListener("click", (e:MouseEvent) => this.onWindowClick(e))
    }

    private onWindowClick(e:MouseEvent) : void {
        // Berekening van de snelheid waar naartoe verplaatst moet worden (positie muisklik)
        this.calculateSpeedToPoint(e.clientX, e.clientY)

        // Nieuwe positie wordt berekend aan de hand van de snelheid
        this.x += this.xspeed
        this.y += this.yspeed
    }
    
    /**
     * Bepaalt de snelheid (en daarmee ook de richting) vanaf het huidige punt
     * naar het punt dat meegegeven wordt
     * @param xPoint x coordinaat van het punt waar naartoe verplaatst moet worden
     * @param yPoint y coordinaat van het punt waar naartoe verplaatst moet worden
     */
    private calculateSpeedToPoint(xPoint : number, yPoint : number) : void {
        let xdist = xPoint - this.x
        let ydist = yPoint - this.y
        let distance:number = Math.sqrt(xdist * xdist + ydist * ydist);

        this.xspeed = xdist / distance
        this.yspeed = ydist / distance

        this.xspeed *= this.speedMultiplier
        this.yspeed *= this.speedMultiplier

        // Is de snelheid op de x-as negatief, dan wordt direction -1
        // In de draw functie wordt dit gebruikt om de chicken naar links te laten kijken 
        // als deze naar links beweegt
        this.direction = (this.xspeed < 0) ? 1 : -1;
    }



    public static getInstance(): Chicken {

        if(!Chicken.instance) {
            Chicken.instance = new Chicken()
        }

        return Chicken.instance
    }
}

window.customElements.define("chicken-component", Chicken as any)