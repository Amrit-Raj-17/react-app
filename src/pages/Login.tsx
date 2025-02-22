import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Import styles

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/"); // Redirect to Home after login
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/signup" className="login-button">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
