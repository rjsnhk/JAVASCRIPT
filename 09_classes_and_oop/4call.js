function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){

    // SetUsername(username); //ye reference lega so username ko set nhi krega excute hoke gayab ho jata

    //reference hold krke rkhne ke liye we use .call method  yha jo this he ye createuser ka he so isme store hoke hold krke rhega
    SetUsername.call(this,username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);