import React from "react";
import resumePDF from "../assets/Resume.pdf";  // Ensure this file is present
import resumePreview from "../assets/resume-thumbnail.png"; // High-quality thumbnail
import "../styles/global.css"; // Ensure global CSS is imported

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-heading">My Resume</h2>

      {/* Resume Preview Card */}
      <div className="resume-card">
        <img 
          src={resumePreview} 
          alt="Resume Preview" 
          className="resume-thumbnail" 
        />

        <div className="resume-actions">
          <a href={resumePDF} download="My_Resume.pdf" className="download-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
