import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit" className="signup-button">Create Account</button>
      </form>
      <p className="signup-text">
        Already have an account? <Link to="/login" className="login-button">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
