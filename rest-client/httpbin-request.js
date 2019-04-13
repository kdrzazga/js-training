const HttpBinClient = function () {
    //TODO: kdrzazga - finish this
};

function sendPostRequestToHttpBin() {
    const url = 'https://httpbin.org/post';

    const client = new HttpBinClient();

    client.post(url, function (response) {
        alert(response);
    });
}
