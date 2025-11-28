import React from "react";
import "./About.css";

const skills = [
  "HTML", "CSS", "JavaScript", "Terminal Commands", "DOM Manipulation",
  "Browser APIs", "GitHub Copilot", "Team Collaboration", "Agile Development",
  "Project Demonstration & Storytelling", "Node.js", "TypeScript",
  "Object-Oriented Programming", "Single Page React Apps", "SQL",
  "MVC Paradigm", "React", "NoSQL", "MERN Stack", "Testing",
  "CI/CD Pipelines", "Python Fundamentals", "OOP with Python",
  "Prompt Engineering", "AI Integration"
];

const About = () => {
  return (
    <section id="about" className="about-section container py-5">
 <h2 className="about-title text-center mb-5">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p className="lead">
            Hi, I’m <strong>Amna Ejaz</strong>, a passionate and reliable full-stack developer with a unique blend of technical expertise and real-world professional experience. 
            From 2016–2023, I built a career in <strong>customer service, security, and public safety</strong>, developing professionalism, diligence, and reliability. These are the qualities I bring to every project.
          </p>
          <p className="lead">
            I recently completed an intensive <strong>Software Development Bootcamp</strong>, mastering tools and technologies to build dynamic, modern web applications. My key skills include:
          </p>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img 
            src="https://via.placeholder.com/400x400" 
            alt="Amna Ejaz" 
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
      <p className="mt-4 text-center lead">
        My goal is to leverage my diverse experience and technical skills to build impactful, user-focused web applications while continuously learning and growing as a full-stack developer.
      </p>
    </section>
  );
};

export default About;
