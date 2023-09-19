
const {readFileSync , writeFileSync} =require('fs')

const first = readFileSync('./hey/hola/hello.txt', 'utf8')
 
const newone = writeFileSync(
    './hey/hola/vanakkam.txt','hello my frnds'
)
console.log(first)