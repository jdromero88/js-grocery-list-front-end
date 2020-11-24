console.log("connected");
let ALL_USERS = []
let currentUser = null
let newUser = null;
function getBaseURL() {
  return "http://localhost:3000"
}

function getHeaders() {
  return {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

function getUsers() {
  fetch( getBaseURL() + "/users")
  .then( response => response.json() )
  .then( users => ALL_USERS = users )
  .catch( error => console.error(error) )
}

function signup(email, password) {
  newUser = new User()
  newUser.createAccount(email, password)
  newUser = newUser
}
