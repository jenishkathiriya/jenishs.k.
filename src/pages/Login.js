import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handlesubmit() {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzyt4l5KJsA2seSWbhdoJSyzut3RVPPl8",{email,password})
      .then((res) =>{sessionStorage.setItem("token",res.data.idToken) 
      navigate("/")} )
      .catch((err) => console.log(err));
  }
  return (
    <div className="container col-md-4">
      <h2 className="text-center my-5">Login</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" onClick={handlesubmit}>
        Login
      </button>
      <p>
        Create Your Account <Link to="Register">Register</Link>{" "}
      </p>
    </div>
  );
}

export default Login;
