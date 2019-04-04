function processForm() {
    document.getElementById("frm1").submit();
    console.log("Form submitted.")
}

function fillControlsWithData() {
    var nationalityComboBox = document.getElementById("nationalities");
    var firstNameTextbox = document.getElementById("fname");
    var lastNameTextbox = document.getElementById("lname");
    var idComboBox = document.getElementById("person_id");

    readNationalities().forEach(function (nationality) {
        nationalityComboBox.innerHTML += "<option value=\"" + nationality + "\">" + nationality + "</option>";
    });

    var people = readPeople();

    people.forEach(function (person) {
        idComboBox.innerHTML += "<option value=\"" + person.id + "\">" + person.id + "</option>";
    });

    if (people.length > 0) {
        firstNameTextbox.value = people[0].firstName;
        lastNameTextbox.value = people[0].lastName;
    }
}
