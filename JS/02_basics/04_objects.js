//const tinderUser = new object()    //singleton object
const tinderUser = {}    //non singleton object , the output are same in both i.e {}


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "puneet",
            lastname: "jaiswal"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//erging
const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}   //spread method
console.log(obj3);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



console.log(Object.keys(tinderUser));    //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));   //[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]




const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "puneet"
}

//course.courseInstructor

const {courseInstructor: instructor} = course   //destructuring

console.log(courseInstructor);   //or
console.log(instructor);


//JSON API

//{
    //"name": "puneet",
    //"coursename": "js in hindi"
    //"price": "free"
//}

[
    {},
    {},
    {}


]