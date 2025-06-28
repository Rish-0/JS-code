console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(21=1);

console.log("2">1);    //throws error 
console.log("02">1);   //throws error

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(null<0);
console.log(null<=0);     //these type of conversions create confusion(avoid them)
//Equality check "==" and comparisons "< > <= >=" work differently
//Comparisons convert null to a number, which is 0 that's why null>=0 and null<=0 gives true
//And null>0,null<=,null==0 gives false

console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);    //these type of conversions create confusion

// === (strict check) checks for both value and datatype
console.log("3"===3);  //false