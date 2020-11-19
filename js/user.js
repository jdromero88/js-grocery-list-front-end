class User {
  constructor(email=null, password=null) {
    console.log("I deliver a new user");
    this.email = email;
    this.password = password;
    this.user = {
      username: null,
      password: null
    };
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

  printUsers(){
    return getAllUsers();
  }

  createAccount(email, password){
    console.log("fetch to post the new user");
  }

  login(email, password){
    console.log("fetch to login the User");
    if (email != null && password != null) {
      if (email != "" && password != "") {
        console.log("email y password no son empty or null");
        this.setEmail(email)
        this.setPassword(password)
        return this.authenticate()
      }
    }
    return alert("User or password cannot be empty or null")
  }

  authenticate(){
    let users = getAllUsers()
    let user = users.filter(current => current.username == this.email && current.password == this.password)
    return user
  }

  logout(){
    this.user = {
      username:null,
      password:null
    };
  }

  updateAccount(email, password){
    console.log("Patch to udpate the user account");
    this.user.username = email;
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
