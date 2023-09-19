const http= require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Hey Welocme to the Page")
    }else if(req.url === '/about'){
        res.end('Etho panna try panren')
    }else {
        res.end(`
        <h1> Hey you have entered wrong path </h1>
        `)
    }
})
server.listen(5000)
// console.log(server)