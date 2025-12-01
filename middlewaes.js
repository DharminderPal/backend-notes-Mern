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
app.use(myLogger);//i think funciton call here 

app.get('/',()=>{
res.status(200).send("welcome to the middleware root router")
})

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