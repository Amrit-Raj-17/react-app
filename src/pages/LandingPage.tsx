import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Job Portal</h1>
      <p>Find your perfect job match effortlessly.</p>
      <div className="button-container">
        <Link to="/upload_resume">Upload Resume</Link>
        <Link to="/search_jobs">Search Jobs</Link>
        <Link to="/hot_jobs">Hot Jobs</Link>
      </div>
    </div>
  );
};

export default LandingPage;
