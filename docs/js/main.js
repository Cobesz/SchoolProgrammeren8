"use strict";
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.state = new Idle(this);
        this.x = 0;
        this.y = 220;
        this.div.style.backgroundImage = "url('images/idle.png')";
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
        this.behavior = be;
    }
    Object.defineProperty(Jibby.prototype, "behavior", {
        get: function () {
            return this._behavior;
        },
        set: function (value) {
            this._behavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jibby.prototype, "dead", {
        get: function () {
            return this._dead;
        },
        set: function (value) {
            this._dead = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jibby.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    Jibby.prototype.update = function () {
        this.state.update();
        if (this.state.hygiene === 0 || this.state.hunger === 0 || this.state.happyness === 0) {
            this.dead = true;
        }
    };
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.div.style.backgroundImage = "url('images/happy.png')";
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.div.style.backgroundImage = "url('images/washing.png')";
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.div.style.backgroundImage = "url('images/eating.gif')";
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        this.gameLoop();
        console.log('deno test');
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.state.hunger).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.state.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.state.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Dead = (function () {
    function Dead() {
    }
    return Dead;
}());
var Eating = (function () {
    function Eating() {
    }
    Eating.prototype.onEat = function () {
    };
    Eating.prototype.onPet = function () {
    };
    Eating.prototype.onWash = function () {
    };
    Eating.prototype.performBehavior = function () {
    };
    return Eating;
}());
var Idle = (function () {
    function Idle(jibby) {
        this.hygiene = this.hunger = this.happyness = 50;
    }
    Idle.prototype.update = function () {
        var _this = this;
        setInterval(function () {
            _this.hygiene -= 0.01;
            _this.hunger -= 0.02;
            _this.happyness -= 0.015;
        }, 1000);
    };
    return Idle;
}());
var Petting = (function () {
    function Petting() {
    }
    Petting.prototype.onEat = function () {
    };
    Petting.prototype.onPet = function () {
    };
    Petting.prototype.onWash = function () {
    };
    Petting.prototype.performBehavior = function () {
    };
    return Petting;
}());
var Washing = (function () {
    function Washing() {
    }
    Washing.prototype.onEat = function () {
    };
    Washing.prototype.onPet = function () {
    };
    Washing.prototype.onWash = function () {
    };
    Washing.prototype.performBehavior = function () {
    };
    return Washing;
}());
//# sourceMappingURL=main.js.map