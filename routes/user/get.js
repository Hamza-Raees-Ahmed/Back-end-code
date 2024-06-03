import User from "../../models/user/user.js";

 const getusers =  async(req, res) => {
    
     try {
        

        const  user  =  await User.find();

    res.status(200).json({
  
      status: 200,
      message: "Users found",
      user: user
    }) 
     } catch (error) {
         res.status(403).send({status : 403,error})
     }  
}
export {getusers};