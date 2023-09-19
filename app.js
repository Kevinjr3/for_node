console.log(__filename)
setInterval(()=>{
    console.log("Hey amiga")
},1000)
console.log("Hello David")
setTimeout(()=>{
    console.log("Hola")
},5000)


const h= require('lodash')

const item=[1,[2,[3,4,5,[6]]]]
const filter = h.flattenDeep(item)

console.log(filter)