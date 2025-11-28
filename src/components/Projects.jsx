// src/components/Projects.jsx
import React from "react";
import "./Projects.css"; // optional for custom styling
import goaltracker from "../assets/goaltracker.jpg";

const Projects = () => {
  const projectList = [
    {
      title: "Goal Tracker",
      description: "A habit-tracking web app to help users stay consistent with daily goals. Built with HTML, CSS, JavaScript, and Bootstrap.",
      live: "#",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      repo: "https://github.com/marylfisher/GoalTrackerProject",
      img: goaltracker, // only this project has an image
    },
    {
      title: "Tech Store",
      description: "Full-stack e-commerce platform for tech products with user authentication and secure checkout. Built with React, Node.js, Express, PostgreSQL, and JWT authentication.",
      tech: "React, Node.js, Express, PostgreSQL, JWT",
      live: "https://proj-2-test.onrender.com/home",
      repo: "https://github.com/AmnaEjaz488/Project-2",
      img: null, // no image
    },
    {
      title: "Skill Share",
      description: "An online skill-sharing platform allowing users to teach and learn different skills. Built with MERN stack and GraphQL integration.",
      tech: "MongoDB, Express, React, Node.js, GraphQL",
      live: "https://skill-swap-01.onrender.com/",
      repo: "https://github.com/AmnaEjaz488/Skill-Swap",
      img: null, // no image
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-5 text-center">My Projects</h2>
      <div className="row g-4">
        {projectList.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow-sm">
              {/* Render image only if it exists */}
              {project.img && (
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <p className="text-muted mb-2"><strong>Tech Stack:</strong> {project.tech}</p>
                <div className="mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm me-2 mb-2"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary btn-sm mb-2"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
