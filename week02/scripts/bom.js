const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', (e) => {
  e.preventDefault(); 
  if (input.value) {
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