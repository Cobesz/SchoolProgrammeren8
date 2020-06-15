/// <reference path="gameobject.ts" />


class MessageBoard extends GameObject implements Observer{
    // Fields
    // private messages : HTMLElement[] = []

    public constructor() {
        super()
    }
    
    public addMessage(text : string) {
        let message = document.createElement("message")
        message.innerHTML = text
        this.appendChild(message) 
        
    }

    notify(): void {
        this.addMessage('Horn was pressed!')
    }
}

window.customElements.define("messageboard-component", MessageBoard as any)