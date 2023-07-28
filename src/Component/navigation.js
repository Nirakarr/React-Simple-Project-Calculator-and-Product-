import React from "react";
import "./navigation.css";
const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <div className="inputs">
          <input type="text" placeholder="Search"></input>
          <button>Search</button>
        </div>
      </ul>
    </div>
  );
};
export default Nav;
