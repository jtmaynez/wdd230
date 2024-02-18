/** @format */

const input = document.querySelector("#favChap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

function displayList(item) {
  const li = document.createElement("li");
  const btnDelete = document.createElement("button");

  li.textContent = item;
  btnDelete.textContent = "❌";

  btnDelete.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });

  li.appendChild(btnDelete);

  list.appendChild(li);
}

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});
function deleteChapter(chapter) {
  // Step 1
  chapter = chapter.slice(0, chapter.length - 1);

  // Step 2
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  // Step 3
  setChapterList();
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});
