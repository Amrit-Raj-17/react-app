import React, { useState, useEffect } from "react";
import "../hot_jobs.css";

const HotJobs: React.FC = () => {
  const [hotJobs, setHotJobs] = useState<
    { title: string; company: string; location: string; type: string }[]
  >([]);

  // Fetch hot jobs (For now, using hardcoded data. Replace with API later)
  useEffect(() => {
    const allJobs = [
      { title: "Software Engineer", company: "Google", location: "Bangalore, India", type: "Full-Time" },
      { title: "Data Scientist", company: "Amazon", location: "Hyderabad, India", type: "Part-Time" },
      { title: "Frontend Developer", company: "Microsoft", location: "New Delhi, India", type: "Internship" },
      { title: "Machine Learning Engineer", company: "Meta", location: "Pune, India", type: "Full-Time" },
      { title: "Backend Developer", company: "Flipkart", location: "Mumbai, India", type: "Full-Time" },
      { title: "DevOps Engineer", company: "TCS", location: "Chennai, India", type: "Full-Time" },
      
      // International Jobs (These will be filtered out)
      { title: "Cybersecurity Analyst", company: "Cisco", location: "San Francisco, CA", type: "Full-Time" },
      { title: "AI Researcher", company: "OpenAI", location: "Remote", type: "Full-Time" },
    ];

    // Filter jobs to show only India-based jobs
    const indianJobs = allJobs.filter((job) => job.location.includes("India"));

    setHotJobs(indianJobs);
  }, []);

  return (
    <div className="hot-jobs-container">
      <h2>🔥 Hot Jobs in India</h2>

      <div className="hot-jobs-list">
        {hotJobs.length > 0 ? (
          hotJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))
        ) : (
          <p>Loading jobs...</p>
        )}
      </div>
    </div>
  );
};

export default HotJobs;
