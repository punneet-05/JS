function SayMyName(){
    console.log("P");
    console.log("U");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
}
SayMyName() 



function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(3, 4)    //8

function addTwoNumbers(number1, number2){
      let result = number1 + number2
      return result
}
const result = addTwoNumbers(3, 5)
console.log("Result:", result);    //Result: 8



function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("puneet"))


// REST operator

function calculeteCartPrice(...num1){    //
    return num1
}

console.log(calculateCaetPrice(200, 400, 500))




const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));  //400
