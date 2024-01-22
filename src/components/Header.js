import React from "react";
import { HEADER_LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo-container">
          <img className="logo" src={HEADER_LOGO_URL} alt=""/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;