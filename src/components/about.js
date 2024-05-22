import React from "react";
import foodpic4 from "../imgs/greek salad.jpg";

function About() {
  return (
    <div className="about">
      <h2>About Little Lemon</h2>
      <div className="about-content">
        <div className="text-box-placeholder">
          <p>Welcome to Little Lemon, a delightful restaurant specializing in Mediterranean cuisine. Our passion for fresh ingredients and vibrant flavors sets us apart. Come and experience the taste of Greece, Italy, and beyond.</p>
        </div>
        <div className="image-placeholders">
          <div className="image-placeholder">
            <img src={foodpic4} alt="About Image 1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;