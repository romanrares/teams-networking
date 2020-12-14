
function getTeams(members) {
    return members.map(member => 
        `<tr>
            <td>${member.firstName}</td>
            <td>${member.lastName}</td>
            <td>
                <a href= ${member.github}>here</a>
            </td>
         </tr>`
    ).join("");
}

function setTeams(members) {
    const tBody = document.querySelector("#list tbody");
    tBody.innerHTML = getTeams(members);
}

fetch("data/team.json")
    .then(resp => resp.json())
    .then((members) => {
        setTeams(members);
    });