const nationalityComboBox = document.getElementById("nationalities");
const firstNameTextbox = document.getElementById("fname");
const lastNameTextbox = document.getElementById("lname");
const idComboBox = document.getElementById("person_id");
let people;

function processForm() {
    document.getElementById("personal-form").submit();
    console.log("Form submitted.");

    loadDoc();
}

function fillControlsWithData() {
    people = readPeople();
    readNationalities().forEach(function (nationality) {
        nationalityComboBox.options.appendData(nationality);
        //nationalityComboBox.innerHTML += "<option value=\"" + nationality + "\">" + nationality + "</option>";
    });

    people.forEach(function (person) {
        idComboBox.innerHTML += "<option value=\"" + person.id + "\">" + person.id + "</option>";
    });

    idComboBox.addEventListener('click', updatePersonTextboxes, false);

    if (people.length > 0) {
        firstNameTextbox.value = people[0].firstName;
        lastNameTextbox.value = people[0].lastName;
    }
}

function updatePersonTextboxes() {
    const id = Number(idComboBox.options[idComboBox.selectedIndex].text) - 1;

    if (id < people.length) {
        firstNameTextbox.value = people[id].firstName;
        lastNameTextbox.value = people[id].lastName;
    }
}


