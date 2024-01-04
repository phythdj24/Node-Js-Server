// const http = require("http")
// const fs = require('fs')

// const myServer = http.createServer((req, res)=>{
//     const log = `${Date.now()} : New Req Recived\n`
//   fs.appendFile('log.txt',log,(err,data)=>{
//     res.end('Hello From Server Again')
//   } )
 
// })

// myServer.listen(8000,()=> console.log("Server Started") )


const http = require('http')



const Myserver =  http.createServer((req, res)=>{
  const log = 
  res.end("Server Started")

})

Myserver.listen(8000, ()=> console.log("On Port 8000") )