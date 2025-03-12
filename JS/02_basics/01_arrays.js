//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["shaktiman","naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[4]);
console.log(myHero);
console.log(myArr2);

//Array methods

myArr.push(6)  //push simply add the element in the array
myArr.push(7)
myArr.pop()  //pop remove the last element in the array


myArr.unshift(9)  //add the given value at the starting
myArr.shift()    //remove the value

console.log(myArr.includes(9));  //check the value are there in string or not  i.e false
console.log(myArr.indexOf(3));  //gives the position(index value) in which the given element is present i.e 3

const newArr = myArr.join()   //adds all the element of an array into a string, seperated by the specified operator string

console.log(newArr); //value remain same but the type is change (string) , bind the array

console.log(myArr);


//slice , splice

console.log("A", myArr);  //[0,1,2,3,4,5]

const myn1 = myArr.slice (1,3)       // return a copy of a section of an array.for both start and end,a

console.log(myn1);    //[1,2]
console.log("B",myArr);    //[0,1,2,3,4,5]

const myn2 = myArr.splice(1,3)
console.log("C", myArr);   //C[0, 4, 5]
console.log(myn2);      //[1, 2, 3]

//the basic difference betwwen slice and splice is that
// splice includes the last element and it manipulate the orriginal array
