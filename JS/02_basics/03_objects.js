// two ways to declare the objects:
// 1. literals     2. constructor
// singleton(apne tarah ka ek hi object) : constructor se bnega to singleton bnega.
// jab hum literals ki tarah declare krte hai to singleton nhi bnta hai
//object.create : constructor


//object literals : way to declare the object

const mySym = Symbol("key1")  //correct syntax to declare a symbol


const JsUser = {
    name : "puneet",
    "full name": "Puneet Jaiswal",   // this is not access by JsUser.fullname
    [mySym]: "mykey1",
    age : 20,
    location: "delhi",
    email: "puneet@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["monday", "tuesday"]
}


console.log(JsUser.email)   //both are correct to access
console.log(JsUser["email"]) //this is more better way  ,,,,  ""=> must use because it store it as a string
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "puneet@chatgpt.com"  //to change the value
//Object.freeze(JsUser)   //to freeze the value (not changing)

JsUser.greeting = function(){
    console.log("Hello JS user");

}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);  //hello js user , puneet
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());