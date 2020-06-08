class Jibby {
    private _behavior: Behavior
    private _state: StateBehavior

    private _dead: boolean

    public div: HTMLElement
    public x: number
    public y: number

    get behavior(): Behavior {
        return this._behavior;
    }

    set behavior(value: Behavior) {
        this._behavior = value;
    }

    get dead(): boolean {
        return this._dead;
    }

    set dead(value: boolean) {
        this._dead = value;
    }

    get state(): StateBehavior {
        return this._state;
    }

    set state(value: StateBehavior) {
        this._state = value;
    }

    constructor(parent: HTMLElement) {
        this.div = document.createElement("jibby")
        parent.appendChild(this.div)

        // this.behavior = this._behavior
        this.state = new Idle(this)
        // start instellingen
        this.x = 0
        this.y = 220

        // afbeelding voor idle - vervang dit door het gedrag
        this.div.style.backgroundImage = "url('images/idle.png')"
        // this.myBehavior = new Idle()

        // click listeners
        this.div.addEventListener("click", () => this.onPet())
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat())
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash())

        this.behavior = be
    }

    public update(): void {
        // hier het gedrag updaten
        this.state.update()

        // check of de waarden te laag zijn
        if (this.state.hygiene === 0 || this.state.hunger === 0 || this.state.happyness === 0) {
            this.dead = true;
        }
    }


    private onPet(): void {
        console.log("you clicked on jibby!")
        this.div.style.backgroundImage = "url('images/happy.png')"
    }

    private onWash(): void {
        console.log("washing jibby!")
        this.div.style.backgroundImage = "url('images/washing.png')"
    }

    private onEat(): void {
        console.log("jibby is eating!")
        this.div.style.backgroundImage = "url('images/eating.gif')"
    }


}