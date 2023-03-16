import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
const global=[];
const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            global.push(res.data.user.name,res.data.user.identity,res.data.user.rollno);
            console.log(global);
            if(res.data.user.identity==='doctor'){
            history.push("/doctor")
            }
            else if(res.data.user.identity==='nurse'){
                history.push("/nurse")
                
            }
            else if(res.data.user.identity==='pharmacy'){   
                history.push("/pharmacy")
        
            }
            else if(res.data.user.identity==='receptionist'){
                history.push("/receptionist")
             
            }
            else if(res.data.user.identity==='student'){
                history.push("/student")
         
            }
            else{
                alert("Invalid Identity")
                
            }
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export  {Login,global}