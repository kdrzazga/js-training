function addStackOverflowLink(list, title, link) {
    const entry = document.createElement('li');
    const hyperlink = document.createElement('a');
    entry.appendChild(hyperlink);
    list.appendChild(entry);
    hyperlink.textContent = title;
    hyperlink.href = link;
}

function getOnFulfilled() {
    return data => {
        if (data.error_message) {
            throw new Error(data.error_message);
        }
        const list = document.createElement('ol');
        document.body.appendChild(list);
        for (const {title, link} of data.items) {
            addStackOverflowLink(list, title, link);
        }
    };
}

function getOnRejected() {
    return error => {
        logError(error);
    };
}

function getStackExchangeTopJSQuestions() {
    const seKey = 'gik4BOCMC7J9doavgYteRw((';
    const url =
        'http://api.stackexchange.com/2.2/questions?site=stackoverflow' +
        '&tagged=javascript&sort=month&filter=unsafe&key='
        + seKey;

    log("Sending request: " + url);

    fetch(url)
        .then(response => response.json())
        .then(getOnFulfilled())
        .then(null, getOnRejected());
}

