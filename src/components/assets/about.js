import React from "react";

function About() {
  return (
    <div className="about">
      <h2>About Little Lemon</h2>
      <div className="about-content">
        <div className="text-box-placeholder">
          {/* Text box placeholder */}
        </div>
        <div className="image-placeholders">
          <div className="image-placeholder">
            <img src="/logo192.png" alt="About Image 1" />
          </div>
          <div className="image-placeholder">
            <img src="/logo192.png" alt="About Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;