import mongoose from "mongoose"
import dotenv from "dotenv";

const URI= process.env.MONGODB_URI  || ""
const connectdb = async ()=>{
   try {
     const conn = await mongoose.connect(URI)
     console.log("db connected succusfully")
    
   } catch (error) {
      console.log(error,"error db")
   }
}
 export default connectdb;