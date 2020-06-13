class Messageboard extends HTMLElement {

    private static instance: Messageboard;

    private constructor() {
        super()

        this.createMessageBoard();
    }

    private createMessageBoard() {
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)
    }

    public static getInstance(): Messageboard {
        if (!Messageboard.instance) {
            Messageboard.instance = new Messageboard()
        }
        return Messageboard.instance
    }
}

window.customElements.define("messageboard-component", Messageboard as any)