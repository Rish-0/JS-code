// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=110.3

const IsLoggedIn=true
const outsideTemp=null
let userEmail;   // or let userEmail=undefined;

const id=Symbol('123');
const anotherid=Symbol('123');

console.log(id === anotherid)

const bigNumber=1293871384523754273542n;
console.log(bigNumber);

//Reference (Non-primitive)

// Array, Objects, Functions (datatype=object)

const heroes=["spiderman","batman","superman"];

let myObj={
    name:"Ivy",
    age:18,
}    // key-value pair
console.log(myObj);

const myFunction=function(){
    console.log("Hello Ivy")
}
myFunction();

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)
console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof IsLoggedIn)
console.log(typeof id)
console.log(typeof anotherid)
console.log(typeof userEmail)    


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive)we get copy , Heap (non-primitive)we get reference
let myYoutubename="Rish_vlogs"
let anothername=myYoutubename
anothername="R_codes"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"zxc@ybl"
}

let userTwo=userOne;
userTwo.email="amit@google.com"
console.log(userOne.email);
console.log(userTwo.email);