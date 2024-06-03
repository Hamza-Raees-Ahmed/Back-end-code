import User from "../../models/user/user.js";
import nodemailer from "nodemailer";


// const sendMail=()=>{ // for sending to user email txt or code etc 
//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: "hamzaqazi2508@gmail.com",
//       pass: "yruv ppws cpdq nbor",
//     },
//   });
  
//   // async..await is not allowed in global scope, must use a wrapper
//   async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: 'hamzaqazi2508@gmail.com', // sender address
//       to: "vigaticheran@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//        // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
//   }
  
//   main().catch(console.error);

// }

 const userSignup = (req, res) => {
    try {
      const  user  =  new User(req.body)
    
     user.save()
    //  sendMail();
    res.json({
  
      status: 200,
      message: "Signup Successfully",
      user: user
    })  
    } catch (error) {
      res.status(400).send({status:400, error})
    } 
}
export {userSignup};