class User {
  constructor() {
    console.log("I deliver a new user");
    this.email = null;
    this.password = null;
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

  createAccount(email, password){
    let configOptions ={
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify( {email: email, password: password} )
    }
    fetch( getBaseURL() + "/users", configOptions)
    .then( response => response.json() )
    .then( user => user )
    .catch( error => console.error(error) )
  }

  login(email, password){
    this.setEmail(email)
    this.setPassword(password)
    let configOptions = {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify( {email: this.email, password: this.password} )
    }
    fetch( getBaseURL() + "/login", configOptions )
    .then( response => response.json() )
    .then( currentUser => console.log(currentUser) )
    .catch( error => console.error(error) )
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
