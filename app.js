const form = document.getElementById('form');;
const name = document.getElementById('name');
const email = document.getElementById('email');

const users = [];

function storeFormData(e){
  const user = {
      email: form.email.value,
      password: form.password.value,
  };
<<<<<<< HEAD
  if(user.email === '****' && user.password === '****'){
    console.log(user);
  } else{
    users.push(user);
  }
  
}

// Event Listener
form.addEventListener('submit', storeFormData);
=======
  e.preventDefault();
  users.push(user);
  console.log(user);
}

// Event Listener
form.addEventListener('submit', storeFormData);
>>>>>>> 31c400f4e830f26b3917445d276fbea212daba25
