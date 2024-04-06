const password = document.getElementById('userPassword');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const length = document.getElementById('length');
const special_char = document.getElementById('special_char');
const errorsBlock = document.querySelector(".errors");
const submitButton = document.getElementById('submitButton');

const checkForChanges = () => {
  activateErrorsBlock();

  if (password.value.match(/[0-9]/)) {
    number.style.color = 'green';
  } else {
    number.style.color = 'red';
  }

  if (password.value.match(/[A-Z]/)) {
    upper.style.color = 'green';
  } else {
    upper.style.color = 'red';
  }

  if (password.value.match(/[a-z]/)) {
    lower.style.color = 'green';
  } else {
    lower.style.color = 'red';
  }

  if (password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/)) {
    special_char.style.color = 'green';
  } else {
    special_char.style.color = 'red';
  }

  if (password.value.length >= 8) {
    length.style.color = 'green';
  } else {
    length.style.color = 'red';
  }
}

const submitForm = () => {
  if(password.value.match(/[0-9]/) &&
    password.value.match(/[A-Z]/) && 
    password.value.match(/[a-z]/) && 
    password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/) && 
    password.value.length >= 8) {
    return true;
  } else {
    return false;
  }
}

const activateErrorsBlock = () => {
  errorsBlock.style.display = "block";
  errorsBlock.style.opacity = 1;
}