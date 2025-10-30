// src/components/Projects.jsx
import React from "react";
import "./Projects.css"; // optional for custom styling

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-4 text-center">My Projects</h2>
      <div className="row g-4">
        {/* Example Project Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 1"/>
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Short description of your project.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 2"/>
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Short description of your project.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 3"/>
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Short description of your project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
