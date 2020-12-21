
function insertPersons(persons) {
    const tBody = document.querySelector("#list tbody");
    tBody.innerHTML = getPersonsHtml(persons);
}

function getPersonsHtml(persons) {
    return persons.map(getPersonHtml).join("");
}

function getPersonHtml(person) {
    return `<tr>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>
        <a href= ${person.github}>here</a>
    </td>
 </tr>`;
}

fetch("data/team.json")
    .then(res => res.json())
    .then((data) => {
        insertPersons(data);
    });