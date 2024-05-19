import React from "react";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>The Little Lemon</h1>
          <p>Located at XYZ Street, City</p>
          <p>We offer a variety of delicious and refreshing food options.</p>
          <a to="/book-table" className="button">
            Book a Table
          </a>
        </div>
        <div className="hero-image">
          <img src="/logo192.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;