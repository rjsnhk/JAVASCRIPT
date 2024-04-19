
//promise ke under ek function rhega aur wo asin hoga settimeout,settimeInterval
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// //we have use to call resolve
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


//type 2 with out store in a variable
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asyn task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Asyn 2 resolved")
// })


//type 3 use object in resolve
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user); //pura object
// })



//type 4
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))


//type 5
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){  
//         let error = false
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


//type 6
async function getAllUsers(){
    try {
        //api link se jo data a rha use fetch krna he phir wo promise bnega
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        //console.log(responce) //jo time lega use ke age await likhna he

        //response ko json me convert kar
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

//it shows object
// getAllUsers()

//

//type
//fetch returns promise
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.