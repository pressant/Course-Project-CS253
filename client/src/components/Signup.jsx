import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');
const Signup = () => {
  
   const navigate=useNavigate(); 
    
   let key;
   let value;

   // const postData=async (e)=>{
   //         const {name,roll_No,phone,bloodgroup,iitkemail,pass}=user;
   //         const response = await fetch('http://localhost:4000/register',{
   //          method:'POST',
   //          headers:{'Content-type': 'application/json' },
   //          body:JSON.stringify({name,roll_No,phone,bloodgroup,iitkemail,pass})
   //         });

   //         const res = await response.json();
   //         if (res.status === 422 || !res) {
   //           console.alert("error")
   //         }
   //         else {
   //           console.log("success");
   //           navigate('/login');
   //         }
   // }
      const postData=async (e)=>{
         const {name,roll_No,phone,bloodgroup,iitkemail,pass}=user;
           axios.post("/register",{
            body: {name,roll_No,phone,bloodgroup,iitkemail,pass}
           }).then((res)=>{
            console.log(res);
           })
      }


   const [user,setUser]=useState({
    name:"", roll_No:"",phone:"",bloodgroup:"",iitkemail:"k@gmail.com",pass:""
   })


   const Changed=(e)=>{
    key=e.target.name;
    value=e.target.value;
     setUser({...user,[key]:value})
   }

  return (
    <>


      <form action="POST">
        <div>
           <input type="text" id="name" name='name' placeholder='Name' autoComplete='off'  value={user.name} onChange={Changed}/>
        </div>
        
        <div>
           <input type="text" id="bloodgroup" name='bloodgroup' placeholder="Bloodgroup" autoComplete='off'  value={user.bloodgroup} onChange={Changed}/>
        </div>

        <div>
           <input type="number" id="phone" name='phone' placeholder='Phone' autoComplete='off'  value={user.phone} onChange={Changed}/>
        </div>

        <div>
           <input type="number" id="roll_No" name='roll_No' placeholder='Roll_No' autoComplete='off'  value={user.roll_No} onChange={Changed}/>
        </div>

        <div>
           <input type="email" id="email" name='email' placeholder='Email' autoComplete='off'  value={user.iitkemail} onChange={Changed}/>
        </div>
        
        <div>
           <input type="password" id="pass" name='pass' placeholder='Password' autoComplete='off'  value={user.pass} onChange={Changed}/>
        </div>
        

         <input type="submit" id="signup" name='signup' value="register" onClick={postData}/>
      </form>

    </>
  )
}

export default Signup
