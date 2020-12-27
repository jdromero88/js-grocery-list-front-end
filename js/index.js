
let ALL_USERS = []
let ALL_GROCERY_LISTS = []
let currentUser = null
let testUser = null

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

function getGroceryLists(){
  let testResponse = fetch( getBaseURL() + "/grocery_lists" )
  .then( response => response.json() )
  .then( groceryLists => ALL_GROCERY_LISTS = [...groceryLists] )
  .catch( error => console.error(error) )
}

//events when content is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("connected");
  getGroceryLists()
})
