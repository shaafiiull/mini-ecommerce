import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link className="menu-item" to="/shop">
          Shop
        </Link>
        <Link className="menu-item" to="/orders">
          Orders
        </Link>
        <Link className="menu-item" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;
