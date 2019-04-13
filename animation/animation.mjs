import {f} from "game-objects/board";

function start() {
    f();
    init();
    animate();
}

function init() {
    //board = new Board(900, 400);
}

function animate() {

    let pos = 0;
    const id = setInterval(frame, 5);

    function frame() {
        if (pos === 350) {
            clearInterval(id);
        } else {
            //window.board.moveBall();
            pos++;
            draw(pos);
        }
    }

    function draw(pos) {
        const ball = document.getElementById("ball");
        ball.style.top = pos + 'px';
        ball.style.left = pos + 'px';
    }

}
