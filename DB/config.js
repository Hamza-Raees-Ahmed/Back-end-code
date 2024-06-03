import mongoose from "mongoose"
import dotenv from "dotenv";

const URI= 'mongodb+srv://hamzaqazi2508:bW6atnCQIlwgsK5G@cluster0.h1tegnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectdb = async ()=>{
   try {
     const conn = await mongoose.connect(URI)
     console.log("db connected succusfully")
    
   } catch (error) {
      console.log(error,"error db")
   }
}
 export default connectdb;