function getMousePos(e) {
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById("displayArea").innerHTML = "(" + x + ", " + y + ")";
}

function stopTrackingMouse() {
    document.getElementById("displayArea").innerHTML = "";
}
