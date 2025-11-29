// import express from 'express'

// const app = express();
// //this is called 
// app.get('/',()=>{
//     console.log()
// })

// // deployed on a port 
// // PORT---->>network ports --> interfaces thrugh  which our applications acces the network 

// app.get('/',(req,res)=>{
//     console.log("root called ")
//     res.send("welcome to the root router "

//     )
// })

// app.listen(
//     3000,()=>{
//         console.log("the server has been live ")
//     }
// )

//event driven -->> some event will trigger than a funciton will  run 
// req-> funciton------ res 
// document.addEventListener("click")

// espress provide us with a very clean way og handling what we recieve as a request anf what we caan send back as a response 
// req, res => request and response objects that are propvided by express

//https://lcoalhost:3000/



import express from "express"

const app = express();
app.get("/", (req, res) => {
  res.send("Server is working!");
});


app.get("/request",(req,res)=>{
  console.log(req)
  res.send("Rquest route keep add the syntex  in ur mind  ");
  const body = req.body;

const ip = req.ip
const path = req.path
const protocol = req.protocol
const hostname = req.hostname
const method = req.method
const route = req.route

res.send({
  headers,body
})





})


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
