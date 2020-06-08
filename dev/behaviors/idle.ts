class Idle implements StateBehavior {

    hunger: number
    hygiene: number
    happyness: number

    constructor(jibby: Jibby) {

        this.hygiene = this.hunger = this.happyness = 50
    }

    public update() {
        setInterval(() => {
            this.hygiene -= 0.01
            this.hunger -= 0.02
            this.happyness -= 0.015
        }, 1000)
    }
}