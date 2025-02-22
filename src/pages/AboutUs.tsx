import React from "react";
import "../index.css"; // Import global styles

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>JobFinder</strong>, your one-stop solution for finding the perfect job! 🚀
      </p>
      <p>
        Our mission is to connect job seekers with opportunities that match their skills, experience, and career goals.
        We use AI-driven job matching to ensure you find the right fit effortlessly.
      </p>

      <h2>🌟 Why Choose Us?</h2>
      <ul>
        <li>✔ AI-powered job matching</li>
        <li>✔ Easy resume uploads</li>
        <li>✔ Advanced job search features</li>
        <li>✔ A user-friendly experience</li>
      </ul>

      <h2>📞 Contact Us</h2>
      <p>Email: support@jobfinder.com</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  );
};

export default AboutUs;
