// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //23/1/2023, 5:03:00 am //jan starts with 0 index
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("12-14-2023") //mm-dd-yyyy

// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //get miliseconds
// console.log(Math.floor(Date.now()/1000)); //get seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); //sun=0,mon=1,tue=2
// console.log(newDate.getFullYear());

// console.log(`${newDate.getDay()} and the time `)

newDate.toLocaleString('default', {
    weekday: "long",
    
})

