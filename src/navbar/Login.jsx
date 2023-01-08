import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");

    if (auth) {
      navigate("/");
    }
  });

  const handellogin = async () => {
    console.log(email, password);
    let result = await fetch("https://long-tan-crane-hem.cyclic.app/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log("result");
    console.log(result);
    if (result.admin === 1) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/admin");
    } else if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
      alert("Login Successfully");
    } else {
      alert("plz enter valid email and password");
    }
  };
  return (
    <div className="login">
      <div className="login-box-1"></div>
      <div className="login-box-2">
        <h1 className="register">Log In</h1>
        <input
          className="inputbox-1"
          type="email"
          name=""
          id=""
          required
          placeholder="Admin Email - admin@123.com"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="inputbox-1"
          type="password"
          name=""
          required
          id=""
          placeholder="Admin Password - admin"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <button style={{cursor:"pointer"}} onClick={handellogin} type="button" className="buttonsignup-1">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
