const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,cur_val){
//     console.log(`acc:${acc} and current value:${cur_val}`)
//     return acc+cur_val
// },0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.group(myTotal)

const shoppingCart=[
    {
        itemName:"JS",
        price:2999
    },
    {
        itemName:"Python",
        price:999
    },
    {
        itemName:"Mobile Dev",
        price:5999
    },
    {
        itemName:"Data Science",
        price:12999
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)