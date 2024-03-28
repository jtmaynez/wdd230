/** @format */

// import members from "./members.json";

const url = `http://127.0.0.1:5501/chamber/data/members.json`;

const cards = document.querySelector(`#cards`);
const grid = document.querySelector(`#grid`);
const list = document.querySelector(`#list`);
async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
  // Card build code goes here
  members.forEach((member) => {
    const card = `
      <section>
      <p> ${member.name}</p>
      <img src="${member.imagewithHyperlink.hyperlink}" alt="Logo of ${member.name}" loading="lazy" width="340" height="440">
        <p> ${member.address}</p>
        <p> ${member.phoneNumber}</p>
        <p>ML: ${member.membershipLevel}</p>
        <a href="${member.websiteUrl}"> ${member.websiteUrl}</a>
      </section>
    `;
    cards.insertAdjacentHTML(`beforeend`, card);
  });
};

getMemberData();

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

grid.addEventListener(`click`, () => {
  cards.classList.remove("list");
  cards.classList.add("grid");
});

list.addEventListener(`click`, () => {
  cards.classList.remove("grid");
  cards.classList.add("list");
});
