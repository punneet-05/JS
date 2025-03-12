const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const   newNums = myNums.filter( (num) => num>4)  //filters
console.log(newNums);
/*const   newNums = myNums.filter( (num) =>{
    return num>4)   //if we use {} then we have to write return.
 })                   //filters
console.log(newNums);*/



const books = [
    { 
        title: 'book one', genre: 'fiction', publish: 1981,
        edition: 2004
    },
    { 
        title: 'book two', genre: 'Non-fiction', publish: 1999,
        edition: 2009
    },
    { 
        title: 'book three', genre: 'history', publish: 2009,
        edition: 2013
    },
    { 
        title: 'book four', genre: 'non-fiction', publish: 1992,
        edition: 2016
    },
    { 
        title: 'book five', genre: 'science', publish: 1999,
        edition: 2013
    },
    { 
        title: 'book six', genre: 'fiction', publish: 1989,
        edition: 2010
    },
];

/*const userBooks = books.filter(  (bk) => bk.genre === 'history')

console.log(userBooks);*/

userBooks = books.filter(  (bk) => {
    return bk.publish >= 1955 && bk.genre === "history"
})
console.log(userBooks);

