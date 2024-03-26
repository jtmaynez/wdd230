/** @format */

// Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
// get current year
const currentYearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy ${currentYear}`;
// get last modified
const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = `Last Modified: <em>${lastModified}<em>`;
// Visit Count
const visitDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
  visitDisplay.textContent = numVisits;
} else {
  visitDisplay.textContent = `This is your first visit! Welcome!`;
}
numVisits++; // What does the ++ do?

localStorage.setItem("numVisits-ls", numVisits);

function submitForm() {
  var currentTime = new Date();
  var form = document.querySelector(".recorded");
  var hiddenInput = document.querySelector(".timeStamp");

  hiddenInput.setAttribute("value", currentTime.toLocaleString());
  form.appendChild(hiddenInput);
  // console.log("submission Time:", hiddenInput.value);
}
