function drawOnCanvas(){
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 250;
    const ctx = canvas.getContext('2d');
    ctx.font = '30px Cursive';
    ctx.fillText("Hello world!", 50, 50);
    ctx.fillRect(10, 10, 40, 45);
    document.body.appendChild(canvas);
}
