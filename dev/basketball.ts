///<reference path="ball.ts"/>

class BasketBall extends Ball{

    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)


        // let areas = document.getElementsByClassName('column')


        // for (let area of areas) {
            // console.log(area)

            // if (area.classList[1] === "earth") {
            //     console.log('Dit is aarde')
            // } else if (area.classList[1] === "moon") {
            //     console.log("Dit is de maan")
            // }
        // }
    }

    // public update() : void {
    //
    //
    //     this.draw()
    // }
}

window.customElements.define("basketball-component", BasketBall as any)