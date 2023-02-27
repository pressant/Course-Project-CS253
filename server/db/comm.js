const mongoose = require('mongoose');

const DB="mongodb+srv://CS:5i4tDRJZM5W78xgn@cluster0.5ebvu5n.mongodb.net/?retryWrites=true&w=majority";


mongoose.set('strictQuery', true);
mongoose.connect(DB,{ useNewUrlParser: true }).then(
    ()=>{
      console.log('connected');
    }
   ).catch((err)=>{
    console.log(err);
   })
