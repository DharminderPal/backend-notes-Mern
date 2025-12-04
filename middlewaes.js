import  express from 'express'
const app = express()

// const myLogger =()=>{

// }


const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

//implementaition of a middleware
//this middleware will be applcable on all the routes that are  written after this in this file!

app.get("/beforeMw",(req,res)=>{
  console.log("before Mw route executed");
  res.status(200).send("welcome to the middleware root router1");
  
})


app.get("/",(req,res)=>{
  console.log("before Mw route executed");
  res.status(200).send("welcome to the middleware root router2");
  
})

app.use(myLogger);//i think funciton call here 


app.listen(()=>{
    console.log("middle file is live on http://localhost:3000")
})

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(3000)


// please install this package npm i nodemon 






// ----------------------------------------
// types of midleware
// ----------------------------------------

// core functios of middlewares 
// execute any code -> write any logic  related to security , validation ,monitorig 
// modify request and response object -> add properties ,parse data origin, transform info in req and res
// end req-res cycle -> if there is an error in data we can send a response witg erro  befre the 
// handler  funttin 


// call next middleware --> next() passing the  request to next line or handler funciton 

// security ->> write your name ,entry time , exit time

//parse json file 
// authenticaiton 

//1. application level middleware -->>> middlewares bound to entire express applicaiptn using
// app.use()  app.method()
//2.app.use(mylogger )
// routes after this middleware will haev to imlemet this beofre thier handler funciton 

// 3. custome middlerware 
// const middle =( req,res,next)=>{
// // logging mean skeeping a record of something 
// const  method= req.path;
// const path = req.path 
// const  time =  new Date()
// console.log(`[${time}]:${route}=${method}=${path}`)
// next();

// }
// app.use(middle);




// 3. builtin middlewares
// app.use(express,json())

app.get("/custominfo",(req,res)=>{
const data = req.body
res.send(data);
})

app.use(myLogger);//i think funciton call here 




// 5. router level middlerw
import blogRoute from './view/blogRoute';


app.use(blogRoute);


// 4. third party middlewares








