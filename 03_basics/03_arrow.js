const user = {
    username: "rajesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,4));

// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(2,4));

// const addTwo = (num1, num2) => ( num1 + num2 ) //paranthesis he to no return statement //curly brace he to return likhna hi he

// const addTwo = (num1, num2) => ({username: "hitesh"}) //ese kar

const addTwo = (num1, num2) => { return {username: "hitesh"}} //ese bhi 
// console.log(addTwo(2,4));


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()