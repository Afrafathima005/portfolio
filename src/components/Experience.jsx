import React from "react";
import { motion } from "framer-motion";


const experiences = [
  {
    company: "Octanet Services",
    role: "Web Developer Intern",
    duration: "June 2023 - August 2023",
    description: [
      "Designed and developed responsive websites with modern UI/UX principles, improving user experience and accessibility.",
      "Implemented interactive features using HTML, CSS, JavaScript, and React.js, enhancing website performance.",
      "Optimized website speed and performance by improving code efficiency and implementing best practices.",
      "Collaborated with a team to develop and maintain company projects, ensuring smooth deployment and functionality."
    ],
    certificateUrl: "https://drive.google.com/file/d/1vzO5-Nm3zeOcijLltJsUYna_mBoFdWhk/view?usp=sharing"
  },
  {
    company: "Cognifyz Technologies",
    role: "Programming Intern (C/C++)",
    duration: "January 2023 - March 2023",
    description: [
      "Developed optimized algorithms and data structures using C/C++ to enhance software performance.",
      "Worked on real-world projects involving problem-solving, debugging, and code optimization.",
      "Implemented object-oriented programming principles and participated in writing reusable and efficient code.",
      "Engaged in hands-on coding challenges and contributed to innovative software development projects."
    ],
    certificateUrl: "https://drive.google.com/file/d/1vzO5-Nm3zeOcijLltJsUYna_mBoFdWhk/view?usp=sharing"
  },
  {
    company: "G-Zoft Tech Solutions",
    role: "MERN Stack Developer Intern",
    duration: "January 2025 - Present",
    description: [
      "Developed dynamic and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Designed and implemented responsive UI/UX components for seamless user experience.",
      "Integrated real-time data processing to enhance application performance and efficiency.",
      "Collaborated with cross-functional teams to deploy and maintain robust full-stack web applications."
    ],
    certificateUrl: "https://example.com/gzoft-certificate"
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="company-name">{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            <ul className="description-list">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a
              href={exp.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
