
import React from "react";
import Bookingform from "./bookingform";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./hero";
import "./booking.css"

function Booking() {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/" className="nav-item">
            
          </Link>
          <Link to="/booking" className="nav-item">
            
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/booking" element={<Bookingform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Booking;
