//blog mangement api 

import express from 'express'
import {welcomeBlog} from '../controller/blogcontroller';

const route = express.Router();
//router level middleware  funciton look at the arguments 
// router.get("/blog",(req,res)=>{
// res.send("welcme to the blog mangement api ")
// })
router.get("/blog");
export default router;

