function login(event){
//   let email = document.getElementById("email").value
//   let password = document.getElementById("password").value

// for testing I am harcoding the user and password
  let email = "jr@gmail.com"
  let password = "password"
  if (isEmpty(email) || isEmpty(password)) {
      return alertLogin(event)
  }
  authenticate(email, password)
  event.preventDefault()
}

function alertLogin(event) {
  alert("Complete the fields.")
  let email = document.getElementById("email")
  email.focus()
  event.preventDefault()
}

function validateLogin() {
  (email != "" || password != "") ? true : false
}

// To submit login form
const LOGIN_FORM = document.getElementById("login-form")
LOGIN_FORM.addEventListener('submit', login)
