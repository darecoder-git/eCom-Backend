const router =require("express").Router()
const user= require("../models/user")
const CryptoJS=require("crypto-js");





//REGISTER
router.post("/register",async(req,res)=>{
   const newUser=new user({
       username:req.body.username,
       email:req.body.username,
       password:CryptoJS.AES.encrypt(req.body.password,"process.env.PASS_SEC").toString(),
   });
   try{
   const saveduser= await newuser.save();
   res.status(201).json(savesduser);
   }

   
   catch(err){   
   res.status(500).json(err);
   }
});


//LOGIN

router.post("/login",async(req,res)=>{
   try{
      const user=await user.findone({username:req.body.user});
      const hashpassword=CryptoJS.AES.decrypt(
      user.password,
      process.env.Pass_SEC
      );
   const password=hashedPassword.toString(CryptoJS.enc.utf8);

   }
   catch(err){
    res.status(500).json(err)
   }
});
module.exports=router;