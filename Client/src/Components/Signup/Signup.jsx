import React from "react";
import "./signup.css";
import signupImg from "../../assets/signup.png";
import googleIcon from "../../assets/googleIcon.png";

const Signup = () => {
  return (
    <div className="signupComp">
      <div className="signUpForm">
        <h1>SIGN UP</h1>
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
      <div className="signupImg">
        <img src={signupImg} alt="" />
      </div>
    </div>
  );
};

export default Signup;
