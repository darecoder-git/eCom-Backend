const router =require("express").Router()
const user= require("../models/user")
const CryptoJS=require("crypto-js");

const jwt = require("jsonwebtoken");



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
      !user && res.status(401).json("wrong credentials!")

      const hashpassword=CryptoJS.AES.decrypt(
      user.password,
      process.env.Pass_SEC
      );
   const opassword=hashedPassword.toString(CryptoJS.enc.utf8);
   opassword!== req.body.password && res.status(401).json("wrong credentials");



    const accessToken=jwt.sign({
          id:user._id,
          isAdmin:user.isAdmin


    },process.env.JWT_SEC,
    {expiresIn:"3d"}
    
    );
    const{password,...others}=user;
    res.status(200).json({others,accessToken})


   }
   catch(err){
    res.status(500).json(err)
   }
});
module.exports=router;