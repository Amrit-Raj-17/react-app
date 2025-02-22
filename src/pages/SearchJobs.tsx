import React, { useState } from "react";
import "../index.css"; // Ensure you have styles for this component

const SearchJobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("Full-Time");
  const [jobs, setJobs] = useState<string[]>([]);

  // Handle job search (Mock function, replace with API call if needed)
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter a job title or keyword.");
      return;
    }

    // Simulated search results (Replace with API response later)
    setJobs([
      `Software Engineer - ${location || "Any Location"} - ${jobType}`,
      `Frontend Developer - ${location || "Any Location"} - ${jobType}`,
      `Data Analyst - ${location || "Any Location"} - ${jobType}`,
    ]);
  };

  return (
    <div className="search-jobs-container">
      <h2>Search for Jobs</h2>
      
      <div className="search-form">
        <input
          type="text"
          placeholder="Job title, keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        
        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>

        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      {/* Display search results */}
      {jobs.length > 0 && (
        <div className="job-results">
          <h3>Job Results:</h3>
          <ul>
            {jobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchJobs;
