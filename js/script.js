const cards = [
    {
        photo: "img/wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett", 
        job: "Founder & CEO",
    },
    {
        photo: "img/angela-caroll-chief-editor.jpg",
        name: "Angela Caroll", 
        job: "Chief Editor",
    },
    {
        photo: "img/walter-gordon-office-manager.jpg",
        name: "Walter Gordon", 
        job: "Office Manager",
    },
    {
        photo: "img/angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez", 
        job: "Social Media Manager",
    },
    {
        photo: "img/scott-estrada-developer.jpg",
        name: "Scott Estrada", 
        job: "Developer",
    },
    {
        photo: "img/barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos", 
        job: "Graphic Designer",
    }
];

const container = document.querySelector(".container");

for (let i = 0; i < cards.length; i++) {
    container.innerHTML += 
    `<div class="card">
        <img src=${cards[i].photo}>
        <div class="name">${cards[i].name}</div>
        <div class="role">${cards[i].job}</div>
    </div>`;
}