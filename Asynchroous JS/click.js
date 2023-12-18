const div = document.createElement('div');
div.className = 'click';
const button = document.createElement('button');
button.textContent = 'click me'
let add = document.querySelector('.container');
button.addEventListener('click',()=>{
  add.textContent = 'Hello My dear love Vaishnavi';
})
div.appendChild(button);
add.appendChild(div);
