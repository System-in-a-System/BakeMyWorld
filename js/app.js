const registrationButton = document.querySelector('.btn')
const loginButton = document.querySelector('#login-button')
const form   = document.querySelector('.form')

const usernameField = document.querySelector('#username')
const emailField = document.querySelector('#email')
const passwordField = document.querySelector('#password')
const commentField = document.querySelector('#comment')

const onlineStatus = document.querySelector('#online-status')
const loginSwitcher = document.querySelector('#login-switcher')

if(loginSwitcher !== null) {
    if(localStorage.getItem('loggedin') !== null) {
        onlineStatus.innerText = localStorage.getItem('loggedin') +' is shopping'
        loginSwitcher.innerText = 'Log off'
    }


    loginSwitcher.addEventListener('click', e => {
        if(localStorage.getItem('loggedin') !== null) {
            window.localStorage.removeItem('loggedin')
        }
    }) 
}

registrationButton.addEventListener('click', e => {
   if (usernameField.value.length > 0 && emailField.value.length > 0 && passwordField.value.length > 0) {
        form.classList.add('form--no')
        window.localStorage.setItem(usernameField.value, passwordField.value)
        commentField.innerText = 'You have been registered!'
  } else {
        commentField.innerText = 'Do not leave any field blank!'
  } 
});

loginButton.addEventListener('click', e => {
    if (localStorage.getItem(usernameField.value) === passwordField.value) {
        commentField.innerText = 'Welcome, ' + usernameField.value
        window.localStorage.setItem('loggedin', usernameField.value)
    } else {
        commentField.innerText = 'Username or password are invalid!'
    }
});
