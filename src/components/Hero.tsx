import React from 'react';
import '../styles/components/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Website</h1>
          <p className="hero-subtitle">
            Build amazing things with React and TypeScript
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
