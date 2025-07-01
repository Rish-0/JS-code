const tinderUser=new Object()
// const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=true
// console.log(tinderUser);

const regularUser={
    email:"random@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Neeraj",
            lastname:"Pepsu"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.lastname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}
console.log(obj3)

const users=[
    {
        id:1,
        email:"A@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
    {
        id:4,
        email:"d@gmail.com"
    },
]

users[2].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"JavaScript",
    price:999,
    courseInstructor:"Mahi"
}

const{courseInstructor:instructor}=course
console.log(instructor);
// console.log(courseInstructor)

// const navbar=({company})=>{

// }

// navbar(company="Lokesh")

{
    "name":"Manan",
    "coursename":"JavaScript",
    "price":"free"
}