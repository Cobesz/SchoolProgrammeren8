///<reference path="gameObject.ts"/>

class Wheel extends GameObject {

    public constructor(car: Car, offsetCarX: number) {
        super()

        this.style.transform = `translate(${offsetCarX}px, 30px)`

        car.appendChild(this)
    }
}

window.customElements.define("wheel-component", Wheel)