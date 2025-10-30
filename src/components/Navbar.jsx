import React from "react";
import { Link } from "react-router-dom"; // use Link for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3">
      <div className="container">
        {/* Brand linking to home page */}
        <Link className="navbar-brand fw-bold" to="/">
          Amna Ejaz
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav fw-semibold">
            {/* Updated to use Link for routing */}
                 <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
    <Link className="nav-link" to="/projects">Projects</Link>
  </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
       
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
