let response = document.getElementById("responseBlock");
let code = document.getElementById("responseCode");

function sendGetRequest() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        clear();
        if (this.readyState === 4) {
            code.innerText = this.status.toString(10);//10 for decimal number system
            response.innerText = this.responseText;
        }
    };

    xhttp.open("GET", "http://localhost:8083/response-entity-builder-with-http-headers", true);
    xhttp.send(null);
}

function sendPostRequest() {
    let requestJson = '{ "word": "' + document.getElementById("word-value").innerText + '" }' ;

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        clear();
        if (this.readyState === 4) {
            code.innerText = this.status.toString(10);//10 for decimal number system
            response.innerText = this.responseText;
        }
    };

    xhttp.open("POST", "http://localhost:8083/simplePost", true);
    xhttp.send(requestJson);
}

function clear() {
    response.innerText = "Sending request";
    code.innerText = "";
}
