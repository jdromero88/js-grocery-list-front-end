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
    // passing a static user 
    // for testing purpose not doing real authentication.
    let currentUser = {
      first_name: "Jose",
      last_name: "Romero",
      bio: "Hola Mundo estoy volviendo un Developer profesional.",
      email: "jr@gmail.com",
      password: "password"
    }
    this.showProfile(currentUser)
    
    // Uncomment this to made real authentication working
    // let configOptions = {
    //   method: "POST",
    //   headers: getHeaders(),
    //   body: JSON.stringify( {email: this.email, password: this.password} )
    // }
    // fetch( getBaseURL() + "/login", configOptions )
    // .then( response => response.json() )
    // .then( currentUser => {
    //   currentUser.error != true ? this.showProfile(currentUser) : this.showErrorMessage(currentUser)
    // } )
    // .catch( error => console.error(error) )
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
    getGroceryLists().then( showGroceryList() )
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

  updateAccount(email, password){
    console.log("Patch to udpate the user account");
    this.user.email = email;
    this.user.password = password;
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
