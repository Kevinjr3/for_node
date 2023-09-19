
const {writeFile, readFile}= require('fs');

readFile('./hey/hola/hello.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})
writeFile('./hey/hola/prac.txt','helo mi amigas',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log(result)
})