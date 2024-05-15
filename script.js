const links = [
    { naam: "instagram", link: "https://www.instagram.com/the_real_nols/", color: "red", othercolor: "green"},
    { naam: "reddit", link: "https://www.reddit.com/user/Dramgamermurf100000/", color: "orange"},
    { naam: "github", link: "https://github.com/TheRealN0ls", color: "blue"}
];
let html = "";
links.forEach(element => {
    html +=
        `
        <div class="container-element">
        <h1>${element.naam}</h1>
        <a target="_blank" href="${element.link}" onmouseover="hoverin('${element.naam}', this)" onmouseout="hoverout('${element.naam}', this)" style="background-color: ${element.color}">${element.naam}</a>
        </div>
        `;
});
document.getElementById('linksContainer').innerHTML = html;


