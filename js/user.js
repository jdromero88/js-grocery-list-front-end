class User {
  constructor(email, password) {
    console.log("I deliver a new user");
    this.email = email;
    this.password = password;
  }

  setEmail(email){
    this.email = email;
  }

  getEmail(){
    return this.email;
  }

  setPassword(password){
    this.password = password;
  }
  getPassword(){
    return this.password;
  }

  createAccount(){
    let configOptions ={
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify( {email: this.email, password: this.password} )
    }
    fetch( getBaseURL() + "/users", configOptions)
    .then( response => response.json() )
    .then( user => {
      return user
    })
    .catch( error => console.error(error) )
  }

  authenticate(){   
    let configOptions = {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify( {email: this.email, password: this.password} )
    }
    fetch( getBaseURL() + "/login", configOptions )
    .then( response => response.json() )
    .then( currentUser => {
      currentUser.error != true ? this.showProfile(currentUser) : this.showErrorMessage(currentUser)
    } )
    .catch( error => console.error(error) )
  }

  showProfile(currentUser){
    console.log(currentUser);
    let divLogin = document.getElementById("login")
    let divDashboard = document.getElementById("dashboard")
    let divUserInfo = document.getElementById("user-info")
    let divList = document.getElementById("list")
    divLogin.remove()
    divList.hidden = false
    divUserInfo.hidden = false
    divDashboard.hidden = false
    this.showUserData(currentUser)
  }

  showUserData(currentUser){
    let h2ElUserName = document.getElementById("user-name")
    h2ElUserName.textContent = `${currentUser.first_name} ${currentUser.last_name}`
    let pElBio = document.getElementById("bio")
    pElBio.textContent = `${currentUser.bio}`
  }

  showErrorMessage(currentUser){
    alert(currentUser.message)
  }

  logout(){
    this.setEmail(null)
    this.setPassword(null)
    console.log("post to logout in the backend");
  }

  updateAccount(){
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
    .then( currentUser => console.log(currentUser) )
    .catch( error => console.error(error) )
  }

  createGroceryList(){
    console.log("User create a new grocery list");
  }

  addProductToGroceryList(){
    console.log("User add product to grocery list");
  }

  closeGroceryList(){
    console.log("User is done with the grocery list");
  }
}
