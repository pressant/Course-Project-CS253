const express = require('express');
const User = require('../model/userSchema.js')
const router = express.Router();
const mongoose = require('mongoose');
require('../db/comm')

router.get('/', (req, res) => {
    res.send("HI");
})


router.post('http://localhost:4000/register', async (req,res)=>{
    const {name,roll_No,phone,bloodgroup,iitkemail,pass}=req.body;
    if (!name || !iitkemail || !phone || !roll_No || !pass || !bloodgroup) {
             return res.status(422).json({
                    error: "Plz insert all details"
                });
            }
    try {
        const userExist= await User.findOne({iitkemail:iitkemail});
        if(userExist){
            return res.status(422).json({err:"User already exits"});
        }

        const user=new User({name,roll_No,phone,bloodgroup,iitkemail,pass});
        
          await user.save();
          res.status(201).json({message:"Succesfully registered"});

    }
    catch(err){
         console.log(err);
    }
})

module.exports = router;