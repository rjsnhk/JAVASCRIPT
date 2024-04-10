// array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]
// console.log(myArr[1])
// console.log(myHeors[0])
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);

// Array methods

// myArr.push(6)
// console.log(myArr)
// myArr.push(7)
// console.log(myArr)
// myArr.pop() //it removes last element
// console.log(myArr)

// myArr.unshift(9) //it add value on first index at 0
// myArr.shift() //it removes from first
// console.log(myArr)

// console.log(myArr.includes(9)); //check 9 he ki nhi
// console.log(myArr.indexOf(3)); //if not exist -1 else value

// const newArr = myArr.join() //convert to string

// console.log(myArr);

// console.log( newArr);
// console.log(typeof newArr); //string

// slice, splice

console.log("A ", myArr); //0,1,2,3,4,5
const myn1 = myArr.slice(1, 3)

console.log(myn1); //1,2 //it not include last index==index-1
console.log("B ", myArr); //0,1,2,3,4,5


const myn2 = myArr.splice(1, 3) //it cuts array in to 2 parts
console.log(myn2); //1,2,3 =it include last ind also
console.log("C ", myArr); //array manipulate ho gya he //0, 4, 5

