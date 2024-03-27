/** @format */

// Home page

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=47.67517563586562&lon=-117.11025442154079&appid=91edfe9e16d8b419e1b25e0fec65f53d&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data); // Uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  const locationName = document.querySelector("#locationName");
  locationName.textContent = `${data.name}`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  // const weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", data.weather[0].description);
  // weatherIcon.textContent = `${data.weather[0].icon}`;
  const currentTemp = document.querySelector("#weather");
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const captionDesc = document.querySelector("#descrip");
  captionDesc.textContent = `- ${data.weather[0].description}`;
}
apiFetch();
