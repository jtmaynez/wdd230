/** @format */

const baseURL = "https://jtmaynez.github.io/wdd230/";
const linksURL = "https://jtmaynez.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

getLinks();
function displayLinks(weeks) {}
