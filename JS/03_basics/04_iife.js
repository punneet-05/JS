// Immediately Invoked Function Expressions (IIFE)


//global scope ke pollution ke problem ko hatane ke liye hum iife use krte hai 

(function chai(){            // named IIFE (chai)
    console.log(`DB CONNECTED`);
})();

( (name) => {                //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})(`puneet`)