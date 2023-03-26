import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = ({ setLoginUser }) => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

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
      .post("http://localhost:9002/login", user, {withCredentials : true})
      .then((res) => {
        alert(res.data.message);
        console.log(res.data);
        if (res.data.message === "Login Successfull") {
          setAuth({"user":res.data.user, "identity":res.data.user.identity, "accessToken":res.data.accessToken});
          if (res.data.user.identity === "doctor") {
          } else if (res.data.user.identity === "nurse") {
            navigate("/nurse");
          } else if (res.data.user.identity === "pharmacy") {
            navigate("/pharmacy");
          } else if (res.data.user.identity === "receptionist") {
            navigate("/receptionist");
          } else if (res.data.user.identity === "student") {
            navigate("/student");
          }
        } else {
          alert("Invalid");
        }
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export { Login};
