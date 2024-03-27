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
  members.forEach((member) => {
    const card = document.createElement("section");
    const name = document.createElement("p");
    const address = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const url = document.createElement("a");
    const logo = document.createElement("img");
    const lvl = document.createElement("p");

    logo.setAttribute("src", member);
    logo.setAttribute("alt", `Logo of ${member.name} `);
    name.textContent = `Name: ${member.name}`;
    address.textContent = `Address: ${member.address}`;
    phoneNumber.textContent = `Number: ${member.phoneNumber}`;
    url.textContent = `Website: ${member.websiteUrl}`;
    lvl.textContent = `Level: ${member.membershipLevel}`;

    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "340");
    logo.setAttribute("height", "440");

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(logo);
    card.appendChild(url);
    card.appendChild(lvl);
    cards.appendChild(card);
  });
};

getMemberData();
