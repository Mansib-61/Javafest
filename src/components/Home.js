import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Research Buddy</h1>
        <p>Your one-stop platform for research and academic papers</p>
        <div className="home-links">
          <Link to="/auth" className="home-link">Register / Login</Link>
          <Link to="/upload" className="home-link">Upload Research Paper</Link>
          <Link to="/chatbot" className="home-link">Research Assistant Chatbot</Link>
          <Link to="/review" className="home-link">Review Research Paper</Link>
          <Link to="/papers" className="home-link">View Research Papers</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
