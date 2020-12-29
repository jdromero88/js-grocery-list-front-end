
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

// check if variable is empty
function isEmpty(value) {
  if (value === '') {
    return true
  }
  return false
}

//events when content is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("connected");
  // (currentUser == null) ? console.log("No hay user") : getGroceryLists()
})
