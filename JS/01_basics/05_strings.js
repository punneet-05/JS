const name = "puneet"
const repoCount = 10

// console.log(name + repoCount + " value")    [outdated]

console.log( `Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('puneetjais')

console.log(gameName[0]);       //p
console.log(gameName.__proto__); //{}empty object

console.log(gameName.length);  //10
console.log(gameName.toUpperCase()); //PUNEETJAIS
console.log(gameName.charAt(3));   //e
console.log(gameName.indexOf('t'));  //5

const newString = gameName.substring(0,4)  //pune  (not including the 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)  //ne  (starting from last)
console.log(anotherString);

const newStringOne = "     puneet     "
console.log(newStringOne);     //     puneet   
console.log(newStringOne.trim());  //puneet (trim the extra space)


const url = "https://puneet.com/puneet%20jaisw"

console.log(url.replace('%20','-'))

console.log(url.includes('puneet'))  //true

console.log(gameName.split('-'));   //input=> 'puneet-jais-com' in gameName [ 'puneet', 'jais', 'com' ] (convert into array)