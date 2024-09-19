let body = document.querySelector("body");
let newFooter = document.createElement("footer");
body.appendChild(newFooter);

let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.textContent = `Haibin Yu ${thisYear} \u00A9`;
footer.appendChild(copyright);

let skills = ["HTML", "CSS", "JS", "Python", "Java", "C", "SQL", "Github", "GIMP", "Photoshop", "HitFilm", "CapCut"];
let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.getElementsByName('leave_message')[0];

function submitBtn(event) {
    event.preventDefault();
    let formName = messageForm.querySelector('input[name="usersName"]').value;
    let formEmail = messageForm.querySelector('input[name="usersEmail"]').value;
    let formMessage = messageForm.querySelector('textarea[name="usersMessage"]').value;
    console.log(formName);
    console.log(formEmail);
    console.log(formMessage);
    event.target.reset();
    let messageSection = document.querySelector("#messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href=mailto:${formEmail}>${formEmail}</a> <span>${formMessage}</span>`;
    
    let removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        let entry = this.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
}
messageForm.addEventListener("submit", submitBtn);

let projectSection = document.querySelector("#projects");
let projectList = projectSection.querySelector("ul");

fetch("https://api.github.com/users/haibn/repos")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        let repositories = data;
        console.log(repositories);
        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement("li");
            project.textContent = repositories[i].name;
            projectList.append(project);
        }
    })
    .catch(error => alert(error));



// async function getGitHubUser() {
//     try {
//         let response = await fetch("https://api.github.com/users/haibn/repos");
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//     } catch(error) {
//         alert(error);
//     }
// }