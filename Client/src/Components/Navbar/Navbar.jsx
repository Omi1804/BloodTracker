import React from "react";
import logo from "../../assets/navbar/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarSec">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navMenus">
        <ul className="navList">
          <li className="navLinks">About Us</li>
          <li className="navLinks">Donation Blood</li>
          <li className="navLinks">Receive Blood</li>
          <button className="loginBtn">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
