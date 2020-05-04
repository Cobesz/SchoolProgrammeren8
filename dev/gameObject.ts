abstract class GameObject extends HTMLElement{

    protected posx: number
    protected posy: number

    protected constructor(posx: number, posy: number) {
        super()

        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this);

        this.posy = posy
        this.posx = posx
    }

    protected random(min: number,max:number) {

        return Math.floor(Math.random() * (max - min)) + min;
    }

    abstract update(): void

}