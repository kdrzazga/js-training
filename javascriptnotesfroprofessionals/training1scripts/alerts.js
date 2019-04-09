function askAge() {
    const age = prompt("How old are you?", "18");
    let message;

    if (age < 18) {
        message = "You are under 18";
    }
    else {
        message = "You are adult";
    }

    alert(message);
}

function confirmAdult() {
    if(window.confirm("Are you over 18?")) {
        alert("Adult");
    }
}
