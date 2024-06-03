import express from "express";
  
import connectdb from "./DB/config.js";
import { Route } from "./routes/index.js";
// import multer from "multer"; // for uploading imges and files
// // const upload = multer({ dest: 'uploads/' }) // for defining the location where to store file and imges //


const app = express();

app.use(express.json());  // use middleware to convert the dta into the JSON object so that server easily understand
app.use("/auth",Route)

 const PORT = 3001

 connectdb();

//  app.get("/user",(req,res)=>{
//     res.send("home page")
//     console.log(req)
//  })
//  app.get("/profile",(req,res)=>{
//     res.send("profile page")
//  })
//  app.get("/payment",(req,res)=>{
//     res.send("payment page")

//  })
//  app.post("/user",upload.single('profile'),(req,res)=>{ // img come on server without extension like png/jpg etc
//     console.log(req.file,"file agaii")

//      console.log("body request",req.body)

//     res.send({message: "Sign in succesfully"})
//  })

//  app.post("/user",(req,res)=>{ // img come on server without extension like png/jpg etc
//    //  console.log(req.body,"file agaii")

//      console.log("body request",req.body)

//     res.send({message: "Sign in succesfully"})
//  })


 app.listen(PORT,()=>
{
    console.log("the server is runnig on the port",PORT)
})
