const amount=12
if (amount<10){
     console.log("It's Big Number")
}else{
    console.log("Small Number")
}
console.log(`Hey its my first node `)

const h= require('lodash')

const item=[1,[2,[3,4,5,[6]]]]
const filter = h.flattenDeep(item)

console.log(filter)