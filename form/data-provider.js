function readNationalities(){
    return ["Polish", "Tajik", "Korean"];
}

function readPeople(){
    return [
        new Person(1, 'Jasiu', 'Kovalsky'),
        new Person(2, 'Zbyszek', 'Novak')
    ];
}

function loadDoc() {
    alert('loading');
    const url = "http://localhost:8083/countries";
    const xhttp = new XMLHttpRequest();

    //xttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);
        }
        else{
            alert("readyState = " + this.readyState
                + ", status " + this.status);
        }
    };

    const x = Number(7);
    xhttp.open("GET", url, true);
    xhttp.send(null);
}
