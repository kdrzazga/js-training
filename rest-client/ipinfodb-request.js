const HttpClient = function () {
    this.get = function (aUrl, aCallback) {

        const anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {

            if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200)
                aCallback(anHttpRequest.responseText);
        };

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);

    };

    this.post = function (aUrl, aCallback) {

        const anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200)
                aCallback(anHttpRequest.responseText);
        };

        anHttpRequest.open("POST", aUrl, true);
        anHttpRequest.send("");

    }
};

function sendGetRequest() {
    disableButton();

    const url = 'http://api.ipinfodb.com/v3/ip-city/?key=2034cd6830be9a7739a705bfa8ce4ffc79a72c847bb45ba6480ed7b2d781cf7b&ip=176.111.152.18&format=json';

    const client = new HttpClient();

    client.get(url, function (response) {
        alert(response);
    });
    enableButton();
}

function sendPostRequest() {
    disableButton();

    const url = 'http://api.ipinfodb.com/v3/ip-city/?key=2034cd6830be9a7739a705bfa8ce4ffc79a72c847bb45ba6480ed7b2d781cf7b&ip=176.111.152.18&format=json';

    const client = new HttpClient();

    client.post(url, function (response) {
        alert(response);
    });
    enableButton();
}

function disableButton() {
}

function enableButton() {
}
