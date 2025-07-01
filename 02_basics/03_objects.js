// Singleton 
// Object.create.

// Object literals
const mySym=Symbol("key1")

const Jsuser={
    name:"Shivam",
    "full name":"Shivam Malik",
    age:19,
    [mySym]:"mykey1",
    location:"Delhi",
    email:"sshivam12@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(Jsuser[mySym])

Jsuser.email="shivamm34@yahoo.co.in"
// Object.freeze(Jsuser)   //prevents any changes to the object
Jsuser.email="shivammalik@microsoft.com"
console.log(Jsuser)


Jsuser.greeting=function(){
    console.log("Hello JS User!")
}
Jsuser.greeting2=function(){
    console.log(`Hello JS User,${this.name}`)
}

console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())