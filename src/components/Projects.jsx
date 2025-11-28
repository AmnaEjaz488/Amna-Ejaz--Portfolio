// src/components/Projects.jsx
import React from "react";
import "./Projects.css"; // optional for custom styling

const Projects = () => {
  const projectList = [
    {
      title: "Goal Tracker",
      description: "A habit-tracking web app to help users stay consistent with daily goals. Built with HTML, CSS, JavaScript, and Bootstrap.",
      img: "https://via.placeholder.com/300x200", // replace with project screenshot
      tech: "HTML, CSS, JavaScript, Bootstrap",
      live: "#", // replace with live URL if available
      repo: " https://github.com/marylfisher/GoalTrackerProject",
    },
    {
      title: "Tech Store",
      description: "Full-stack e-commerce platform for tech products with user authentication and secure checkout. Built with React, Node.js, Express, PostgreSQL, and JWT authentication.",
      img: "https://via.placeholder.com/300x200",
      tech: "React, Node.js, Express, PostgreSQL, JWT",
      live: "https://proj-2-test.onrender.com/home",
      repo: "https://github.com/AmnaEjaz488/Project-2",
    },
    {
      title: "Skill Share",
      description: "An online skill-sharing platform allowing users to teach and learn different skills. Built with MERN stack and GraphQL integration.",
      img: "https://via.placeholder.com/300x200",
      tech: "MongoDB, Express, React, Node.js, GraphQL",
      live: "https://skill-swap-01.onrender.com/",
      repo: "https://github.com/AmnaEjaz488/Skill-Swap",
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-5 text-center">My Projects</h2>
      <div className="row g-4">
        {projectList.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={project.img}
                className="card-img-top"
                alt={project.title}
              />
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
