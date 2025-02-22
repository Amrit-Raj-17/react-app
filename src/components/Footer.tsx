import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Import Icons
import "../index.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://github.com/Amrit-Raj-17" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/amrit-raj-thakur" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="footer-text">
          🚀 Crafted with ❤️ by <strong>JobFinder Team</strong> | &copy; {new Date().getFullYear()}  
          <br />
          🌟 Empowering Careers, One Click at a Time! ✨ </p>
      </div>
    </footer>
  );
};

export default Footer;
