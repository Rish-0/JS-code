const user={
    username:"Ajay",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to this website`)
        console.log(this);
    }
}
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()


console.log(this);


function ch(){
    let username="Rohan"
    console.log(this.username);
}
ch()     //this keyword can't be used in functions

const chc=function(){
    let username="Rohan"
    console.log(this.username);
}
chc()


const ll=()=>{
    let username="Rohan"
    console.log(this.username);
}
ll()


// const addTwo=(num1,num2)=>{
//     return num1+num2        // explicit return(return keyword)
// }

// const addTwo=(num1,num2) => num1+num2    //implicit return (no return keyword)

// const addTwo=(num1,num2) => (num1+num2)     //implicit return

const addTwo=(num1,num2) => ({username:"sova"})
console.log(addTwo(4,8));


const myArray=[2,3,3,4,4,5]
// myArray.forEach(())