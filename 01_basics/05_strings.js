const name="wizard"
const repoCount=10
console.log(name+repoCount+" Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Super Mario')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));

// Substring division
const newString=gameName.substring(0,4);
console.log(newString);

console.log(gameName.slice(-11,4));

const newString1="   mango   "
console.log(newString1.trim());   //removes whitespaces

const url="https://mango.com/mango%20fruit"
console.log(url.replace('%20','-'));  //replaces first occurrence
console.log(url.includes('fruit'));
console.log(url.includes('aman'));
console.log(gameName.split('-'));