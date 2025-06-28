const score=400

const balance=new Number(100)
console.log(balance);
console.log(score);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber=23.98353
console.log(otherNumber.toPrecision(3));

const someNumber=11234.938465
console.log(someNumber.toPrecision(5));

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-US'));

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(8.4))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.6))
console.log(Math.min(2,3,4,5,6,7,8,9))
console.log(Math.max(2,3,4,5,6,7,8,9))
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)