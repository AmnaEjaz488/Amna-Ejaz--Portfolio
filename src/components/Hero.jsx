import React from "react";
import { Link } from "react-router-dom"; 
import "./Hero.css";
import profilePicture from "../assets/profilePicture.png";

const Hero = () => {
  return (
    <section className="hero-section container py-5">
      <div className="hero-content row align-items-center">

        {/* Text */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="display-4 fw-bold mb-3">
            Hi, I’m <span className="text-primary">Amna Ejaz</span>
          </h1>
          <h2 className="h5 text-secondary mb-4">
            Full-Stack Web Developer | React | Node.js | MongoDB | GraphQL
          </h2>
          <p className="lead mb-4">
            I create interactive, scalable, and user-focused web applications. 
            I specialize in <strong>React</strong> for front-end excellence and <strong>Node.js</strong> with <strong>MongoDB</strong> for robust back-end solutions. 
            I’m also exploring AI & Prompt Engineering to bring intelligent features to modern web experiences.
          </p>
          <div className="hero-buttons">
           <Link to="/projects" className="btn btn-primary me-3 mb-2">
    View My Work
  </Link>
            <a
  href="/resume.pdf"
  className="btn btn-outline-secondary mb-2"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume
</a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="col-md-6 text-center">
          <img
            src={profilePicture}
            alt="Amna Ejaz"
            className="img-fluid hero-img rounded-circle shadow"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
