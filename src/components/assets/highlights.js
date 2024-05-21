import React from "react";
import foodpic2 from "../../imgs/bruchetta.svg";
import foodpic3 from "../../imgs/desert.jpg";
import foodpic4 from "../../imgs/greek salad.jpg";

function Highlights() {
  return (
    <div className="highlights">
      <h2>Weekly Specials</h2>
      <div className="highlight-items">
        <div className="highlight-item">
          <img src={foodpic2} alt="Dish 1" />
          <div className="highlight-content">
            <h3>Dish 1 Name</h3>
            <p>Dish 1 Description</p>
            <p>$10</p>
            <a href="/order-dish1" className="button">
              Order Online
            </a>
          </div>
        </div>
        <div className="highlight-item">
          <img src={foodpic3} alt="Dish 2" />
          <div className="highlight-content">
            <h3>Dish 2 Name</h3>
            <p>Dish 2 Description</p>
            <p>$12</p>
            <a href="/order-dish2" className="button">
              Order Online
            </a>
          </div>
        </div>
        <div className="highlight-item">
          <img src={foodpic4} alt="Dish 3" />
          <div className="highlight-content">
            <h3>Dish 3 Name</h3>
            <p>Dish 3 Description</p>
            <p>$15</p>
            <a href="/order-dish3" className="button">
              Order Online
            </a>
          </div>
        </div>
        {/* Add more highlight items as needed */}
      </div>
    </div>
  );
}

export default Highlights;