import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import usePortfolio from "../hooks/usePortfolio";

import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaFileAlt,
  FaEnvelope,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../styles/global.css";

const Navbar = () => {
  const { activeSection } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="logo">Afra's Portfolio</h1>

        {/* Hamburger icon (mobile only) */}
        <div className="menu-icon" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li className={activeSection === "home" ? "active" : ""}>
            <Link to="/" onClick={handleLinkClick}>
              <FaHome className="nav-icon" /> Home
            </Link>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <Link to="/projects" onClick={handleLinkClick}>
              <FaProjectDiagram className="nav-icon" /> Projects
            </Link>
          </li>
          <li className={activeSection === "skills" ? "active" : ""}>
            <Link to="/skills" onClick={handleLinkClick}>
              <FaUser className="nav-icon" /> Skills
            </Link>
          </li>
          <li className={activeSection === "experience" ? "active" : ""}>
            <Link to="/experience" onClick={handleLinkClick}>
              <FaBriefcase className="nav-icon" /> Experience
            </Link>
          </li>
          <li className={activeSection === "resume" ? "active" : ""}>
            <Link to="/resume" onClick={handleLinkClick}>
              <FaFileAlt className="nav-icon" /> Resume
            </Link>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <Link to="/contact" onClick={handleLinkClick}>
              <FaEnvelope className="nav-icon" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
