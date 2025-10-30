import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <div className="container text-center">
        <div className="social-icons mb-3">
          {/* External links */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          {/* Internal Contact page */}
          <Link to="/contact">
            <FaEnvelope />
          </Link>
        </div>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Amna Ejaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
