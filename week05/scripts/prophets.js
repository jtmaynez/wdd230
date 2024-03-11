/** @format */

const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");
async function getProphetData() {
  const response = await fetch();
  const data = await response.json();
  console.table(data.prophets);
}

const displayProphets = (prophets) => {
  // Card build code goes here
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    constfullName = document.createElement("h2");
    const portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastName}`;
    portrait.setAttribute("src", prophet.imageurl);
  });
};

getProphetData();
