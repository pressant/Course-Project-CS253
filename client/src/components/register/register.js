import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {auth} = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    rollno: "",
    bg: "",
    identity: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const Change = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      identity: value,
    });
  };

  const register = () => {
    const { name, email, rollno, identity, password, reEnterPassword } = user;
    if (password !== reEnterPassword) {
      alert("Password not matched");
      return;
    }
    console.log(user);
    if (
      name &&
      email &&
      password &&
      rollno &&
      identity &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("invlid input");
    }
    console.log(user);
  };

  const handleEnter = (event) => {
    if(event.keyCode === 13){
      document.getElementById("registerButton").click();
    }
  }

  return (
    <>
        {
            auth?.user
                ? <Navigate to={`/${auth.user.identity}`} state={{from : location}} replace />
                : <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
        onKeyDown={handleEnter}
        autoComplete="off"
        autoFocus
      ></input>
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
      <input
        type="text"
        name="rollno"
        value={user.rollno}
        placeholder="Your Roll No"
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
      <input
        type="text"
        name="bg"
        value={user.bg}
        placeholder="Your Blood Group"
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
      <select placeholder="Identity" onChange={Change} onKeyDown={handleEnter}>
        <option id="identity">Please Select your Identity</option>
        <option value="student">Student</option>
        <option value="doctor">Doctor</option>
        <option value="receptionist">Receptionist</option>
        <option value="nurse">Nurse</option>
        <option value="pharmacist">Pharmacist</option>
      </select>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>

      <div className="button" id="registerButton" onClick={register}>
        Register
      </div>
      <div>
        <p>
            Already have an account?
            <button
          type="button"
          class="btn btn-link"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        </p>
      </div>
    </div>
        }
    </>
  );
};

export default Register;
