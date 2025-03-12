//console.log(2 > 1); //true
//console.log(2 >= 1); //true
//console.log(2 == 1); //false
//console.log(2 != 1); //true

console.log("2" > 1);  //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false  the reasone is that an equality check == and comparison < > >= <= work differently.
                             // comparison convert null to a number , trating it as 0. that's why (3)null>=0 is true and(1)null>0 is false.


// ===  =>also check the data type (strickly check the value) 
    console.log("2" === 2);  //false
    // try to avoid this types of comparisons

