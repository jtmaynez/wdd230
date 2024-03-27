/** @format */

// import members from "./members.json";

const url = "https://jtmaynez.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards");
async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
  // Card build code goes here
  prophets.forEach((members) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const dob = document.createElement("p");
    const pob = document.createElement("p");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastName}`
    );
    dob.textContent = `Date of Birth: ${prophet.birthdate}`;
    pob.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(fullName);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};

getProphetData();
