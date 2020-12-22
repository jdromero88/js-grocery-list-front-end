class User {
  constructor(email, password) {
    console.log("I deliver a new user");
    this.email = email;
    this.password = password;
    this.first_name = null;
    this.last_name = null;
    this.avatar = null;
    this.bio = null;
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

  setFirstName(first_name){
    this.first_name = first_name;
  }
  getFirstName(){
    return this.first_name;
  }

  setLastName(last_name){
    this.last_name = last_name;
  }
  getLastName(){
    return this.last_name;
  }

  setAvatar(avatar){
    this.avatar = avatar;
  }
  getAvatar(){
    return this.avatar;
  }

  setBio(bio){
    this.bio = bio;
  }
  getBio(){
    return this.bio;
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
    .then( user => {
      user.error != true ? this.showProfile(user) : this.showErrorMessage(user)
    } )
    .catch( error => console.error(error) )
  }

  showProfile(user){
    console.log("this.user: ", this.user);
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
    this.showUserData(user)
  }

  showUserData(user){
    let h2ElUserName = document.getElementById("user-name")
    h2ElUserName.textContent = `${user.first_name} ${user.last_name}`
    let pElBio = document.getElementById("bio")
    pElBio.textContent = `${user.bio}`
  }

  showErrorMessage(user){
    alert(user.message)
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
    .then( user => console.log(cuuserrrentUser) )
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
