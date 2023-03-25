//ABC -Aniket

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

//mongodb+srv://CS:5i4tDRJZM5W78xgn@cluster0.5ebvu5n.mongodb.net/
//mongodb+srv://aniketsborkar:AeQrXz4v5Go8WTKP@cluster0.ukqevpn.mongodb.net/test
mongoose.connect("mongodb+srv://aniketsborkar:AeQrXz4v5Go8WTKP@cluster0.ukqevpn.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    rollno:String,
    bg:String,
    identity:String,
    password: String
})

const User = new mongoose.model("User", userSchema)

const loggedUserSchema = new mongoose.Schema({
    email : String,
    identity : String,
    refreshToken : String
})

const loggedUser = new mongoose.model("loggedUser", loggedUserSchema)

//Routes
app.post("/login", async (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, async (err, user) => {
        try {
            if(user){
                console.log(user);
                const isMatch = await bcrypt.compare(password, user.password)
                if(isMatch) {
                    const accessToken = jwt.sign(
                        {email, identity : user.identity},
                        process.env.ACCESS_TOKEN_SECRET,
                        {expiresIn : '600s'}
                    )
                    const refreshToken = jwt.sign(
                        {email},
                        process.env.REFRESH_TOKEN_SECRET,
                        {expiresIn : '7d'}
                    )
                    const newLoggedUser = new loggedUser({
                        email,
                        refreshToken
                    })
                    await newLoggedUser.save(err => {
                        if(err){
                            res.send(err)
                        }
                    })

                    // console.log(accessToken)
                    // console.log(newLoggedUser)
                    res.cookie('jwt', refreshToken, {httpOnly : true, maxAge : 7 * 24 * 60 * 60 * 1000})
                    res.json({ message: "Login Successfull", user: user, accessToken })
                    
                    // res.send({message: "Login Successfull", user: user})
                } else {
                    res.send({ message: "Password didn't match"})
                }
            } else {
                res.send({message: "User not registered"})
            }
        } catch (err) {
            res.status(500).send()
        }
    })
}) 

app.post("/register", async (req, res)=> {
    const { name, email,rollno,bg,identity, password} = req.body
    User.findOne({email: email}, async (err, user) => {
        try {
            if(user){
                res.send({message: "User already registerd"})
            }
            else {
                const hashedPassword = await bcrypt.hash(password, 10)
                const user = new User({
                    name,
                    email,
                    rollno,
                    bg,
                    identity,
                    password : hashedPassword
                })
                // console.log(user)
                await user.save(err => {
                    if(err) {
                        res.send(err)
                    } else {
                        res.send( { message: "Successfully Registered, Please login now." })
                    }
                })
            }
        } catch (error) {
            res.status(500).send()
        }
    })
    
}) 

app.get("/refresh", async (req, res) => {
    const cookies = req.cookies
    if(!(cookies?.jwt)) return res.sendStatus(401)
    const refreshToken = cookies.jwt
    console.log(refreshToken)

    loggedUser.findOne({refreshToken : refreshToken}, async (err, user) => {
        if(!user) res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err || user.email !== decoded.email) return res.sendStatus(403)
            const accessToken = jwt.sign({email : decoded.email, identity : decoded.identity}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : "600s"})
            res.json({accessToken})
        })
    })
})

app.get("/logout", async (req, res) => {
    // On client also, delete the accessToken
    const cookies = req.cookies
    if(!(cookies?.jwt)) return res.sendStatus(204)
    const refreshToken = cookies.jwt

    loggedUser.findOne({refreshToken : refreshToken}, async (err, user) => {
        if(err){
            res.send({message : err.message})
        }
        if(!user){
            res.clearCookie('jwt', {httpOnly : true, maxAge : 7 * 24 * 60 * 60 * 1000})
            res.sendStatus(204)     // No content
        }
        await loggedUser.deleteOne({refreshToken : refreshToken})
        res.clearCookie('jwt', {httpOnly : true, maxAge : 7 * 24 * 60 * 60 * 1000})     // secure : true on production for both creating and clearing cookie
        res.sendStatus(204)
    })
})

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader?.startsWith("Bearer ")) res.sendStatus(401)
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) res.sendStatus(403)         // Invalid token
        req.user = decoded.email
        req.identity = decoded.identity
        console.log(req.user)
        next()
    })
}

const verifyIdentity = (...allowedIdentity) => {
    return (req, res, next) => {
        if(!req?.identity) return res.sendStatus(401)
        const identityArray = [...allowedIdentity]
        console.log(identityArray)
        console.log(req.identity)
        const result = identityArray.includes(req.identity)
        if(!result) return res.sendStatus(401)
        next()
    }
}

// app.use(verifyJWT)

const student_request_schema = new mongoose.Schema({
    name: String,
    rollno:String,
    appy_type:String,
    appt_slot:String,
    symptoms: String,
    Doctor:String,
    identity:String
})

const Student_request = new mongoose.model("Student_request", student_request_schema)

app.post("/request_student", (req, res)=> {
    const [ name, rollno,appy_type,appt_slot,symptoms,Doctor ] = req.body
    console.log(req.body);
            const request = new Student_request({
                name,
                rollno,
                appy_type,
                appt_slot,
                symptoms,
                Doctor,
                identity:"student"
            })
                       request.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Succesfully request registered" })
                }
            })
        }
    )
    
    app.get("/upcoming_student", (req, res)=> {
       Student_request.find({identity:"student"}, (err, request) => {
              if(request){
                res.send({message: "Upcoming appointments", request: request})
              } else {
                res.send({message: "No appointments"})
              }
       })
    })  


const apptSchema = new mongoose.Schema({
    name: String,
    rollno:String,
    appy_type:String,
    appt_slot:String,
    symptoms: String,
    Doctor:String,
    
    

    // identity:String,
});

const Appointment = new mongoose.model('Appointment', apptSchema);

const Medical_history = new mongoose.Schema({
    name: String,
    rollno:String,
    count:Number,
    medical_history:[{
        date: Date,
        doctor: String,
        medication:[{name_of_medicine:String,
                    dosage:String,
                    days:Number}],
        vitals_Blood_pressure: String,
        vitals_Oxygen: String,
        vitals_temperature: Number,
        completed: Boolean,
        completed_doc: Boolean
    }],
    
});
const Med = new mongoose.model('Med', Medical_history);


// app.get("/doctor_appt", (req, res) =>{
//     console.log(req.query);
//     Appointment.find({ Doctor: req.query.doctor }).then((err, stuff)=>{
//         if(err){
//             console.log(err);
//             res.send(err);
//         }
//         else{
//             console.log(stuff);
//             res.json(stuff);
//         }
//     });
// });

// app.post("/doctor_prescribe", (req, res) => {

// })


// const arr=[name,roll_id,description,slot,doctor_by_receptionist , doctor_by_student_choice]
app.post("/submitted", (req, res) =>{
    console.log(req.body);
    const [name,roll_id,description,slot,doctor_by_receptionist , doctor_by_student_choice] = req.body;
    console.log(name);
    const appt_final = new Appointment;
    const filter = {
        rollno: roll_id, 
        symptoms: description, 
        appt_slot: slot, 
        Doctor: doctor_by_student_choice
    };
    Student_request.find(filter, (err, stuff) =>{
        console.log("hello");
            if(err){
            console.log("here");
            console.log(err);
            res.send(err);
        }
        else{
            console.log(stuff);
            appt_final.name = stuff[0].name;
            appt_final.rollno = stuff[0].rollno;
            appt_final.appy_type = stuff[0].appy_type;
            appt_final.appt_slot = stuff[0].appt_slot;
            appt_final.symptoms = stuff[0].symptoms;
            appt_final.Doctor = doctor_by_receptionist; //stuff[0].Doctor;
            
            Med.findOne({rollno: stuff[0].rollno}, (err, stuff) =>{
                //made medical history record
                if(stuff){
                    console.log("here");
                    stuff.medical_history.push()
                    // stuff.save();
                }
                else{
                    const med = new Med;
                    med.count=0;
                    med.name = appt_final.name;
                    med.rollno = appt_final.rollno;
                    med.save(err => {
                        if(err){
                            console.log(err);
                            res.send(err);
                        }
                    })
                }
            })

            // appt_final.identity = stuff.
            appt_final.save(err =>{
                if(err){
                    console.log(err);
                    res.send(err);
                }
            });

            
            Student_request.findOneAndDelete(filter, (err) => {
                if(err){
                    console.log(err);
                    res.send(err);
                }
            })
            res.send({message : "Done"});
        }
    })
});
app.get("/new:roll", (req, res)=> {
    Appointment.find({rollno:req.params.roll}, (err, request) => {
        if(request){
            res.send({message: "Upcoming appointments", request: request})
          } else {
            res.send({message: "No appointments"})
          }
    })
})

app.get("/doctor:name", (req, res) =>{
     Appointment.find({Doctor:req.params.name}, (err, request) => {
        if(request){
            res.send({message: "Upcoming appointments", request: request})
          } else {
            res.send({message: "No appointments"})
          }
        })
});



app.post("/nurse", (req, res) => {
    console.log(req.body);
    Med.findOne({rollno: req.body.rollno}, (err, stuff) => {
                   if(stuff){
                    stuff.medical_history[stuff.count].vitals_Blood_pressure = req.body.vitals_Blood_pressure;
                    stuff.medical_history[stuff.count].vitals_Oxygen = req.body.vitals_Oxygen;
                    stuff.medical_history[stuff.count].vitals_temperature = req.body.vitals_temperature;
                   }
                   stuff.save(err => {
                          if(err){
                            console.log(err);
                            res.send(err);
                          }
                     })
    })
})

app.post("/doctor_prescribe", (req, res) => {
    const {rollno,medication,remark, name_doc, appt_slot} =req.body;
    console.log(req.body);
    Med.findOne({rollno: rollno}, (err, stuff) => {
        const new_appt = {
            date : new Date(),
            doctor: name_doc,
            medication: medication,
            remark: remark,
            completed: false,
            completed_doc: true
        };
        if(stuff){
            console.log(new_appt);
            stuff.medical_history.push(new_appt);
            // stuff.medical_history[stuff.count].medication = medication;
            // stuff.medical_history[stuff.count].remark = remark;
            // stuff.medical_history[stuff.count].completed = true;
            stuff.count = stuff.count + 1;
            stuff.save();
            Appointment.findOneAndDelete({rollno: rollno, Doctor: name_doc, appt_slot: appt_slot}, (err, deleted_stuff) => {
                console.log("hemlo");
                console.log({rollno: rollno, Doctor: name_doc, appt_slot: appt_slot});
                console.log(deleted_stuff);
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else{
                    res.send("ok");
                }
            });
        }
    })


})
    
app.get("/student_history:roll", (req, res) => {
    console.log(req.params.roll);

    Med.findOne({rollno: 'abcd'}, (err, stuff) => {
        console.log(stuff);
        if(stuff){
            res.send({message: "Medical history", request: stuff.medical_history})
          } else {
            res.send({message: "No Medical History"})
          }
    })
})

app.get("/pharmacist", (req, res) => {
    Med.find((err, stuff) =>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            const resp_arr = [];
            stuff.forEach(element => {
                const hist = [];
                element.medical_history.forEach(inner_el => {
                    if(inner_el.completed == false){
                        hist.push(inner_el);
                    }
                });
                if(hist.length != 0){
                    const resp_obj = {
                        rollno : element.rollno,
                        name: element.name,
                        medical_history : hist
                    }
                    resp_arr.push(resp_obj);
                }
            });
            res.json(resp_arr);
        }
    })
});

app.post("/dispense", (req, res) => {
    console.log(req.body);
    const {rollno, UID} = req.body;
    console.log(rollno);
    const filter = {
        rollno: rollno
    }
    Med.findOne(filter, (err, stuff) =>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("receieved stuff");
            console.log(stuff);
            stuff.medical_history.forEach(element => {
                if(element._id == UID){
                    console.log("found it!");
                    element.completed = true;
                    stuff.save();
                }
            })
            res.send("ok");
        }
    });
})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})