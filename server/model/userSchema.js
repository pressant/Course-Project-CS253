const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    roll_No:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    bloodgroup:{
        type: String,
        required:true
    },
    iitkemail:{
        type: String,
        required:true
    },
    pass:{
        type: String,
        required:true
    }

})


const User=mongoose.model('USER' , userSchema);

module.exports=User;