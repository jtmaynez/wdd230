/** @format */

const rangeValue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangeValue.innerHTML = range.value;
}

const pass = document.querySelector("#password");
const passRep = document.querySelector("#password_repeat");
const message = document.querySelector("#formmessage");

passRep.addEventListener("focusout", checkPass);

function checkPass() {
  if (pass.value !== passRep.value) {
    message.textContent = "Passwords DO NOT MATCH, Try Again.";
    message.style.visibility = "show";
    pass.style.backgroundColor = "#fff0f3";
    passRep.style.backgroundColor = "#fff0f3";
    pass.value = "";
    passRep.value = "";
    pass.focus();
  } else {
    message.style.display = "none";
    pass.style.backgroundColor = "#fff";
    passRep.style.backgroundColor = "#fff";

    //   alert("Passwords do not match. Please re-enter.");
    //   // Clear the confirmation password field
    //   document.getElementById("password_repeat").value = "";
    // } else {
    //   // Passwords match, proceed with form submission or other actions
    //   alert("Passwords match! Submitting form...");
    //   // You can add further logic here (e.g., form submission)
  }
}

const currentYearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy ${currentYear}`;

const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = `Last Modified: <em>${lastModified}<em>`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const modeButton = document.querySelector("#displayBtn");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode");
});
