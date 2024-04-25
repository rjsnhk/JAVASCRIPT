let myName = "   Rajesh     "
// let mychannel = "chai     "
// Object.prototype.trueLength=function(){
//   return this.trim().length; 
// }
// console.log(myName.trueLength());





let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//to create a user function for a object
Object.prototype.Rajesh = function(){
    console.log(`Rajesh is present in all objects`);
}
heroPower.Rajesh();



let myHeros = ["thor", "spiderman"]
Array.prototype.heyRajesh = function(){
    console.log(`Rajesh says hello`);
}


myHeros.Rajesh()
myHeros.heyRajesh()

//it gives error because JO top Object ko milega wo sabko milega //but jo nichewale ko milega like ARRAY USEE SAB YAni Object use nhi kar skta

// heroPower.heyRajesh() //error

// // inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
//use __proto__ for inherit upper object

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// we can use this also

//Teacher having User's propeties also
// Teacher.__proto__ = User

// // modern syntax  pehla koun then kiska

//TeachingSupport, sare property access krega Teacher ka
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "Rajesh".trueLength()
// "iceTea".trueLength()