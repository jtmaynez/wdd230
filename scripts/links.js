/** @format */

const linksURL = "https://jtmaynez.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data.weeks[0].week);
  displayLinks(data);
}

function displayLinks(data) {
  const ul = document.querySelector("#linkContainer");
  for (let i = 0; i < data.weeks.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${data.weeks[i].week}:`;
    ul.appendChild(li);
    for (let j = 0; j < data.weeks[i].links.length; j++) {
      const link = document.createElement("a");
      link.href = data.weeks[i].links[j].url;
      link.textContent = `${data.weeks[i].links[j].title} | `;
      if (j === data.weeks[i].links.length - 1) {
        link.textContent = `${data.weeks[i].links[j].title}`;
      }
      li.appendChild(link);
    }
  }
}

getLinks();
