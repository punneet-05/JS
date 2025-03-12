const coding = ["js", "ruby", "java", "python"]

//coding.forEach( function (val){
  //  console.log(val);
//})



 coding.forEach( (item) => {
    console.log(item);
 })


 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
 
    {
        languageName: "java",
        languageFileName: "java"
    },
 
    {
        languageName: "python",
        languageFileName: "py"
    }
 ]

   myCoding .forEach ( (item) => {

    console.log(item.languageName);   // array in object
   })