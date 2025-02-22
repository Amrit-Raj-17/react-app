import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to = "/">Home</Link>
        <Link to = "/signup">Sign Up</Link>
        <Link to = "/login">Log In</Link>
        <Link to = "/about">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
