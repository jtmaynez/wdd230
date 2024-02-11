// get current year
const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy ${currentYear}`;
// get last modified
const lastModifiedElement = document.querySelector('#lastModified');
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = `Last Modified: <em>${lastModified}<em>`;

// Hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// .dark in css and toggle.
