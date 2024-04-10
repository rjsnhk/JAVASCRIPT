const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //it add full array in single element
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]); //act like 2d array

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  //it concat 2 arrays and store 

const all_new_heros = [...marvel_heros,...dc_heros] //it take unlimited value so prefer this to concat ...array_name1, ...array_name2,...array_name3,

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) //it flats all array in to a single array
// console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh")) //it converts to array
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));