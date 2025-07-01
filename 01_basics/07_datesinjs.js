// Dates

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate=new Date(2023,1,20)
let anotherCreatedDate=new Date(2023,0,29,5,7)
let someDate=new Date("2023-01-12")
console.log(myCreatedDate.toDateString())
console.log(anotherCreatedDate.toLocaleString())
console.log(someDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))   // in ms

let newDate=new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)  

// console.log(`${newDate.getDay()}`)

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))