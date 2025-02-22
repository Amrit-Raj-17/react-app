import React, { useState } from "react";
import "../index.css"; // Ensure you have styling for the upload section

const UploadResume: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Handle file upload (you can modify this function to send the file to a backend)
  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name);
      alert(`File "${selectedFile.name}" uploaded successfully!`);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Resume</h2>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      
      {selectedFile && (
        <div className="file-preview">
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}

      <button className="upload-button" onClick={handleUpload}>
        Analyze ATS Score
      </button>
    </div>
  );
};

export default UploadResume;
