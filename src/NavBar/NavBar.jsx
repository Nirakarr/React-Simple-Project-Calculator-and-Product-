import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <div className="logo">NavBar</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/more">More</Link>
          </li>
        </ul>
        <div className="button">
          <button>Click Here</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
