const left = document.querySelector('.left')
const form = document.querySelector('form')
const username = document.querySelector('input[type="text"]')

// localStorage.getItem('data_name')
const data = JSON.parse(localStorage.getItem('user_data')) || [];

form.addEventListener('submit', (event)=> {
  event.preventDefault();
  let info = username.value
  data.push(info)

  // localStorage(data-name, data) 
  localStorage.setItem('user_data', JSON.stringify(data));

  username.value = '';
  // refresh qilish kodi
  location.reload();
})

data.forEach(item => (
  left.innerHTML += `
    <li class="user">${item}</li>
  `
))