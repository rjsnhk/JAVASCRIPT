function say(){
  console.log("hii");
}

// say()

function add(num1,num2){  
  console.log(num1+num2);
}

//num1,num2 --parameter
//2,3 --argument
// add(2,3)
// add(2,"3")

function multi(n1,n2){
  return n1*n2;
}


const m=multi(4,8);
// console.log(m);

function loginUser(username){
if(!username){  //undefined==false
console.log("plese enter user name");
return
}

  return `${username} just logged in`
}

// console.log(loginUser("raj"));
// console.log(loginUser())


function loginUserrr(username="sam"){
  
  
  
    return `${username} just logged in`
  }

  // console.log(loginUserrr()); //sam
  // console.log(loginUserrr("rsj")) //rsj


  function calculatePrice(...num1){ //...rest operator it adds value in array
    return num1;
  } 
  // console.log(calculatePrice(200,400,500))
  function calculate(v1,v2,...num1){ //...rest operator it adds value in array
    return num1;
  } 
  // console.log(calculate(200,400,500,293,404)) //num1=500,292,404

  const user={
    username:"raj",
    age:19
  }

  function handleobj(anyobj){
    console.log(`username is ${anyobj.username} and age is ${anyobj.age}`);
  }
  // handleobj(user);

  // handleobj({
  //   username:"sam",
  //   age:22
  // })

  const myArr=[10,30,40,40]

  function second(arr){
    return arr[2];
  }
  // console.log(second(myArr))
  // console.log(second([23,45,67,8,89,9]))


  

