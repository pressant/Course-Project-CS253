import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        rollno:"",
        bg:"",
        identity:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email,rollno,identity, password, reEnterPassword } = user
        if( name && email && password&&rollno&&identity && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        console.log(user);
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" name="rollno" value={user.rollno} placeholder="Your Roll No" onChange={ handleChange }></input>
            <input type="text" name="bg" value={user.bg} placeholder="Your Bloood Group" onChange={ handleChange }></input>
            <input type="text" name="identity" value={user.identity} placeholder="Your Role" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>

            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register