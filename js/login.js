
function login(event){
//   let email = document.getElementById("email").value
//   let password = document.getElementById("password").value

// for testing I am harcoding the user and password
  let email = "jr@gmail.com"
  let password = "password"
  authenticate(email, password)
  // console.log(email);
  event.preventDefault()
}

function alertLogin() {
  alert("Complete the fields.")
}

function validateLogin() {
  (email != "" || password != "") ? true : false
}

// To submit login form
const LOGIN_FORM = document.getElementById("login-form")
LOGIN_FORM.addEventListener('submit', login)
