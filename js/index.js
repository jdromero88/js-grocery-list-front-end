console.log("connected");
let ALL_USERS = []
let currentUser = null

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
  let newUser = new User(email, password)
  newUser.createAccount()
}

function login(email, password){
  user = new User(email, password)
  currentUser = user.authenticate()

}
