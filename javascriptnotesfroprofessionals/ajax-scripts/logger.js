function logError(message) {
    message.style.color = 'red';
    log(message);
}

function log(message){
    const paragraph = document.createElement('pre');
    document.body.appendChild(paragraph);
    paragraph.style.color = 'red';
    paragraph.textContent = String(message);
}
