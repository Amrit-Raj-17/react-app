import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>Join us to explore new opportunities and grow your career.</p>
      <div className="button-container">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
};

export default Home;
