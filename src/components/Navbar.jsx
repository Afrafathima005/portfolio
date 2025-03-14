import { Link } from "react-router-dom";
import usePortfolio from "../hooks/usePortfolio";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaFileAlt,
  FaEnvelope,
  FaBriefcase // New Icon for Experience
} from "react-icons/fa"; 
import "../styles/global.css";
import React from "react";

const Navbar = () => {
  const { activeSection } = usePortfolio();

  return (
    <nav className="navbar">
      <h1 className="logo">Afra's Portfolio</h1>
      <ul>
        <li className={activeSection === "home" ? "active" : ""}>
          <Link to="/">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <Link to="/projects">
            <FaProjectDiagram className="nav-icon" /> Projects
          </Link>
        </li>
        <li className={activeSection === "skills" ? "active" : ""}>
          <Link to="/skills">
            <FaUser className="nav-icon" /> Skills
          </Link>
        </li>
        
        {/* ✅ New Experience Section */}
        <li className={activeSection === "experience" ? "active" : ""}>
          <Link to="/experience">
            <FaBriefcase className="nav-icon" /> Experience
          </Link>
        </li>

        <li className={activeSection === "resume" ? "active" : ""}>
          <Link to="/resume">
            <FaFileAlt className="nav-icon" /> Resume
          </Link>
        </li>

        <li className={activeSection === "contact" ? "active" : ""}>
          <Link to="/contact">
            <FaEnvelope className="nav-icon" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
