let clicked;

function setClicked() {
    clicked = true;
}

function resetClicked() {
    clicked = false;
}

function init() {

}

function draw(){

    if (clicked){
        let canvas = document.getElementById("board");
        let ctx = canvas.getContext('2d');
        ctx.font = '30px Cursive';
        ctx.fillText("Hello world!", 50, 50);
        ctx.fillRect(10, 10, 40, 45);



    }
}
