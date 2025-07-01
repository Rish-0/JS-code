const marvel_heroes=["thor","ironman","hulk"]
const dc_heroes=["batman","superman","flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const heroes=marvel_heroes.concat(dc_heroes)
// console.log(heroes)

const all_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_heroes)

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherarray.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("aman"))
console.log(Array.from("aman"))
console.log(Array.from({name:"aman"}))   //interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))  //creates an array with the given elements