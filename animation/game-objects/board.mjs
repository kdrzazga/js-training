class Board {
    constructor(width, height) {
        this.ball = new Ball();
        this.width = width;
        this.height = height;
    }

    moveBall(){
        this.ball.move(3.0);
    }
}

class VelocityVector {
    constructor(speed, angle) {
        this.speed = speed;
        this.angle = angle;
    }

    moveX(x, time) {
        const distance = this.speed * time;
        return x + distance * Math.cos(this.angle);
    }

    moveY(y, time) {
        const distance = this.speed * time;
        return y + distance * Math.sin(this.angle);
    }

}

class Ball {
    constructor() {
        this.x = 10;
        this.y = 10;

        this.velocity = new VelocityVector(3, Math.PI / 4);
    }

    move(time) {
        this.x = this.velocity.moveX(this.x, time);
        this.y = this.velocity.moveY(this.y, time);
    }
}

export function f() {
    console.log("dupa");
}
