const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc}and currva: ${currval}`)
    return acc + currval
}, 0)

console.log(myTotal);


const shoppingcart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "app development course",
        price: 12999
    },
    {
        itemname: "data sceince course",
        price: 7999
    },
]

const pricetopay = shoppingcart.reduce( (acc, item) => acc + item.price, 0)

console.log(pricetopay);
