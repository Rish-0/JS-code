var c=40
let a=300

if(true){
    let a=10
    const b=20
    console.log("INNER:",a)
}

console.log(a);
// console.log(b);
// console.log(c);


if(true){
    const username="Ming"
    if(username==="Ming"){
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++ interesting +++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}

const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))