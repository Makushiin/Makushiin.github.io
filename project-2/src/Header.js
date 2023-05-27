import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MMLogo from "./Photos/My project (1).png";
import ResumePDF from "./Photos/Mayor_Resume.pdf";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={MMLogo} alt="Website Logo" className="website-logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="resume-link">
            <a href={ResumePDF} download>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
