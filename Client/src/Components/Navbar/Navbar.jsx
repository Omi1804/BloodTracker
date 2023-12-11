import React from "react";
import logo from "../../assets/navbar/logo.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarSec">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navMenus">
        <ul className="navList">
          <li className="navLinks">
            <a href="/">About Us</a>
          </li>
          <li className="navLinks">
            <a href="">Donation Blood</a>
          </li>
          <li className="navLinks">
            <a href="">Receive Blood</a>
          </li>
          <button className="loginBtn">
            <a href="/login">Login</a>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
