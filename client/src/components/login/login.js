import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = ({ setLoginUser }) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios
      .post("http://localhost:9002/login", user, { withCredentials: true })
      .then((res) => {
        alert(res.data.message);
        // console.log(res.data);
        if (res.data.message === "Login Successfull") {
          delete res.data.user.password;
          console.log(res.data.user);
          setAuth({
            user: res.data.user,
            identity: res.data.user.identity,
            accessToken: res.data.accessToken,
          });
          if (from === "/") navigate("/" + res.data.user.identity);
          else navigate(from, { replace: true });
        } else {
          alert("Invalid");
        }
      });
  };
  const handleEnter = (event) => {
    if(event.keyCode === 13){
      document.getElementById("loginButton").click();
    }
  };

  return (
    <>
    { auth?.user
        ? <Navigate to={`/${auth.user.identity}`} state={{from : location}} replace />
        : <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        onKeyDown={handleEnter}
        placeholder="Enter your Email"
        autoComplete="off"
        autoFocus
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        onKeyDown={handleEnter}
        placeholder="Enter your Password"
      ></input>
      <div className="button" id="loginButton" onClick={login}>
        Login
      </div>
      <div>
        <p>Don't have an account?
        <button
          type="button"
          class="btn btn-link"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        </p>
      </div>
    </div>
      }
    </>
    
  );
};

export { Login };
