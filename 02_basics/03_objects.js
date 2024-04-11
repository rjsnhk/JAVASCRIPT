// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const mySym1 = Symbol("key2")


const JsUser = {
    name: "Hitesh", //name as computer lega "name"
    "full name": "Hitesh Choudhary",
    mySym: "mykey1",  //symbol it takes like [ ]
    [mySym1]: "mykey2",  //symbol it takes like [ ]
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym1])
// console.log(typeof JsUser[mySym1])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser) //ye freez kr dega object ko
// JsUser.email = "hitesh@microsoft.com" //ye change nhi hoga
// console.log(JsUser);



// JsUser.says = function(){
//     console.log("hello");
// }
// console.log(JsUser.says());


// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());