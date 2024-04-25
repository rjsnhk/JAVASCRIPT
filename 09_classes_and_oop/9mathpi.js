//object ke hidden property ke bare me jan na he to use getownpropertydescriptor   pi =property , math =module
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

//  console.log(descripter);
 //{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
 

//so we cant change/overide the value of pi
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
 }

 //to know object ka name , member name
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//we can define property of object
Object.defineProperty(chai, 'name', {
    writable: false,  // value change nhi kr skte 
    enumerable: false, //loop nhi lagega
    configurable: true
    
})

//writable false he  to change nhi hoga
chai.name="sunny chai";

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//enamerable false he to name nhi  ayega
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}