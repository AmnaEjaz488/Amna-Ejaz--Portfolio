import React from "react";
import "./Hero.css";
import profilePicture from "../assets/profilePicture.png"; // <-- ADD THIS IMPORT

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
            Full-Stack Developer | React | Node.js | MongoDB | GraphQL | Prompt Engineering
          </h2>
          <p className="lead mb-4">
            I’m a passionate full-stack developer who loves building dynamic, scalable, and user-focused web applications. With expertise in <strong>React</strong> for front-end excellence and <strong>Node.js</strong> with <strong>MongoDB</strong> for powerful back-end solutions, I create seamless digital experiences. Exploring <strong>AI & Prompt Engineering</strong> to bring intelligent features to modern web apps.
          </p>
          <a href="/projects" className="btn btn-primary">
            View My Work
          </a>
        </div>
        {/* Illustration Image */}
        <div className="col-md-6 text-center">
          <img
            src={profilePicture}
            alt="Amna Ejaz"
            className="img-fluid hero-img"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
