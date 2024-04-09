//primitive 

// 7 types : string,number,boolean,null,undefined,symbol ,BigInt

const name="rsj"
let age=13;
let login=true;
const temp=null;
let useremail;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);

// const bignum=13434423947889;
// console.log(typeof bignum)




//reference type/Non primitive
//Array,object ,function

const hero=["raj","kris","ram"]

console.log(typeof hero);

let myObj={
  name:"raj",
  age:22,
}


console.log(typeof null) //object
const myfun=function(){
  console.log("hello world");
}

myfun();

console.log(typeof myfun);


///stack(primitive)=it give a copy of value //  heap(non primmitive)=it gives reference of value so it change if annother is changed

let myname="raj";

let yourname=myname;
yourname="hee";
console.log(myname);//no change
console.log(yourname);



// heap
let myObj2={
  name:"raj",
  age:22,
}

let yourObj=myObj2;
yourObj.age=88;
console.log(myObj2.age); //88 it changes
console.log(yourObj.age);
