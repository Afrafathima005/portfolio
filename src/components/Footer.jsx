import "../styles/global.css"; // Ensure CSS is imported
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // GitHub & LinkedIn

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>

      {/* Social Media Links (Arranged in One Line) */}
      <div className="social-icons">
        <a href="https://github.com/Afrafathima005" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>

        <a href="https://www.linkedin.com/in/afra-fathima-358734293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>

        {/* LeetCode Icon & Link */}
        <a href="https://leetcode.com/u/Afrafathima/" target="_blank" rel="noopener noreferrer">
          <svg
            className="social-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M19.88 24.94l-3.74 3.79 9.74 9.74L13.94 50 0 36.06 13.94 22.1l2.27 2.28zM36.06 0L22.1 13.94l-2.28-2.27 9.74-9.74L0 13.94 13.94 0zM50 36.06L36.06 50 22.1 36.06l2.27-2.28 9.74 9.74 13.94-13.94zM36.06 22.1l-13.96 13.96 2.28 2.27L38.34 24.4 36.06 22.1z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
