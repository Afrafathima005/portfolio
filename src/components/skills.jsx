import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiC, SiCplusplus, SiAnaconda, SiFigma, SiCanva } from "react-icons/si";
import "../styles/global.css";
import CCertificate from "../images/12.png";
import CCertificate1 from "../images/11.png";
import CCertificate2 from "../images/13.png";
import CCertificate3 from "../images/14.png";
import CCertificate4 from "../images/15.png";
import CCertificate5 from "../images/16.png";
const techStack = [
  { name: "C", icon: <SiC className="icon" /> },
  { name: "C++", icon: <SiCplusplus className="icon" /> },
  { name: "Python", icon: <FaPython className="icon" /> },
  { name: "HTML", icon: <FaHtml5 className="icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon" /> },
  { name: "JavaScript", icon: <FaJs className="icon" /> },
  { name: "Java", icon: <FaJava className="icon" /> },
  { name: "SQL", icon: <FaDatabase className="icon" /> }
];

const toolStack = [
  { name: "GitHub", icon: <FaGithub className="icon" /> },
  { name: "Git", icon: <FaGitAlt className="icon" /> },
  { name: "VS Code", icon: <SiAnaconda className="icon" /> },
  { name: "Figma", icon: <SiFigma className="icon" /> },
  { name: "Canva", icon: <SiCanva className="icon" /> }
];

const codingProfiles = [
  {
    name: "LeetCode",
    details: "Ranking: 252,701 | Global Contest Rating: 1518 | Solved: 210+ problems",
    profileUrl: "https://leetcode.com/yourprofile"
  },
  {
    name: "HackerRank",
    details: "Earned 1 Gold & 3 Silver Badges",
    profileUrl: "https://www.hackerrank.com/yourprofile"
  },
  {
    name: "SkillRack",
    details: "Rating: 31,599 | Solved: 700+ problems",
    profileUrl: "https://www.skillrack.com/yourprofile"
  }
];
const certifications = [
  {
    name: "Problem Solving through Programming in C",
    imageUrl: CCertificate,
    certificateUrl: "https://example.com/python-certificate"
  },
  {
    name: "Computer Archetecture",
    imageUrl: CCertificate1,
    certificateUrl: "https://example.com/python-certificate"
  },
  {
    name: "Google AI Essentials",
    imageUrl: CCertificate2,
    certificateUrl: "https://example.com/python-certificate"
  },
  {
    name: "Mastering Data Structures and Algorithms using C and C++",
    imageUrl: CCertificate3,
    certificateUrl: "https://example.com/python-certificate"
  },
  {
    name: "Python Bootcamp",
    imageUrl: CCertificate4,
    certificateUrl: "https://example.com/python-certificate"
  },
  {
    name: "java Programming",
    imageUrl: CCertificate5,
    certificateUrl: "https://example.com/python-certificate"
  },
];


const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-category">
          <h3 className="skills-category-heading">Tech Stack</h3>
          <ul className="skills-list">
            {techStack.map((tech, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} className="skill-item">
                {tech.icon} {tech.name}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-heading">Tool Stack</h3>
          <ul className="skills-list">
            {toolStack.map((tool, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} className="skill-item">
                {tool.icon} {tool.name}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="certifications-section">
  <h3 className="certifications-heading">Certifications</h3>
  <div className="certifications-container">
    {certifications.map((cert, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="certification-card"
      >
        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
          <img src={cert.imageUrl} alt={cert.name} className="certification-image" />
          <p className="certification-title">{cert.name}</p>
        </a>
      </motion.div>
    ))}
  </div>
</div>

<br></br>
<div className="skills-category">
  <h3 className="skills-category-heading">Coding Profiles</h3>
  <ul className="skills-list">
    {codingProfiles.map((profile, index) => (
      <motion.li key={index} whileHover={{ scale: 1.1 }} className="skill-item">
        <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
          <span className="profile-name">{profile.name}</span>: {profile.details}
        </a>
      </motion.li>
    ))}
  </ul>
</div>

        
      </div>
    </section>
  );
};

export default Skills;
