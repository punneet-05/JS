const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)   //this put dc array into marvel array.

console.log(marvel_heroes);  // ['thor','ironman','spiderman', ['superman','flash',,batman']]
console.log(marvel_heroes[3][1]); //flash

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);  //['thor','ironman','superman',flash'......]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]   //spread
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)   //if we dont know the depth of array then we write infinity otherwise we write the exact no.
console.log(real_another_array);    // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Hitesh"))    //false
console.log(Array.from("Hitesh"))    //['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "hitesh"}))  //interesting    //this return empty []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[100, 200, 300]



