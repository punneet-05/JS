let a = 300
//var c we dont declare with var because it act as a global scope
//so if we declare it inside any function , it also give the output outside the function.

//scope declare inside{}


if(true){
    let a = 10
    const b = 20
    console.log("ineer:", a);
}

console.log(a);


////////////////////////////////////nested scope////////////////////

function one() {
    const username = "puneet"

    function two()  {
        const website = "youtube"
        console.log(username);
    }
    two()
}

one()   // this one only execute when the two is execute

// +++++++++++interseting++++++++++++++++

console.log(addone(5))//in this case  we easely declare
                      //before the function

function addone(num){
    return num + 1


}




addTwo(5)   // in this case it showes error
            // becase in this case we also hold it in variable
const addTwo = function(num){
    return num + 2
}




