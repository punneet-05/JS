const accountId = 123456
let accountEmail = "oun@gmail.com"
var accountPassword = "12543"
accountCity = "delhi"
let accountState;

//chnaging detail

accountEmail = "pun@gmail.com"
accountPassword = "987654"
accountCity = "jaipur"

/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.log(accountId)

/*
now to show the data in table form
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])