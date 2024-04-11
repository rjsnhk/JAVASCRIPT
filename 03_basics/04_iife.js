// Immediately Invoked Function Expressions (IIFE)

//global scope ke pollution hatane ke liye humne ye likha he
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


//arrow function -- ()=>{}
(()=>{
    console.log("hii");
})();


// const addTwo = (num1, num2) =>  num1 + num2


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') 

