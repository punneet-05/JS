const user = {
    username: "puneet",
    price: 888,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  /*{
                                        username: 'puneet',
                                           price: 888,
(this)define inside a function  
so the output is                       welcomeMessage: [Function: welcomeMessage]
                                      }
                                       sam , welcome to website
                                        {
                                         username: 'sam',
                                           price: 888,
                                          welcomeMessage: [Function: welcomeMessage]
                                          }

                                           */
    }

}

user.welcomeMessage()
user.username = "sam"     //change the username
user.welcomeMessage()


console.log(this); // this declare outside the functio so it give empty string {}


function chai(){
    console.log(this);  //this return a lot of vale like global, fetcch time etc
}
chai()  

/////////////////////arrow function => ////////////////

const chai = () => {
    let username = "puneet"
    console.log(this.username);    // undefine 
} 
chai()


//////////explicit return

const addTwo = (num1, num2) => {
    return num1 + num2             // if we take {} , then we write return in the function 
}
  
////// implicit return

const addTwoo = (num1, num2) =>  num1 + num2       

////OR

const addTwo0 = (num1, num2) => (num1 + num2 )  // if we take paranthesis () , then there is no need to write return   

console.log(addTwo(3, 4))
















