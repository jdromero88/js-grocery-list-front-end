function createAccount(){
  let configOptions ={
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify( {email: email, password: password} )
  }
  fetch( getBaseURL() + "/users", configOptions)
  .then( response => response.json() )
  .then( user => {
    return user
  })
  .catch( error => console.error(error) )
}

function authenticate(email, password){   
  let configOptions = {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify( {email: email, password: password} )
  }
  fetch( getBaseURL() + "/login", configOptions )
  .then( response => response.json() )
  .then( user => {
    user.error != true ? this.showProfile(user) : this.showErrorMessage(user)
  } )
  .catch( error => console.error(error) )
}

function showProfile(user){
  console.log(user);
  currentUser = user
  let divLogin = document.getElementById("login")
  let divDashboard = document.getElementById("dashboard")
  let divUserInfo = document.getElementById("user-info")
  let divList = document.getElementById("list")
  divLogin.remove()
  divList.hidden = false
  divUserInfo.hidden = false
  divDashboard.hidden = false
  showUserData(user)
}

function showUserData(user){
  let h2ElUserName = document.getElementById("user-name")
  h2ElUserName.textContent = `${user.first_name} ${user.last_name}`
  let pElBio = document.getElementById("bio")
  pElBio.textContent = `${user.bio}`
}

function showErrorMessage(user){
  alert(user.message)
}

function logout(){
  currentUser = null;
  console.log("post to logout in the backend");
}

function updateAccount(){
  console.log("Patch to udpate the user account");
  let configOptions = {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify( {
      first_name: first_name,
      last_name: last_name,
      avatar: avatar,
      bio: bio
    })
  }
  fetch( getBaseURL() + "/users/" + this.id, configOptions )
  .then( respoonse => resonse.json() )
  .then( user => console.log(cuuserrrentUser) )
  .catch( error => console.error(error) )
}

function createGroceryList(){
  console.log("User create a new grocery list");
}

function addProductToGroceryList(){
  console.log("User add product to grocery list");
}

function closeGroceryList(){
  console.log("User is done with the grocery list");
}