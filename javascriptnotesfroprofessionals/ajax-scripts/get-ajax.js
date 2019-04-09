function ajax(file, params, callback) {
    var url = file + '?';
// loop through object and assemble the url
    var notFirst = false;
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            url += (notFirst ? '&' : '') + key + "=" + params[key];
        }
        notFirst = true;
    }
// create a AJAX call with url as parameter
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function getVolvo() {
    ajax('cars.php', {type: "Volvo", model: "300", color: "purple"}, function (response) {
        alert(response);
// add here the code to be executed when data comes back to this page
// for example console.log(response) will show the AJAX response in console
    });
}
