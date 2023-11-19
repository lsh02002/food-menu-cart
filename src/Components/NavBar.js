import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import cartImg from "../assets/cart.svg";

const NavBar = () => {
  return (
    <div className="main-nav-bar">
      <Link to="/cart">
        <img src={cartImg} alt="" width="48" />
      </Link>
    </div>
  );
};

export default NavBar;
