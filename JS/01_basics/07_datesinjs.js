// dates

let myDate = new Date()
console.log(myDate.toString());  //date of the day //toString is method
console.log(myDate.toLocaleDateString()); //18/7/2024
console.log(myDate.toISOString());   //2024-07-18T11:19:03
console.log(myDate.toJSON());        //same
console.log(myDate.toTimeString());  //current timme

//let myCreatedDate = new Date(2024, 0, 22)
//console.log(myCreatedDate.toDateString());   //mon jan 22 2024

//let myCreatedDate = new Date(2024, 0, 22, 5, 3)
//let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-24")
console.log(myCreatedDate.toLocaleString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  //get month from date

newDate.toLocaleString('default',{
    weekday: "long"
})