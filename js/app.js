const button = document.querySelector('.btn')
const form   = document.querySelector('.form')

const usernameField = document.querySelector('#username')
const emailField = document.querySelector('#email')
const passwordField = document.querySelector('#password')

button.addEventListener('click', function() {
   if (usernameField.value.length > 0 && emailField.value.length > 0 && passwordField.value.length > 0) {
    form.classList.add('form--no')
    window.localStorage.setItem(usernameField.value, passwordField.value)
  } else {
    this._loginBlock.querySelector('#comment').innerText = 'Do not leave any field blank!'
  } 
});