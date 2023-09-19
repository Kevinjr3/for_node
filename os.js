const os = require('os')

const info = os.userInfo()

//console.log(info)
//console.log(os.uptime())

const systeminfo ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

onsole.log(systeminfo)
const path =require ('path')

console.log(path.sep)

const fold = path.join('/hey','hola','hello.js')
console.log(fold)
const base= path.basename(fold)
console.log(base)
const whole = path.resolve(__dirname,'/hey','hola','hello.js')
console.log(whole)