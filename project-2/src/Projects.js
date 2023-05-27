import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import plant from "./Photos/waterPlant.png"; // Update the path accordingly
import chrome from "./Photos/AIChrome.png";
import portfolio from "./Photos/AIPortfolio.png";
import app from "./Photos/AIApp.png";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="project-list">
        {/* Add project items here */}

        <div className="project-item">
          <Link
            to="https://github.com/Makushiin/Portfolio-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="project-1"
          >
            <img src={plant} alt="Project 1" className="project-1" />
          </Link>
          <h2>Automatic Watering System</h2>
          <p>Description of project 1</p>
        </div>

        <div className="project-item">
          <img src={portfolio} alt="Project 2" className="project-2" />
          <h2>Portfolio Website</h2>
          <p>Description of project 2</p>
        </div>

        <div className="project-item">
          <img src={chrome} alt="Project 3" className="project-3" />
          <h2>Chrome Extension</h2>
          <p>Description of project 3</p>
        </div>

        <div className="project-item">
          <img src={app} alt="Project 4" className="project-4" />
          <h2>Mobile App</h2>
          <p>Description of project 4</p>
        </div>

        {/* Add more project items as needed */}
      </div>
    </div>
  );
}

export default ProjectsPage;