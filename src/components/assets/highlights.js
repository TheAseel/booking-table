import React from "react";

function Highlights() {
  return (
    <div className="highlights">
      <h2>Weekly Specials</h2>
      <div className="highlight-items">
        <div className="highlight-item">
          <img src="/logo192.png" alt="Dish 1" />
          <div className="highlight-content">
            <h3>Dish 1 Name</h3>
            <p>Dish 1 Description</p>
            <p>$10</p>
          </div>
        </div>
        <div className="highlight-item">
          <img src="/logo192.png" alt="Dish 2" />
          <div className="highlight-content">
            <h3>Dish 2 Name</h3>
            <p>Dish 2 Description</p>
            <p>$12</p>
          </div>
        </div>
        <div className="highlight-item">
          <img src="/logo192.png" alt="Dish 3" />
          <div className="highlight-content">
            <h3>Dish 3 Name</h3>
            <p>Dish 3 Description</p>
            <p>$15</p>
          </div>
        </div>
        {/* Add more highlight items as needed */}
      </div>
      <div className="order-button">
        <a href="/order-online" className="button">
          Order Online
        </a>
      </div>
    </div>
  );
}

export default Highlights;