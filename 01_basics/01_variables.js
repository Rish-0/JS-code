const AccountID=144553
let AccountEmail="bing@gmail.com"
var AccountPassword="1234"
AccountCity="Jaipur"
let AccountState;
// AccountID=2 //not allowed
AccountPassword="12121212"
AccountCity="Delhi"

console.log(AccountID)
/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([AccountID,AccountEmail,AccountPassword,AccountCity,AccountState])