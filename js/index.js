/*

  Footer

*/

// Creates and appends a footer element at the end of the body
let body = document.querySelector("body");
let newFooter = document.createElement("footer");
body.appendChild(newFooter);

// Appends the current year and copyright logo to the footer element created above
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.textContent = `Haibin Yu ${thisYear} \u00A9`;
footer.appendChild(copyright);

/*

  Skills

*/

// Creates and appends a li element to the skills list for each element in the skills array 
let skills = ["HTML", "CSS", "JS", "Python", "Java", "C", "SQL", "Github", "GIMP", "Photoshop", "HitFilm", "CapCut"];
let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

/*

  Message form

*/

let messageForm = document.getElementsByName('leave_message')[0];

// Create a function such that when the submit button is clicked, it creates a new li element and displays it in the Message section
function submitBtn(event) {
    event.preventDefault();
    let formEmail = messageForm.querySelector('input[name="usersEmail"]').value;
    let formMessage = messageForm.querySelector('textarea[name="usersMessage"]').value;
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

/*

  Projects

*/

// Access githubs api to fetch and display my projects in the project section
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

