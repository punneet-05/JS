const score = 400
console.log(score);  //400

const balance = new Number(100)
console.log(balance);  //[Number: 100]

console.log(balance.toString().length);  //3
console.log(balance.toFixed(2));   //100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //(en-IN) is used to show the number in indian standard => 10,00,000

//++++++++++++++++++ Maths ++++++++++++++++


console.log(Math);  //object [Math] {}
console.log(Math.abs(-4)); //4 //absolute value (covert only -ve no. into +ve)
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));   //5 => shows the greater value
console.log(Math.floor(4.9));  //4 => shows the lower value
console.log(Math.min(4, 3, 6, 8));  //3
console.log(Math.max(4, 3, 9, 2));  //9

console.log(Math.random()); //0.1123434567 //gives random output between 0 and 1.
console.log(Math.random()*10 + 1);  //use to avoid the value like 0.03245...

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)
