"use strict";
class Captain extends HTMLElement {
    constructor(pirateShip) {
        super();
        this.pirateShip = pirateShip;
    }
    notify() {
        this.pirateShip.appendChild(this);
    }
}
window.customElements.define("captain-component", Captain);
class GameObject extends HTMLElement {
    constructor() {
        super();
        this._position = new Vector(0, 0);
        this.rotation = 0;
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this);
    }
    get position() {
        return this._position;
    }
    draw() {
        this.style.transform = `translate(${this._position.x}px, ${this._position.y}px) rotate(${this.rotation}deg)`;
    }
}
class Horn extends GameObject {
    constructor() {
        super();
        this.observers = [];
        this._position = new Vector(window.innerWidth / 2 - this.clientWidth / 2, window.innerHeight / 2 - this.clientHeight / 2);
        this.addEventListener('click', () => {
            this.notifyObserver();
        });
        this.draw();
    }
    notifyObserver() {
        for (const observer of this.observers) {
            observer.notify();
        }
    }
    register(observer) {
        this.observers.push(observer);
    }
    unRegister(observer) {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    static getInstance() {
        if (!Horn.instance) {
            Horn.instance = new Horn();
        }
        return Horn.instance;
    }
}
window.customElements.define("horn-component", Horn);
class Main {
    constructor() {
        this.ships = [];
        for (let i = 0; i < 10; i++) {
            this.ships.push(new PirateShip());
        }
        let messageboard = new MessageBoard();
        Horn.getInstance().register(messageboard);
    }
}
window.addEventListener("load", () => new Main());
class MessageBoard extends GameObject {
    constructor() {
        super();
    }
    addMessage(text) {
        let message = document.createElement("message");
        message.innerHTML = text;
        this.appendChild(message);
    }
    notify() {
        this.addMessage('Horn was pressed!');
    }
}
window.customElements.define("messageboard-component", MessageBoard);
let Ship = (() => {
    class Ship extends GameObject {
        constructor() {
            super();
            this.activeImage = "";
            this.colors = ["Green", "Blue", "Orange", "White", "Black", "Red"];
            this._color = "";
            this.rotation = Math.random() * 360;
            this._position = new Vector(Math.random() * window.innerWidth - this.clientWidth, Math.random() * window.innerHeight - this.clientHeight);
            this.createShip();
        }
        get color() { return this._color; }
        createShip() {
            Ship.numberOfShips++;
            if (Ship.numberOfShips > 6)
                Ship.numberOfShips = 1;
            this.activeImage = `url(images/ship${Ship.numberOfShips + 3}.png)`;
            this.style.backgroundImage = "url(images/ship-unregistered.png)";
            this._color = this.colors[Ship.numberOfShips - 1];
        }
    }
    Ship.numberOfShips = 0;
    return Ship;
})();
class PirateShip extends Ship {
    constructor() {
        super();
        this.observers = [];
        this.listening = false;
        this.captain = new Captain(this);
        this.addEventListener('click', () => {
            if (!this.listening) {
                this.listening = true;
                this.style.backgroundImage = this.activeImage;
                Horn.getInstance().register(this);
            }
            else {
                this.listening = false;
                this.style.backgroundImage = "url(images/ship-unregistered.png)";
                Horn.getInstance().unRegister(this);
            }
            this.notifyObserver();
        });
        this.draw();
    }
    notifyObserver() {
        for (const observer of this.observers) {
            observer.notify();
        }
    }
    register(observer) {
        this.observers.push(observer);
    }
    unRegister(observer) {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notify() {
        console.log("PirateShip listening: " + this.listening);
        this.register(this.captain);
    }
}
window.customElements.define("ship-component", PirateShip);
class Vector {
    constructor(x, y) {
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    get x() { return this._x; }
    set x(value) { this._x = value; }
    get y() { return this._y; }
    set y(value) { this._y = value; }
}
//# sourceMappingURL=main.js.map