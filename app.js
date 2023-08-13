const form = document.getElementById('form');;
const name = document.getElementById('name');
const email = document.getElementById('email');

const users = [];

function storeFormData(e){
  const user = {
      email: form.email.value,
      password: form.password.value,
  };
  e.preventDefault();
  users.push(user);
  console.log(user);
}

// Event Listener
form.addEventListener('submit', storeFormData);