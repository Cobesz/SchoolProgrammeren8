class MoonBall extends Ball {
    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)
    }
}

window.customElements.define("moonball-component", MoonBall as any)