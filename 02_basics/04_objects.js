//object singleton
// const tinderUser=new Object()

const tinderUser={}
tinderUser.id="12214"
tinderUser.name="raj"
tinderUser.login=false
// console.log(tinderUser)

const regularUser={
    email:"raje@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rajesh",
            lastname:"nahak"
        }
    }
}

    // console.log(regularUser.fullname.userfullname.firstname)


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj4={
    5:"e",
    6:"f"
}

const mix={obj1,obj2
}
// console.log(mix);

// const mix2=Object.assign(obj1,obj2,obj4) //it also works
// const mix2=Object.assign({},obj1,obj2,obj4) ///{}=target, sare ->source

const mix2={...obj1,...obj2}
// console.log(mix2)

// array of object

const user=[
    {
        id: 1,
        email:"hii@gmail.com"
    },
    {
        id: 2,
        email:"hii@gmail.com"
    },
    {
        id: 3,
        email:"hii@gmail.com"
    },
    {
        id: 4,
        email:"hii@gmail.com"
    },
]
// console.log(user[0])


// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) //it gives array of keys

// console.log(Object.values(tinderUser)) //it gives array of values

// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('logedin')) //nhi he false
// console.log(tinderUser.hasOwnProperty('login')) //he so true


const course={
    name:"js in hindi",
    price: 999,
    instructor: 'hitesh'
}

//course.name ,course.price //baar baar course. likhna na pade

const {instructor}=course

//we direct use instructor
console.log(instructor)

const {instructor:inst}=course //we can name as inst

console.log(inst)