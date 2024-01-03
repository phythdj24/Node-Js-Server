
const fs = require('fs')
const os = require('os')

console.log( os.cpus().length);



// fs.writeFileSync('./test.txt','Hey I am Atharv Dalal')
// fs.writeFile('./test.txt','Hey I am Atharv Dalal i am async',(err)=> {})



//Bloacking operation
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);
// console.log("2");

//Non-blocking operation
// console.log("1");
// fs.readFile('contact.txt','utf-8', (err,result)=> {
//     console.log(result);
// })
// console.log("2");


// default Therad Pool size = 4
//max? - 8core



 

//  fs.readFile("./contact.txt", "utf-8", (err, result) =>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     } 
// } )
