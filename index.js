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

const express = require('express')

const app = express()
app.get("/", (req,res)=>{
  return res.send("Hello From Home Express")
})
app.get("/about", (req,res)=>{
  return res.send("Hello From About Express" + "Hey" + req.query.name)
})

const myServer = http.createServer(app)


myServer.listen(8000, ()=> console.log("On Port 8000") )











// const Myserver =  http.createServer((req, res)=>{
//   if(req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}: ${req.url} ${req.method} New Req Recived\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile("log.txt", log,(err,data)=>{
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Homepage")
//         break;
    
      case "/about":
        res.end("I am Atharv Dalal")
        break;
    
//       default:
//         res.end("404 Not Found")
//     }
//   })



// })