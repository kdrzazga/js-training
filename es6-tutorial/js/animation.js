function animate() {

    let pos = 0;
    const id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
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
