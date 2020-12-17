
let ALL_USERS = []
let ALL_GROCERY_LISTS = []
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
  fetch( getBaseURL() + "/users" )
  .then( response => response.json() )
  .then( users => ALL_USERS = [...users] )
  .catch( error => console.error(error) )
}

// async function getGroceryLists(){
//   let testResponse = await fetch( getBaseURL() + "/grocery_lists" )
//   .then( response => response.json() )
//   .then( groceryLists => ALL_GROCERY_LISTS = [...groceryLists] )
//   .catch( error => console.error(error) )
// }

async function getGroceryLists(){
  let response = await fetch( getBaseURL() + "/grocery_lists" )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else{
    .then( response => response.json() )
    .then( groceryLists => ALL_GROCERY_LISTS = [...groceryLists] )
    .catch( error => console.error(error) )
  }

}

function signup(email, password) {
  let newUser = new User(email, password)
  newUser.createAccount()
}

function login(event){
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  user = new User(email, password)
  user.authenticate()
  // console.log(email);
  event.preventDefault()
}

function alertLogin() {
  alert("Complete the fields.")
}

function validateLogin() {
  (email != "" || password != "") ? true : false
}

const LOGIN_FORM = document.getElementById("login-form")
LOGIN_FORM.addEventListener('submit', login)
document.addEventListener("DOMContentLoaded", () => {
  console.log("connected");
})
