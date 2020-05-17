///<reference path="car.ts"/>


abstract class GameObject extends HTMLElement {

    protected x: number;
    protected y: number;
    public width: number
    public height: number


    protected constructor() {
        super();
    }

    public hasCollision(gameObject: GameObject): boolean {

        return //true or false
    }

    public move(): void {

    }

    protected draw(): void {
        this.style.transform = `translate(${this.x}px,${this.y}px)`
    }

    public onCollision(): void {

    }
}