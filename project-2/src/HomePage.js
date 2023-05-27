import React from 'react';
import './HomePage.css';
import websiteMax from './Photos/My project.png'; // Update the path accordingly

function HomePage() {
  return (
    <section className="home-container">
      <div className="left-section">
        <h1>Maxine Mayor</h1>
        <p>Computer Science major with a keen interest in AI</p>
      </div>
      <div className="right-section">
        <img src={websiteMax} alt="Website Max" className="website-max" />
      </div>
    </section>
  );
}

export default HomePage;