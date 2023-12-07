import React from "react";
import "./login.css";
import signupImg from "../../assets/login.png";
import googleIcon from "../../assets/googleIcon.png";

const Login = () => {
  return (
    <div className="signupComp">
      <div className="loginImg">
        <img src={signupImg} alt="" />
      </div>
      <div className="signUpForm">
        <h1>LOG IN</h1>
        <div className="formFields">
          <div className="nameFields">
            <input type="text" className="first" placeholder="First Name" />
            <input type="text" className="last" placeholder="Last Name" />
          </div>
          <input type="email" className="email" placeholder="Email" />
          <input type="password" className="pass" placeholder="Password" />
          <input
            type="password"
            className="confrmPass"
            placeholder="Confirm Password"
          />
        </div>
        <button className="signInBtn">SIGN UP</button>
        <div className="googleSignup">
          <p>Or SignUp with</p>
          <img src={googleIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
