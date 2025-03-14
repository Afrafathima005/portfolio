import React, { useState, useEffect, useMemo } from 'react';
import profilePic from "../images/image.png";
import "../styles/global.css";

const Hero = () => {
  const roles = useMemo(() => [
    "Full Stack Developer", 
    "Web Developer", 
    "Competitive Programmer", 
    "Data Science Enthusiast", 
    "Machine Learning", 
    "Software Developer"
  ], []);

  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;
    let switchingTimeout;

    const typeRole = () => {
      const role = roles[roleIndex];
      setCurrentRole((prev) => role.slice(0, prev.length + 1));
    };

    if (currentRole.length < roles[roleIndex].length) {
      typingTimeout = setTimeout(typeRole, 150); // Typing speed (150ms)
    } else {
      switchingTimeout = setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to next role
        setCurrentRole(''); // Clear the current role
      }, 2000); // Wait for 2 seconds before switching role
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(switchingTimeout);
    };
  }, [currentRole, roleIndex, roles]);

  return (
    <div className="hero-container ">
      {/* Add the ParticlesBackground component for the particles effect */}
     
      <div className="fast-moving-background"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I am <span className="highlight">AFRA FATHIMA</span>
        </h1>
        <p className="hero-subtitle">
          <span className="role-text">{currentRole}</span>
        </p>
        <p className="hero-description">
        A passionate software developer with a love for creating intuitive and impactful digital experiences. I specialize in Full-Stack Development, Machine Learning, and UI/UX Design, combining creativity with technical expertise to build user-friendly, scalable solutions. I’m always exploring new technologies and taking on exciting challenges.
        </p>
      </div>

      <div className="hero-image">
        <div className="profile-pic-wrapper">
          <img src={profilePic} alt="Afra Fathima" className="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
