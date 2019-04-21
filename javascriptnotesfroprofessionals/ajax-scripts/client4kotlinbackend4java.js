function sendGetCountriesRequestToBackend(port) {
    const endpoint = "/countries";
    // const endpoint = "/response-entity-builder-with-http-headers";
    const url = 'http://localhost:' + port + endpoint;

    const arguments = {
        method: "GET",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer"
    };

    fetch(url, arguments)
        .then(response => response.json())
        .then(getOnBackendFulfilled())
        .then(null, getOnBackendRejected());
}

function getOnBackendFulfilled() {
    return data => {
        if (data.error_message) {
            throw new Error(data.error_message);
        }
        log(data);
    };
}

function getOnBackendRejected() {
    return error => {
        log(error);
    };
}
