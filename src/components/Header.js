import React, { useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const handleLoggedIn = () => {
    setIsloggedIn((prevLoggedIn) => !prevLoggedIn);
  };
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo-container">
          <img className="logo" src={HEADER_LOGO_URL} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about">About us</Link>
            </li>
            <li>
              <Link to = "/contact">Contact us</Link>
            </li>
            <li>
              <Link to = "/cart">Cart</Link>
            </li>
            <button onClick={handleLoggedIn}>
              {isloggedIn === false ? "Login" : "Logout"}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
