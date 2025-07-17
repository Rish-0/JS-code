const user={
    username:"rishabh",
    loginCount:6,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database")
        console.log(`${this}`)
    }
}
console.log(user)
console.log(user.getUserDetails()); 
console.log(this)

const promiseOne=new Promise()    // new => constructor function
const date=new Date()

function User(username,loginCount,isLoggedIn){
    this.username=username;   // LHS = variable ; RHS = which is given by passing
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome, ${this.username}`)
    }
    return this   // need not to write return
}
const userOne=new User("rishabh",4,false)
const userTwo=new User("lassi",23,true)
console.log(userOne.constructor);
console.log(userTwo);