class User {
  constructor(email, password) {
    console.log("I deliver a new user");
    this.email = email;
    this.password = password;
    this.user = {
      username: null,
      password: null
    };
  }

  printUsers(){
    return getAllUsers();
  }
  createAccount(email, password){
    console.log("fetch to post the new user");
  }

  login(email, password){
    console.log("fetch to login the User");

    this.user.username = email;
    this.user.password = password;
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
