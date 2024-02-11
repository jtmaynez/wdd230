const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const chaptersArray = getChapterList() || [];

function displayList(item){
    const li = document.createElement('li'); 
    const btnDelete = document.createElement('button');
    
    li.textContent = input.value;
      btnDelete .textContent = '❌';

      btnDelete.addEventListener('click', () => {
          list.removeChild(li);
          input.focus();
      })
      li.appendChild(btnDelete);

      list.appendChild(li);
      input.value = '';
      
  } 
  input.focus();
  
});

};
chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

function deleteChapter(chapter){}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}






button.addEventListener('click', (e) => {
  e.preventDefault(); 
  if (input.value) {
    displayList(input.value);
    chaptersArray.push(input.value);  
    setChapterList ();
    input.value = '';
    input.focus();
    
    
    