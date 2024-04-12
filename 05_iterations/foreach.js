const coding = ["js", "ruby", "java", "python", "cpp"]

//arrayname.forEach(function)

//type1//
// coding.forEach( function (val){
//     console.log(val);
// } )

//type2//
// coding.forEach( (item) => {
//     console.log(item);
// } )

//type3//
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


//type4/
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )