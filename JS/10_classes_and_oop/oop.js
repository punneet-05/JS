const user = {
     username: "puneet",
     loginCount: 8,
     signedIn: true,

     getUserDetails: function(){
       // console.log("Got user details from database");
        //console.log(`username: ${this.username}`);
        //console.log(this);
     }
}

/*console.log(user.username);
console.log(user.getUserDetails());
console.log(this); */

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

   // return this
}

const userOne = new User("puneet", 12, true)
const userTwo = new User("jaiswal", 11, false)

console.log(userOne);
console.log(userTwo);