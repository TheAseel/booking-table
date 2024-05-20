import React, { useState } from 'react';
import logo from "../imgs/Logo .svg"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <img src={logo} alt="Logo" />

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? "visible" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Menu">Menu</a></li>
        <li><a href="/Reservation">Reservation</a></li>
        <li><a href="/Order Online">Order Online</a></li>
        <li><a href="/Login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;