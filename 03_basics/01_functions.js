function sayMyName(){
    console.log("R")
    console.log("O")
    console.log("N")
}
// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(2,4)

function addTwoNumbers(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}
const result=addTwoNumbers(3,5)
console.log("Result:",result);

function loginUserMessage(username="Sam"){
    if(username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Max"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(100,400,500,5000))

const user={
    username:"Pranav",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject({
    username:"Brian",
    price:299
})

const myNewArray=[200,500,600,700]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400,600,800,1200]));