import React from "react";
import foodpic from "../../imgs/restauranfood.jpg";
function Hero() {
  return (
    <div className="Hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>The Little Lemon</h1>
          <p> Chicago</p>
          <p>We offer a variety of delicious and refreshing food options.</p>
          <a to="/book-table" className="button">
            Book a Table
          </a>
        </div>
        <div className="hero-image">
          <img src={foodpic} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;