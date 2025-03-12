// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


//////////////////////////////   MAPS   (store a unique value)   maps are not iteratable

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")

//console.log(map); 

for (const[key, value] of map) {
    console.log(key, ':-', value);
}