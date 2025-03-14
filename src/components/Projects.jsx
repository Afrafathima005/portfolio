import "../styles/global.css";
import aiLabImg from "../images/3.png";
import shopliftingImg from "../images/5.png";
import learningImg from "../images/4.png";
import img from "../images/6.png";
import img2 from "../images/7.png";
import React from 'react';
const projectsData = [
  { 
    title: "Yieldify", 
    description: "AI-powered Smart Agriculture",
    details: "An innovative solution that leverages AI to optimize farming processes, improving efficiency and sustainability.",
    image: aiLabImg, 
    github: "https://github.com/Harish24-10-2005/Yieldify", 
    demo: "#" 
  },
  { 
    title: "Expense Tracker", 
    description: "Track your daily expenses",
    details: "A simple and effective way to monitor expenses, categorize transactions, and analyze spending patterns over time.",
    image: shopliftingImg, 
    github: "#", 
    demo: "#" 
  },
  { 
    title: "Virtual AI Assistent", 
    description: "Your personalized AI companion to simplify daily tasks.",
    details: "A smart virtual assistant that helps users book doctor appointments, set reminders, and get quick answers to health-related queries using AI and NLP technologies.",
    image: img, 
    github: "#", 
    demo: "#" 
  },
  { 
    title: "Traffic Accident Prediction", 
    description: "Predict and analyze road accidents to enhance traffic safety and management.",
    details: "A machine learning-based system that forecasts accident-prone areas and times by analyzing traffic data. Helps authorities take proactive measures to reduce accidents and improve road safety.",
    image: img2, 
    github: "#", 
    demo: "#" 
  },
  { 
    title: "Appointment Booking App", 
    description: "Book your doctor appointment.",
    details: "A seamless online booking system for patients to schedule medical appointments with ease and convenience.",
    image: learningImg, 
    github: "#", 
    demo: "#" 
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.github} className="project-button github" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} className="project-button demo" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
            <p className="project-details">{project.details}</p> {/* ✅ Full project details here */}
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
