//primitive
// 7 types: string, number, boolean, null, undefines, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

//const bigNumber = 3426744567n

//Reference (Non primitive)

// arrays, objects , functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"puneet",
    age: 21,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber );  //undefined
console.log(typeof outsideTemp); //object
    console.log(typeof scoreValue); //number
        console.log(typeof myFunction); // object function
            console.log(typeof heroes); //undefined
                console.log(typeof myObj); //object
                console.log(typeof anotherId); //symbol

     //+++++++++++++++++++++++++++++++++++++++++++++++++

     // stack(primitive), heap (non-primitive)

let myYoutubename = "pjais"

 let anothername = myYoutubename
  anothername = "puneet"

 console.log(myYoutubename); //pjais name is displaying same because stack gives the copy of the vale so the original value doesn't affected if we change the value.
  console.log(anothername);  //puneet 

  let userOne = {
    email: "user@google.com",
    upi:  "user@ybl"

  }
  let userTwo = userOne

  userTwo.email = "jais@gmail.com"

  console.log(userOne.email);
  console.log(userTwo.email); //value is changed because in heap , the reference are same .
