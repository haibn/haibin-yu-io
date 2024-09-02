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
    console.log(i);
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}
